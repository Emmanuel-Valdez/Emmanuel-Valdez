# Cómo trabajo con agentes: implementar es barato, verificar es el trabajo

Un agente puede escribir una feature entera en minutos. Lo difícil no es eso: es demostrar que la feature hace lo correcto cuando el test pasa, cuando no puede fallar y cuando dos requests llegan al mismo tiempo. Este documento describe el loop que uso en VaultShop, con tres cambios reales y sus defectos reales. Todo el código se implementó con agentes bajo revisión humana; el criterio, las decisiones y la verificación son míos.

## El loop

El método es spec-driven development con TDD, en pasos chicos:

1. Escribo la spec en `openspec/` con requisitos y escenarios verificables.
2. Derivo criterios de aceptación de esos escenarios, no de una idea vaga de la feature.
3. Escribo un test que falla por la razón correcta. Si pasa antes del cambio, el test no sirve.
4. Le doy al agente una tarea acotada: un archivo, un comportamiento, un criterio.
5. El agente implementa. Yo leo el diff completo, no el resumen.
6. Verifico en tres capas: tests, build y comportamiento renderizado.
7. Cierro con CI en verde y archivo el change con `openspec archive`.

El agente implementa, propone tests y ejecuta comandos. Yo defino el alcance, reviso cada diff, decido qué se rechaza y corro la verificación final. Los sprints y los diffs chicos son parte del método: un cambio de una sola preocupación se revisa de verdad, uno de mil líneas se aprueba por cansancio.

La regla que ordena todo: un test verde no es evidencia hasta que probé que puede fallar.

## El arnés

Los agentes no trabajan de memoria. Cada repo tiene un `AGENTS.md` con el stack, las fuentes de verdad (código, tests, `openspec/`, `plans/`), las reglas de trabajo y la advertencia de no confiar en un plan por encima del código actual. Ese archivo también documenta `rtk`, un CLI propio que reescribe comandos de shell para recortar tokens en git, tests y builds.

Encima de eso uso skills (las de OpenSpec para proponer, aplicar y archivar, más una de testing web), subagentes con roles acotados (revisión de código, testing, arquitectura) y servidores MCP para buscar en el grafo del código en lugar de hacer grep a ciegas. OpenSpec es el registro: propuesta, diseño, tareas y specs viven en el repo.

La configuración privada no se publica. Lo que se documenta es el patrón: contexto versionado, skills con alcance definido, subagentes que revisan, MCP para navegar el código, y un tracker de cambios que no depende de la memoria de nadie.

## Caso 1: `product-variants-hardening`

**Contexto.** El change original `product-variants` se cerró 21/21. La revisión post-implementación encontró 7 defectos que las tareas no cubrían. El más grave: oversell bajo concurrencia real.

`CheckoutService` leía `StockQuantity`, validaba y escribía un valor absoluto bajo READ COMMITTED. Dos checkouts simultáneos de la última unidad pasaban la validación; el segundo sobreescribía con un valor no negativo, así que el constraint `CK_Products_StockQuantity_NonNegative` nunca se disparaba. La spec de stock exige que gane como máximo una orden; no se cumplía.

Peor: el test 6.1 era secuencial. Ejecutaba dos checkouts uno después del otro y pasaba incluso sin transacción. No contenía ninguna carrera, así que no probaba nada sobre concurrencia. Ese test era el agujero, no la prueba.

**Decisión.** Reemplazar el decremento absoluto por una escritura relativa condicional por producto: `UPDATE Products SET StockQuantity = StockQuantity - total WHERE Id = id AND StockQuantity >= total`, con cero filas afectadas tratadas como `InsufficientStock`. La validación previa queda como fast path; la escritura condicional es la guarda real. Se implementó con `ExecuteUpdate` dentro de la transacción existente, sin cambiar el isolation level ni agregar locking. El constraint queda como backstop.

**Alternativa rechazada.** Subir el isolation level o agregar locks explícitos. El problema no era el nivel de aislamiento: era escribir un valor absoluto calculado sobre una lectura vieja. Un lock más grande habría escondido el bug con menos throughput.

