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
- Proyectos aparecen antes que experiencia para mostrar evidencia antes que contexto operativo.
- Ukiyo destacado como case study principal.
- Case study de Ukiyo con resumen ejecutivo tipo bento, video walkthrough embebido, screenshots reales, alcance de demo, diagrama de arquitectura y modelo de datos conceptual.
- Copy bilingue sincronizado para el contenido visible principal.
- Metadata localizada, canonical, hreflang y Open Graph.
- CVs separados por idioma en `public/media/`.
- README con alcance, rutas, stack, estructura y notas de uso.

## Fortalezas actuales

- Proyecto real con problema de negocio claro.
- Stack relevante para busquedas .NET: ASP.NET Core, EF Core, SQL Server, Identity, Stripe y OAuth.
- Complejidad real: catalogo, carrito, ordenes, roles, empresas, precios, costos, localizacion y administracion.
- Resumen ejecutivo cerca del hero que permite entender tipo de proyecto, rol, problema, stack, alcance, evidencia y valor recruiter en una lectura rapida.
- Evidencia visual estatica y dinamica del flujo de Ukiyo.
- Presentacion bilingue para ampliar alcance.
- Portfolio simple, profesional y suficiente para acompanar postulaciones backend/fullstack.

## Riesgos pendientes

- La validacion final en produccion depende de revisar Netlify despues de cada push importante.
- El video aporta evidencia dinamica, pero conviene verificar peso, carga, mobile y reproduccion en produccion.
- La evidencia backend podria fortalecerse con tests, consultas, decisiones tecnicas o documentacion de arquitectura mas profunda.
- El siguiente riesgo de densidad esta en las secciones tecnicas posteriores; conviene priorizar evidencia visual temprana, calculadora de pricing y decisiones backend escaneables antes de agregar mas contenido.
- No hay que presentar Docker, Linux, cloud ni tests como experiencia productiva hasta tener implementacion real y verificable.

## Mejoras futuras con mas impacto

1. Restaurar impacto visual temprano en Ukiyo con 1 o 2 screenshots fuertes antes de la profundidad tecnica.
2. Dar mas prominencia a la calculadora admin de pricing como prueba diferencial del sistema.
3. Convertir profundidad tecnica dispersa en decisiones backend mas escaneables, usando accordions solo para detalles secundarios.
4. QA visual y funcional en produccion para las 4 rutas principales despues de cambios relevantes.
5. Verificar la experiencia del video de Ukiyo en desktop/mobile y ajustar solo si afecta carga o legibilidad.
6. Sumar evidencia backend verificable: tests, validaciones, queries, migraciones o decisiones tecnicas explicadas.
7. Documentar Docker/Linux/cloud solo cuando exista un deploy real o laboratorio reproducible con evidencia.
8. Mantener el contenido bilingue sincronizado sin seguir agregando secciones si no aumentan la senal profesional.

## Criterio para cambios nuevos

- Si cambia copy visible en Espanol, actualizar tambien Ingles.
- Si cambia una ruta, revisar `canonical`, `hreflang` y switch de idioma.
- Si se agrega media, verificar peso, mobile, controles y alt text o etiqueta accesible.
- Si se agrega contenido tecnico, mantenerlo concreto, verificable y seguro.
- Si se menciona infraestructura, distinguir aprendizaje/preparacion de experiencia productiva.

## Veredicto actualizado

El portfolio ya cumple su objetivo principal: presentar a Emmanuel Valdez como desarrollador backend/fullstack .NET con evidencia concreta en e-commerce, datos y sistemas de gestion.

La mejora mas valiosa ahora no es rehacer la UI completa, sino continuar el refactor enfocado de Ukiyo: evidencia visual temprana, calculadora de pricing mas fuerte y decisiones backend mas faciles de escanear, manteniendo QA de produccion despues de cada push relevante.
