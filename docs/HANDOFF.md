# Handoff: portfolio de Rocío Jacob

Documento para que otro agente (o Rocío) retome el trabajo sin el historial de la conversación. Actualizalo cada vez que cambie una decisión.

Última actualización: 2026-11-14.

## Objetivo

Un portfolio personal bilingüe (EN/ES) para Rocío Jacob, Buenos Aires.

- **Ahora:** mostrar habilidades de programación y gestión de proyectos, y conseguir trabajo freelance (web, automatizaciones, gestión de proyectos), idealmente recurrente.
- **Después:** que también funcione como landing hacia venture capital (criterio de producto, finanzas, curiosidad).

## Estado

Rocío eligió quedarse con cuatro direcciones (2026-11-14): **A, B, D y H**. Las que más le gustan son **A y H**. C, E, F y G se eliminaron del repo (siguen en el historial de git).

| Archivo | Dirección | Qué le gusta a Rocío |
|---|---|---|
| `site-H-studio.html` | Sobria: papel punteado, líneas finas, tipografía, dock flotante | La principal. Es donde se van combinando las ideas de las otras |
| `site-A-notebook.html` | Editorial, columna de lectura, tarjeta lateral, modo claro/oscuro | El estilo en general y el estante de libros con el gato |
| `site-B-dock.html` | Azul marino, dock flotante, juego en canvas | El fondo de puntitos, "como los cuadernos donde dibujás" |
| `site-D-ledger.html` | Perfil de inversión: ticker `ROCI`, gráfico, tenencias | Cómo espacia y muestra la información: el track record, la tesis y los tags de pares |

`index.html` es una página para comparar las cuatro. No está desplegado. La rama de trabajo es `claude/bold-feynman-x0n91n`; no hay PR abierto.

### Criterio de diseño (vale para todo lo que siga)

Rocío dijo que las primeras versiones se veían "hechas por una IA sin criterio de diseño". Quiere algo **sobrio, creativo, fresco y limpio**. Le gustan los fondos tipo hoja de dibujo o cuadriculada.

Reglas de H, la referencia:

- Un solo acento de color (celeste) sobre crema y azul. El rosa aparece solo en el gato y en una caja de libro.
- Líneas finas en vez de cajas. Sin tarjetas, sombras ni bordes gruesos.
- Columna fija de etiquetas a la izquierda y contenido a la derecha, en una grilla de 12.
- La tipografía hace el trabajo (Bricolage Grotesque para títulos, Geist para texto).
- Fondo de papel punteado (también en A).
- Sin metáforas en los nombres de sección, movimiento mínimo, contenido editado (casos que se abren al clic, 4 números).
- Un único detalle lúdico: el gato pixel camina sobre el borde del dock según el scroll.

Antes de agregar algo, preguntarse si se entiende sin eso. Si la respuesta es sí, no va.

Qué tomó H de D, a pedido de Rocío: la sección de tesis, la historia `[01]` a `[04]` con los tags de pares, y el track record como tabla (posición, entrada, impacto) cuyas filas se abren.

**Navegación de H:** a Rocío no le cerraba la barra superior original (no dijo qué exactamente). Se reemplazó por un encabezado mínimo más un dock flotante abajo con texto. Falta que confirme si esto lo resuelve.

**Libros:** le gusta el estante de A, pero no con forma de lomo de libro sino de caja tipo DVD: más gruesa, se toca y se abre mostrando la descripción. Está implementado una sola vez en `core.js` (`bookShelf()`, estilos `.dvds`/`.dvd`) y lo usan A y H. B y D mantienen sus propias listas.

**FP&A:** Rocío no quiere hablar mucho de su experiencia en FP&A. De la consultora, lo que más le gustó fue la iniciativa de automatización, y eso es lo que se destaca. "FP&A" queda solo como una habilidad más en la lista de skills.

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

Gustos personales, usados como decoración (pedido de Rocío, 2026-11-14):

- Le encanta la Pantera Rosa, mejor si es en estilo 8 bits. **El personaje no se reproduce** (es propiedad de MGM y esto es un sitio comercial). En su lugar hay un gato rosa original en pixel art (`CAT` y `pixelCat()` en `core.js`, rosa `#e56b9a`): sentado en el estante de A, como jugador del juego de B, como sticker en C y junto al "¿Hablamos?" de D. No acercar el dibujo al diseño del personaje ni usar su nombre o tipografía.
- Es DJ y toca música electrónica; le gustan el arte y la fotografía. Es un dato decorativo: va en la línea "Fuera de horario" (`content.*.off`, helper `offClock()`), con un ecualizador animado. No es una sección ni una oferta.

En D, los valores del índice y los pesos de las tenencias son decisiones creativas y están rotulados "ilustrativos" en el sitio. Mantener ese rótulo.

Límite orientativo: cada archivo cerca de 60 KB. D está en el borde.

## Pendientes

Bloquean el caso de trabajos finales (están como marcadores visibles en el sitio):

1. Cómo se hacía antes (¿planillas a mano, mails uno por uno?).
2. Resultado anonimizado, en órdenes de magnitud (cuánto tardaba una entrega grande antes y cuánto ahora).
3. Confirmación de la universidad de que el caso se puede mostrar.

Ya cargado en el caso (2026-11-14): las alternativas descartadas y el aprendizaje (fuente de verdad primero; adopción del equipo como frase secundaria). Rocío los envió desde un borrador donde figuraban como propuestas a confirmar; en particular, la razón para descartar "leer los mails" (depende del formato y se rompe con cambios) no fue confirmada como la suya.

Sin respuesta todavía:

- Si los "porqué" del Lab la representan (vinieron de un borrador, como propuesta).
- Si la línea de equity research ("Sostengo un proceso estructurado de equity research...") puede ser pública.
- Qué dirección elige, o qué mezcla.

Los carga Rocío más adelante:

- Una línea propia por libro. Los 8 títulos ya están cargados (Shoe Dog, Sapiens, Factfulness, Life 3.0, Creativity, Inc., The Hard Thing About Hard Things, Brave New World, Fahrenheit 451), pero cada `note` es una descripción neutra, no su opinión. Tampoco definió la "convicción" que usa D (se muestra "—").
- 3 artículos reales (`content.writing`).
- `profile.jpg`.
- Revisar su GitHub público antes de publicar: el footer enlaza al perfil y los repos pueden mostrar nombres de empresas.

## Deploy

Vercel, importando el repo con preset "Other", sin build command ni output directory. Los HTML de la raíz ya están generados y versionados. Antes de publicar: quitar `noindex` solo si `index.html` pasa a ser el sitio elegido, y agregar una imagen `og:image` si se quiere vista previa al compartir.

## Qué no se verificó

Lector de pantalla, recorrido completo con teclado, y navegadores distintos de Chromium. El chequeo de idioma es por palabras clave, no una lectura completa.

## Fuentes que no estuvieron disponibles

Los chats de Claude de Rocío no eran accesibles desde la sesión que armó esto. De GitHub se leyeron solo repos públicos; los privados (`pileta_ml`, `pool-sim`, entre otros) no se abrieron.
