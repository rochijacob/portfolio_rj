# Handoff: portfolio de Rocío Jacob

Documento para que otro agente (o Rocío) retome el trabajo sin el historial de la conversación. Actualizalo cada vez que cambie una decisión.

Última actualización: 2026-11-14.

## Objetivo

Un portfolio personal bilingüe (EN/ES) para Rocío Jacob, Buenos Aires.

- **Ahora:** mostrar habilidades de programación y gestión de proyectos, y conseguir trabajo freelance (web, automatizaciones, gestión de proyectos), idealmente recurrente.
- **Después:** que también funcione como landing hacia venture capital (criterio de producto, finanzas, curiosidad).

## Estado

Hay cuatro direcciones de diseño completas con el mismo contenido. Rocío todavía no eligió una. Cuando elija, esa pasa a ser `index.html` (hoy `index.html` es una página para comparar las cuatro).

| Archivo | Dirección | Inclinación |
|---|---|---|
| `site-A-notebook.html` | Editorial, columna de lectura, estante de lomos de libros, modo claro/oscuro | VC |
| `site-B-dock.html` | Azul marino, dock flotante, juego en canvas, modo claro/oscuro | Freelance / ingeniería |
| `site-C-poster.html` | Celeste pleno, tipografía gigante, stickers arrastrables, casos que se expanden | Freelance / liderazgo |
| `site-D-ledger.html` | Perfil de inversión: ticker `ROCI`, gráfico de carrera, tenencias | VC |

No está desplegado. La rama de trabajo es `claude/bold-feynman-x0n91n`; no hay PR abierto.

## Arquitectura

HTML + CSS + JS plano, sin frameworks. Cada sitio publicado es un solo archivo autocontenido.

```
src/core.js              contenido (objeto `content`, EN y ES) + helpers compartidos
src/site-*.html          plantilla de cada dirección (CSS + función render) con el marcador /*CORE*/
src/build.mjs            inserta core.js en cada plantilla y escribe los site-*.html de la raíz
scripts/check.js         verificación automática con Playwright
site-*.html (raíz)       SALIDA GENERADA. No editar a mano.
index.html               página comparadora (a mano, no generada)
vercel.json              cleanUrls
```

Flujo de trabajo:

```bash
node src/build.mjs
```

```bash
node scripts/check.js
```

`check.js` abre cada sitio en 390, 768 y 1440 px, en EN y ES (24 combinaciones). Reporta scroll horizontal, errores de consola, links externos sin `rel="noopener"`, textos sueltos en el otro idioma (por palabras clave) y objetivos táctiles chicos. Guarda capturas en la carpeta temporal del sistema, o en `$SHOTS`. Necesita Playwright con Chromium disponible.

### Cómo funciona cada sitio

- `core.js` define `content`, el idioma (`lang`), `T()` (contenido del idioma activo), `apply()` y helpers (`caseBody`, `svcBody`, `labName`, `langToggle`, `footerLinks`, `portrait`, `reveal`).
- Cada plantilla define `render(t, lang)`, que reescribe `#app` completo. `apply()` llama a `render` y a `reveal`.
- Idioma: por defecto el del navegador, se guarda en `localStorage` (`rj-lang`) dentro de try/catch, y actualiza `<html lang>`.
- Tema claro/oscuro solo en A (`rj-theme`) y B (`rj-theme-b`).
- La foto es opcional: `profile.jpg` en la raíz. Si falta, se muestran las iniciales.

## Reglas de contenido

1. **No inventar hechos, clientes, métricas ni links.** Lo que falta va como marcador visible entre `[CORCHETES]`.
2. **Todo texto visible vive en `content`** con claves `en` y `es`. Nada de texto fijo en las plantillas.
3. **Español rioplatense neutro.** "Vos" con moderación en microcopy; el texto formal queda neutro.
4. **Tono:** primera persona, seguro, cálido, preciso. Con números. Sin "apasionada por".
5. **El nombre es "Rocío Jacob", con tilde.** El ticker de D es `ROCI`.
6. **El teléfono no va en el sitio.**

### Anonimización (decisión de Rocío, 2026-11-14)

No se nombran empleadores ni clientes:

| Real | En el sitio |
|---|---|
| Muvinai | "Estudio de software" / "Software studio" |
| Accenture | "Consultora global" / "Global consulting firm" |
| UdeSA como empleadora (PM & Business Partner, docencia) | "Una universidad" / "A university" |
| Cliente del gimnasio | "la cadena de gimnasios más grande de Argentina" (aprobado así) |
| DataHub (sistema interno) | "un data hub central" |