**Verificación.** Tests determinísticos de la guarda: un checkout con stock exacto pasa y deja 0; el segundo se rechaza con stock intacto y sin orden creada. El test viejo se renombró por lo que realmente prueba y la limitación de SQLite (serializa escritores, no puede probar carreras reales) quedó registrada. El resto del change sumó guarda de borrado de variantes referenciadas por carrito, verificación de ownership en mutaciones admin contra el `productId` posteado, labels de variante en carrito y checkout, `VariantLabel` de 500 a 2000 con `[MaxLength]`, y batching de `GenerateCombinations` a un solo `SaveChanges`.

**Lección.** Un test verde que no puede fallar no es evidencia. Si el test sigue pasando al revertir el fix, no estaba probando el fix.

## Caso 2: `descuentos-correctitud-pagos`

**Contexto.** Una auditoría del change ya shipeado `descuentos-promociones` encontró errores de dinero reales: BxGy multi-grupo otorgaba de menos (sobrecobro sistemático), los cupones degradaban descuentos por línea más grandes, y los precios persistidos podían no sumar el total por redondeo.

**Decisión.** Seis cambios:

- BxGy acumula por promoción: cada grupo ganado suma su beneficio por unidad, y entre promociones gana el máximo por línea.
- El cupón usa `Max` por línea: conserva el descuento específico mayor y el total de cabecera pasa a ser la suma de los ganadores.
- El redondeo va al centavo con el remanente en la última línea del mismo producto, para que las líneas siempre sumen el total.
- El incremento de usos del cupón es atómico: `UPDATE ... WHERE UsesCount < MaxUses`; cero filas significa que se perdió la carrera y cae al camino sin descuento ya existente.
- `PaymentDiscountMotive` se persiste como columna `varchar(120)`, en lugar de `[NotMapped]`, para que el motivo quede congelado en la orden.
- El badge del storefront y el checkout comparten `IsGrantableBxGy`, la misma guarda de vigencia, scope, opt-in mayorista y cantidades.

**Alternativas rechazadas.** Prorratear el cupón en partes exactas (degradaba líneas con descuentos mayores y corrompía reembolsos parciales), multiplicar grupos por precio unitario en BxGy (inexacto con SKUs mezclados), `UsesCount++` trackeado con re-chequeo (bajo READ COMMITTED pierde la carrera por diseño), y stacking de descuentos específicos.

**Verificación.** Cada fix entró con un test que fallaba antes y pasaba después: `BxGy_MultiQuantitySameSku_GrantsDiscountPerGroup` (6 unidades a 100 con 2x1 → 300 de descuento), `Coupon_DoesNotShrinkALargerPerLineDiscount` (línea con oferta de 5000 conserva 5000 frente a un cupón del 10%), `FrozenLines_SumToHeaderTotal` (200 en 3 unidades, precios enteros sumando exacto), carrera de cupón en creación, supervivencia del desglose congelado tras borrar promoción y cupón, y renderizado de badge y tachado en ambas culturas.

**Lección.** Una sola fuente para el dinero. Y la UI no promete lo que el checkout no va a dar: si el badge se calcula con guardas distintas a las del evaluador, el bug es de producto.

## Caso 3: `payment-reconciliation`

**Contexto.** Las órdenes con Stripe o Mercado Pago quedan `Pending` hasta que el webhook o el retorno del navegador confirma el pago. Si el webhook se pierde y el cliente no vuelve a la URL de éxito, la orden queda pendiente para siempre aunque el proveedor la reporte pagada.

**Decisión.** Un `BackgroundService` con `PeriodicTimer` y un `IServiceScope` por ciclo. Reutiliza el camino existente: `GetCheckoutSessionStatus` y `MarkCheckoutSessionPaid`, con la misma idempotencia y las mismas guardas de email que usan los webhooks. Para Mercado Pago valida `ExternalReference` y `TransactionAmount` antes de promover, porque la búsqueda por preferencia devuelve el pago más reciente. Defaults: `StaleAfter=5m`, `MaxAge=48h`, `BatchSize=20`, `Interval=10m`. Un `try/catch` por orden para que una orden rota no corte el ciclo, y logs estructurados sin secretos.

