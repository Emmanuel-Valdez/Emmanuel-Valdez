# Contexto actual del portfolio

## Enfoque

El portfolio debe evaluarse como evidencia de perfil backend/fullstack, no como portfolio frontend puro.

Objetivo principal:

- Mostrar capacidad para construir software de negocio con .NET, C#, SQL Server y criterio de producto.
- Presentar Ukiyo como caso real de e-commerce y gestion, no como proyecto academico.
- Comunicar experiencia fullstack suficiente sin desplazar el foco backend.
- Mostrar interes y preparacion hacia Linux, Docker y cloud solo como crecimiento futuro, no como experiencia productiva actual.

## Estado actual

Lo importante ya esta implementado:

- Portfolio bilingue Espanol/Ingles con rutas estaticas en `/`, `/en/`, `/proyectos/ukiyo/` y `/en/projects/ukiyo/`.
- Hero reposicionado hacia Backend .NET, e-commerce, datos y sistemas de gestion.
- Hero refinado hacia sistemas de negocio, datos y logica operativa.
- Proyectos aparecen antes que experiencia para mostrar evidencia antes que contexto operativo.
- Ukiyo destacado como case study principal.
- Proyectos secundarios presentados como soporte/progresion, no como evidencia equivalente a Ukiyo.
- AboutMe renderiza intro + texto destacado de forma directa, evitando depender de un `split` fragil entre copy normal y resaltado.
- Case study de Ukiyo recentrado como evidencia tecnica backend, no como publicidad del producto.
- Case study de Ukiyo con resumen tecnico reducido, video walkthrough embebido, seccion `Que construi`, evidencia visual temprana, alcance de demo compacto, calculadora admin destacada, decisiones backend escaneables, accordions tecnicos y galeria final colapsada como evidencia adicional.
- Copy bilingue sincronizado para el contenido visible principal.
- Metadata localizada, canonical, hreflang y Open Graph.
- CVs separados por idioma en `public/media/`.
- Mejoras de accesibilidad/mobile aplicadas: skip link, foco visible, targets tactiles mas amplios, resumen accesible del video y accordions nativos con indicadores visibles.
- README con alcance, rutas, stack, estructura y notas de uso.

## Fortalezas actuales

- Proyecto real con problema de negocio claro.
- Stack relevante para busquedas .NET: ASP.NET Core, EF Core, SQL Server, Identity, Stripe y OAuth.
- Complejidad real: catalogo, carrito, ordenes, roles, empresas, precios, costos, localizacion y administracion.
- Resumen tecnico cerca del hero que permite entender rol, problema, stack, prueba de implementacion y valor recruiter en una lectura rapida.
- Evidencia visual estatica y dinamica del flujo de Ukiyo: video, flujo cliente, costos por producto, dashboard de precios finales y galeria agrupada.
- La calculadora administrativa ahora funciona como proof point central: costos base, reglas de margen, soporte SQL y resultado admin.
- La profundidad tecnica se presenta como `Key Backend Decisions`, con modelo de datos, stack por capas y notas de implementacion en accordions secundarios.
- Presentacion bilingue para ampliar alcance.
- Portfolio simple, profesional y suficiente para acompanar postulaciones backend/fullstack.
- Home page mantiene la estructura actual y evita que proyectos secundarios diluyan el foco backend .NET de Ukiyo.
- Stage 10 redujo densidad: CTA del home orientado a caso backend .NET, bento de Ukiyo reducido, demo scope comprimido, arquitectura simplificada, stack duplicado eliminado y galeria final colapsada.

## Riesgos pendientes

- La validacion final en produccion depende de revisar Netlify despues de cada push importante.
- El video ya tiene resumen accesible, pero conviene verificar peso, carga, mobile y reproduccion en produccion.
- La evidencia backend podria fortalecerse con tests, consultas, migraciones o documentacion tecnica mas profunda cuando existan como evidencia verificable.
- El siguiente riesgo de densidad esta en volver a agregar secciones visibles sin una prueba nueva clara; preferir detalles colapsados o documentacion externa.
- No hay que presentar Docker, Linux, cloud ni tests como experiencia productiva hasta tener implementacion real y verificable.

## Mejoras futuras con mas impacto

1. QA visual y funcional en produccion para las 4 rutas principales despues de cambios relevantes.
2. Verificar la experiencia del video de Ukiyo en desktop/mobile y ajustar solo si afecta carga o legibilidad.
3. Revisar Netlify despues de cada push importante para confirmar que el build publicado refleja los cambios.
4. Sumar evidencia backend verificable: tests, validaciones, queries, migraciones o decisiones tecnicas explicadas.
5. Documentar Docker/Linux/cloud solo cuando exista un deploy real o laboratorio reproducible con evidencia.
6. Mantener el contenido bilingue sincronizado sin seguir agregando secciones si no aumentan la senal profesional.
7. Mantener Ukiyo como prueba tecnica principal, no como marca protagonista: usar labels de caso tecnico, evidencia implementada y decisiones backend.

## Criterio para cambios nuevos

- Si cambia copy visible en Espanol, actualizar tambien Ingles.
- Si se edita el texto destacado de AboutMe, mantener `intro` y `strong` como piezas separadas para evitar duplicados o capitalizacion incorrecta.
- Si cambia una ruta, revisar `canonical`, `hreflang` y switch de idioma.
- Si se agrega media, verificar peso, mobile, controles y alt text o etiqueta accesible.
- Si se agrega contenido tecnico, mantenerlo concreto, verificable y seguro.
- Si se menciona infraestructura, distinguir aprendizaje/preparacion de experiencia productiva.

## Veredicto actualizado

El portfolio ya cumple su objetivo principal: presentar a Emmanuel Valdez como desarrollador backend/fullstack .NET con evidencia concreta en e-commerce, datos y sistemas de gestion.

La mejora mas valiosa ahora no es rehacer la UI completa ni agregar mas secciones. El refactor principal de Ukiyo ya cubre resumen tecnico, evidencia visual, que construi, calculadora destacada, decisiones backend y reduccion de densidad. Lo siguiente debe ser QA de produccion y nueva evidencia backend real cuando exista.