Sí se nombran las instituciones de su educación (Universidad de San Andrés, IE University): son credenciales suyas y Rocío lo aprobó, sabiendo que facilita deducir quién es "una universidad".

En los casos se usan órdenes de magnitud ("más de cien", "de días a minutos") y no cifras internas exactas. No se mencionan personas, áreas internas, VPN ni GitLab.

## Datos confirmados

- Descargas de la app de gimnasios: **500K+** (el CV manda sobre las notas, que decían ~300K). 40K usuarios activos diarios, hito de **2022**.
- Estudio de software: Senior Developer, mar 2021 a oct 2023; Project Leader, nov 2023 a abr 2025.
- Consultora global: may 2025 a **mar 2026**.
- Universidad (PM & Business Partner en BI, Automatización e IA): desde **abr 2026**.
- Docente de tutoriales de Finanzas Corporativas: desde jun 2026.
- **MFin en UdeSA: arranca en abr 2027, promoción 2028.** Hasta entonces no está "en curso".
- Fechas de la app de gimnasios (2021 a 2025) y de los juegos en Python (2021 a 2022): confirmadas.
- Las tres ofertas freelance: Automatización y BI; Agentes de IA para procesos internos; Web y producto con soporte mensual. La tercera es la de abono recurrente, la que fideliza (eso es nota interna, no copy).

## Diseño

Paleta pedida por Rocío: crema `#fdf0d5`, azul `#003049` (su favorito), celeste `#669bbc`. Le gustan los tonos crema.

- Azul sobre celeste da 4,59:1, apenas sobre el mínimo AA. No aclarar el celeste ni usar crema como texto sobre celeste (2,7:1).
- El celeste sobre crema no alcanza contraste para texto; se usa solo como fondo o adorno.
- D usa un verde (`#1f7a4d`) solo para "ganancias". B usa verde solo en el punto de estado.

Sitios de referencia que Rocío relevó (se toman decisiones de diseño, nunca se copian layouts, textos ni assets): alejandrocrosa.com, magic-bubblez.github.io, ozzyx.xyz, mihircodes.in, sakthi-portfolio-mauve.vercel.app, lucchaissac.com, eduardbodak.com, pranshuagarwal.com, pukha.world.

En D, los valores del índice y los pesos de las tenencias son decisiones creativas y están rotulados "ilustrativos" en el sitio. Mantener ese rótulo.

Límite orientativo: cada archivo cerca de 60 KB. D está en el borde.

## Pendientes

Bloquean el caso de trabajos finales (están como marcadores visibles en el sitio):

1. Cómo se hacía antes (¿planillas a mano, mails uno por uno?).
2. Por qué se eligió esa solución y no otra.
3. Resultado anonimizado, en órdenes de magnitud.
4. Aprendizaje: elegir entre "Definir la fuente de verdad antes que la herramienta" y "Una solución vale si el equipo operativo la adopta, aunque no sea la más elegante".
5. Confirmación de la universidad de que el caso se puede mostrar.

Rocío dijo que mandaba estas respuestas el 2026-11-14, pero el mensaje llegó sin el texto. Hay que pedírselas de nuevo.

Sin respuesta todavía:

- Si los "porqué" del Lab la representan (vinieron de un borrador, como propuesta).
- Si la línea de equity research ("Sostengo un proceso estructurado de equity research...") puede ser pública.
- Qué dirección elige, o qué mezcla.

Los carga Rocío más adelante:

- 6 libros reales (`content.books`, marcados `// REPLACE`).
- 3 artículos reales (`content.writing`).
- `profile.jpg`.
- Revisar su GitHub público antes de publicar: el footer enlaza al perfil y los repos pueden mostrar nombres de empresas.

## Deploy

Vercel, importando el repo con preset "Other", sin build command ni output directory. Los HTML de la raíz ya están generados y versionados. Antes de publicar: quitar `noindex` solo si `index.html` pasa a ser el sitio elegido, y agregar una imagen `og:image` si se quiere vista previa al compartir.

## Qué no se verificó

Lector de pantalla, recorrido completo con teclado, y navegadores distintos de Chromium. El chequeo de idioma es por palabras clave, no una lectura completa.

## Fuentes que no estuvieron disponibles

Los chats de Claude de Rocío no eran accesibles desde la sesión que armó esto. De GitHub se leyeron solo repos públicos; los privados (`pileta_ml`, `pool-sim`, entre otros) no se abrieron.
