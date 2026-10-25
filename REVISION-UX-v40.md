# Marbella Diversa · Revisión UX v40
Propuesta implementada para revisión. No es una aprobación final, auditoría completa de accesibilidad ni prueba con usuarias.

## 1. Portada y elección
Acciones «Elegir un recorrido» y «Descubrir las historias». Selección inmediatamente después de portada (también disponible en Inicio móvil). Cada tarjeta incluye nombre, inicio, final, cinco paradas y numeración general. Distancia, tiempo, pendientes, escalones y pavimento: **Por verificar**.

## 2. Ficha de parada en escritorio y móvil
Número y nombre canónicos; pertenencia a uno o dos recorridos; resumen; relato desplegable; cómo llegar; anterior/siguiente con nombres. Un enlace a #parada-N abre el listado, la ficha y el relato, y lleva el foco al título. Mantiene texto documental de trabajo; no inventa biografías finales. En móvil se conserva la pantalla de ficha y los enlaces se apilan.

## 3. Estados de pasaporte
- Pendiente: número, nombre y estado, aviso «Al abrir esta historia conseguirás su sello».
- Obtenido: sello ilustrado, contador global y confirmación «Sello añadido · X de 13» con acceso al pasaporte.
- Reinicio: conserva confirmación nativa antes de borrar.
Se conserva la clave de guardado existente; no migra ni reinicia los sellos. Guardado en dispositivo/navegador, sin sincronización.
La impresión completa sigue en modo de prueba; bloquearla al final de las pruebas, según decisión anterior.

## 4. Mapas y lista
Numeración 01–05, 05–09 y 09–13; nombres comunes con fichas y pasaporte; Google Maps por los mismos lugares. Colores, números, nombres accesibles y lista equivalente. Esquema discontinuo, no itinerario peatonal validado.
El tramo 2 deja de mostrar el piloto 1–4.
**Parada 07:** no hay coordenada validada disponible. Se muestra en la lista y con un acceso «07 · Ubicación por verificar» fuera de la cartografía del mapa, sin pin ficticio. La línea se interrumpe en ese punto. Acordar dónde representar el conjunto Calle Pelleja–Calle Apartada–Calle Soledad y añadir después la coordenada. No se declara cumplida la geolocalización de las cinco paradas hasta ese acuerdo.
Plano original B/N conservado; nota fuera del dibujo, sin leyenda superpuesta.

## 5. Pendientes de contenido y validación
| Pendiente | Responsable sugerido | Estado |
| --- | --- | --- |
| Acordar punto de referencia de parada 07 y validar los restantes | Contenidos + visita de campo | Por verificar |
| Validar orden y calles peatonales de los tres recorridos | Contenidos + visita de campo | Por verificar |
| Medir distancia y duración de cada tramo | Campo | Por verificar |
| Revisar pendientes, escalones, pavimento y barreras | Campo + accesibilidad | Por verificar |
| Contrastar biografías, nombres, fotos y permisos | Contenidos | Pendiente |
| Audios, guía final, vídeo, QR y URLs municipales | Producción | Pendiente; no presentados como disponibles |
| Pruebas reales en teléfonos, zoom 200 %, lector de pantalla y contraste completo | UX + accesibilidad | Pendiente |
| Validación con cinco personas | UX | Pendiente |

## Navegación inferior propuesta, sin activar
Prototipo conceptual para comprobar antes de sustituir Inicio/Mapa/Historias/Pasaporte:
- **Ruta:** selección o recorrido elegido.
- **Paradas:** lista del recorrido activo, con inicio/final y numeración.
- **Pasaporte:** sellos y progreso.
Revisar con usuarias dónde esperan encontrar Inicio e Historias; no eliminar accesos hasta validar.

## Comprobaciones realizadas
- Sin identificadores duplicados; destinos de enlaces internos existentes.
- Tres listas de cinco paradas, numeración general y nombres del pasaporte coincidentes.
- Sintaxis JavaScript comprobada.
- Prueba de navegador en escritorio: abrir recorrido 2, pasar a parada 06 y abrir relato directamente; sello y contador confirmados; siguiente parada; persistencia al recargar; reinicio cancelado sin pérdida de sellos.
No equivale a prueba en dispositivos reales ni auditoría WCAG completa.

## Guion para cinco personas
Pedir a personas que no conozcan el proyecto que elijan un paseo, encuentren el inicio, abran una historia, obtengan un sello y continúen a la siguiente parada. Evitar orientarles durante el intento.

| Persona | Elegir paseo | Encontrar inicio | Abrir historia | Conseguir sello | Continuar | Dudas y expectativas |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

Registrar por tarea: completada sin ayuda / con ayuda / no completada; punto de duda; qué esperaba que ocurriera al pulsar. Revisar resultados antes de aprobar el diseño.

## Ajustes tras devolución de UX · v41
Dictamen UX: **apta para iniciar pruebas con usuarias; pendiente de validación de uso y del recorrido sobre el terreno**.
- Marcadores: nombre accesible completo en el elemento interactivo (número + lugar), con número gráfico oculto al lector para evitar una etiqueta solo numérica. Mantener la etiqueta al añadir de nuevo el marcador. Pendiente prueba específica con lector de pantalla.
- Parada 07: los enlaces de su lista y ficha pasan a «Consultar referencia provisional · Google Maps». Calle Soledad continúa siendo una referencia provisional, no un punto representativo acordado.
- Aviso al visitante: «Orden provisional, pendiente de comprobación presencial».
- Impresión: permanece habilitada durante las pruebas. **Tarea de cierre: deshabilitar la impresión si hay menos de 13 sellos y habilitarla al completar los 13; comprobar el estado también al recargar y reiniciar.**
- Continúan pendientes la revisión específica del flujo completo historias/sellos, teléfonos reales, contraste, ampliación y lector de pantalla. Las comprobaciones de desarrollo no las sustituyen.