**Alternativas rechazadas.** Una abstracción nueva de cliente de reconciliación (duplicaba el camino de estados), una cola o cron externo (infraestructura para un problema que todavía no la pedía), y UI o tabla nueva (los logs alcanzan para v1). También rechacé duplicar la lógica de transición y email: el riesgo de drift es peor que el acoplamiento.

**Verificación.** `PaymentReconciliationTests` cubre ventana de selección, tope de batch, exclusión de `BankTransfer` y de órdenes terminales, idempotencia, aislamiento por orden, proveedor deshabilitado, mismatch de monto o referencia en Mercado Pago, y email de recibo exactamente una vez. La verificación live en sandbox se omitió porque los proveedores en modo test no emitían webhooks; se reemplazó por un smoke con proveedor fake que simula el pago y confirma la promoción sin webhook.

**Lección.** Una red de seguridad va sobre el camino primario, no en lugar de él. Trabajo acotado, y el supuesto de instancia única documentado: si algún día hay dos instancias, hace falta lock por fila o advisory lock.

## Modos de falla

Los reconozco por señales concretas:

- **Test theater.** El test pasa sin el fix. Lo detecto revirtiendo la lógica y corriendo el test; si sigue verde, no prueba nada.
- **Carreras mal probadas.** Dos operaciones secuenciales presentadas como concurrencia. Lo detecto leyendo el test: si no hay dos contextos o dos transacciones reales, no hay carrera.
- **Reglas duplicadas.** La misma validación escrita dos veces (badge y carrito, webhook y job). Lo detecto con grep de las guardas y comparando condiciones.
- **Payloads de proveedor.** Confiar en el primer resultado que devuelve la API. Lo detecto preguntando qué campo identifica la orden y qué pasa si el proveedor devuelve otro pago.
- **Sobre-ingeniería.** Abstracciones con una sola implementación, colas para un job de 20 filas, tablas nuevas sin consulta que las lea. Lo detecto preguntando qué se rompe si lo borro.
- **Contexto perdido.** El agente inventa una regla que la spec no dice. Lo detecto contrastando cada afirmación del diff contra el escenario de OpenSpec.

## Qué no delego

Migraciones, pagos, permisos, deploy y copy final. El agente puede proponer el `ALTER TABLE`, pero reviso el script, el nullable y el backfill. Puede escribir el camino de pago, pero la validación contra el proveedor y la decisión de promover la orden las reviso yo. Permisos y roles igual: los verifico contra el `productId` o el rol real, no contra el formulario. El deploy lo ejecuto yo. El copy final lo escribo yo, porque un agente no sabe qué prometió el producto.

## Qué mido

Tiempo de ciclo (de spec a merge), retrabajo (cuánto de lo mergeado hubo que corregir después) y defectos escapados (los que aparecieron fuera del loop). No mido cantidad de tests, líneas de código ni prompts: son métricas de actividad, no de resultado.

Todavía no tengo una muestra grande. Tres changes no alcanzan para sacar conclusiones estadísticas, y no voy a inventar números.

## Cierre

El valor de este flujo no está en que el agente escriba rápido. Está en que la spec, el test y el diff quedan como evidencia de qué se decidió y por qué. Los tres casos de arriba son correcciones posteriores: el sistema funcionó porque la revisión encontró lo que la implementación había dejado pasar.

- [VaultShop](https://github.com/Emmanuel-Valdez/VaultShop)
- [product-variants-hardening](https://github.com/Emmanuel-Valdez/VaultShop/blob/main/openspec/changes/archive/2026-10-06-product-variants-hardening/proposal.md)
- [descuentos-correctitud-pagos](https://github.com/Emmanuel-Valdez/VaultShop/blob/main/openspec/changes/archive/2026-10-08-descuentos-correctitud-pagos/design.md)
- [payment-reconciliation](https://github.com/Emmanuel-Valdez/VaultShop/blob/main/openspec/changes/archive/2026-09-09-payment-reconciliation/design.md)
