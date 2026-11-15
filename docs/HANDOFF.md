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
- La tipografía hace el trabajo (Geist, con Geist Mono para etiquetas).
- Fondo de papel punteado (también en A).
- Una sola ilustración: el dibujo lineal de Buenos Aires.
- Sin metáforas en los nombres de sección, movimiento mínimo, contenido editado (casos que se abren al clic, 4 números).
- Un único detalle lúdico: el gato pixel camina sobre el borde del dock según el scroll.

Antes de agregar algo, preguntarse si se entiende sin eso. Si la respuesta es sí, no va.

Qué tomó H de D, a pedido de Rocío: la sección de tesis, la historia `[01]` a `[04]` con los tags de pares, y el track record como tabla (posición, entrada, impacto) cuyas filas se abren.

**Navegación de H:** a Rocío no le cerraba la barra superior original (no dijo qué exactamente). Se reemplazó por un encabezado mínimo más un dock flotante abajo con texto. Falta que confirme si esto lo resuelve.

**Segunda ronda de referencias (2026-11-15).** Rocío mandó ocho sitios y qué le gusta de cada uno. Se revisaron con capturas y texto, y H se rehízo combinándolos:

| Referencia | Qué le gusta | Cómo quedó en H |
|---|---|---|
| ozzyx.xyz | El wording, conversacional | Cierre "¿Tenés algo en mente? Trabajemos juntos." |
| nachi.design | El CTA | Par de botones (principal con ↗ y secundario con borde) y "O escribime a" con el mail |
| rotimi.design | Tipografía, estética, espacios, "prolija y con aire" | Geist para todo, etiquetas chicas en mayúsculas mono (Geist Mono), más espacio vertical |
| thanhdatnguyen.com | Los libros "tal cual", y el blog | Lomos finos con la estética de cada tapa (`bookShelf()` en `core.js`) |
| davidakh.com | Una ilustración lineal, prolija | Dibujo lineal de Buenos Aires bajo el hero |
| isablyns.vercel.app | El hero y las ilustraciones | Idem; ella sugirió ilustraciones 8 bits o lineales de Buenos Aires |
| alejandrocrosa.com | La parte de libros | Pendiente evaluar una página propia de libros |
| teodorovillanueva.com | El hero, que aclara trabajo remoto, el destaque inicial de trabajos y cómo expande sus 3 proyectos | Línea "Hoy, ...", nota "Buenos Aires, trabajo remoto", fila de 3 trabajos destacados y una sección grande por cada uno con tabla de datos |

Los tres proyectos principales de H están en la constante `MAIN` de `src/site-H-studio.html` (app de gimnasios, SaaS de eventos, seguimiento de trabajos finales). El resto va en "Más trabajo".

**Color de fondo (decidido 2026-11-15):** el crema `#fdf0d5` le resultaba muy amarillo. Eligió **blanco frío `#f4f6f7`** con su azul `#003049` y el celeste como acento. Está aplicado en las cuatro direcciones; el selector de papeles de H se quitó. No volver al crema.

**Modo oscuro: es "importantísimo" para Rocío.** Lo tienen las cuatro: A, D y H comparten la clave `rj-theme` (por defecto siguen la preferencia del sistema); B usa `rj-theme-b` y arranca en oscuro. Cualquier componente nuevo tiene que verse bien en ambos modos: usar las variables (`--bg`, `--ink`, `--acc`...) y no colores fijos.

**Puntos del fondo:** pidió que sean más suaves para que no compitan con el texto. Están en opacidad ~0.075 (claro) y ~0.055 (oscuro). No subirlos.

**Ilustración (tercera versión):** la primera le pareció "muy cuadrada" y la segunda, un boceto suelto, tampoco. Pidió algo "tipo croquis arquitectónico". Ahora es un alzado de Buenos Aires con recursos de croquis: esquinas donde las líneas se pasan, ejes de simetría en línea de trazo y punto, una cota (67,5 m del Obelisco), suelo rayado, árboles y figuras de escala, flecha de norte y rótulos chicos. Se genera en la función `city()` de `src/site-H-studio.html`. Falta que confirme si esta versión le gusta.

**Croquis, ajuste:** con más detalle le pareció "poco elegante, todo medio movido", y no le gustó "la pelota con la dirección" (la flecha de norte). Se quitó el filtro que hacía temblar las líneas (ahora son rectas y nítidas), la flecha de norte, los ejes con círculos, la cadena de cotas y las cruces de los árboles. Se mantienen ventanas, edificios de fondo, la cota del Obelisco y los rótulos. Regla: líneas limpias, sin temblor ni símbolos redondos decorativos.

**Mascota:** quiere que se parezca más a una pantera que a un gato. Hay tres grillas en `MASCOTS` de `core.js`: `cat` (la original, que pidió conservar), `walk` (pantera caminando) y `sit` (pantera sentada). Se elige con la constante `MASCOT`. Sigue en `cat` hasta que Rocío elija. Siguen siendo dibujos propios: no acercarlos al personaje de la Pantera Rosa.

**Juegos en Python:** estaban repetidos en trabajo y en Lab. Se quitaron de los casos (`WK.06`); quedan solo en el Lab.

**Caso de trabajos finales:** cerrado. El resultado es "Completo e implementado". Ya no quedan marcadores en el caso.

**El croquis le encantó** ("va re por ahí"). Pidió más detalle y se agregó: ventanas, edificios de fondo, escalinata y tambor del Congreso, base del Obelisco, faroles, baranda del puente, grúas del puerto, nubes, cadena de cotas bajo el suelo y ejes A y B. Seguir en esta línea; no volver al boceto suelto.

**Aire y síntesis (2026-11-15):** Rocío siente el contenido "compactado y apretado". Se hizo las dos cosas en H: menos contenido a la vista (el caso largo se abre con "Leer el caso completo", la experiencia muestra solo rol, lugar y fechas) y más espacio (interlineado, separación entre secciones y columnas, párrafos más angostos). Regla: ante la duda, sacar texto antes que achicar espacios.

**Redacción en español:** pidió que sea más eficiente. Se reescribió todo el español más corto y directo (frases breves, menos subordinadas, "armo" y "hice" en vez de construcciones largas). Mantener ese registro en textos nuevos.

**Navegación de H (2026-11-15):** pidió bajar el modo oscuro y el idioma a la navegación. El dock flotante ahora tiene las secciones, un separador, el botón de tema y un único botón de idioma (EN/ES, con el activo subrayado). El encabezado quedó solo con el nombre y los links de contacto. En celular el dock muestra Trabajo, Sobre mí y Contacto más tema e idioma (Servicios y Libros se ocultan con la clase `opt`).

**Mobile en H:** optimizado a pedido de Rocío. A 640 px o menos: el croquis se muestra más grande y recortado, centrado en el Obelisco; los botones del hero ocupan el ancho; menos espacio entre secciones; los lomos de libros se achican para entrar sin scroll; el pie se apila. Verificado a 390 px sin scroll horizontal. Al tocar H, revisar siempre 390 px.

**Foto de perfil:** su foto de siempre es un avatar en pixel art. Está en `profile.png` (recorte de cabeza y hombros, ampliado con píxeles duros) y `avatar-full.png` (cuerpo entero, sin usar todavía). Se muestra con `image-rendering: pixelated`.

**Experiencia:** pidió separar lo laboral de la educación. Las entradas de educación llevan `kind: "edu"` en `content.*.timeline` y el helper `expSplit()` de `core.js` arma los dos grupos en las cuatro direcciones.

**Escritos / artículos:** todavía no tiene artículos y por ahora **no quiere esa sección**. Se quitó de las cuatro direcciones. Los datos de ejemplo siguen en `content.writing` para cuando la retome; no volver a mostrarla hasta que lo pida.

**"Sobre mí" en H:** Rocío notó que repetía contenido. Ahora es un solo bloque: foto, una frase sobre qué le importa, la historia `[01]` a `[04]`, los tags y la línea "Fuera de horario". Se quitaron los párrafos largos y la lista de finanzas, que repetían la historia y la experiencia. A, B y D conservan el "Sobre mí" largo.

**El 8 bits:** a veces siente que no se alinea con la estética sobria. El gato pixel queda solo como detalle chico (sobre el dock en H, en el estante en A). Le encanta la frase "El gato rosa en píxeles de esta página es un guiño a mi dibujo animado favorito".

**Libros (10 títulos, con Range y Outliers agregados el 2026-11-15):** no quiere escribir por qué destaca cada uno (`note` vacío, no pedirlo de nuevo). Quiere que conserven la estética de sus tapas, idealmente con sus tipografías, como los lomos de thanhdatnguyen.com. Están hechos en CSS con colores y tipografías que evocan una edición conocida de cada título (campo `spine` de cada libro). Son aproximaciones de memoria, no escaneos: si Rocío manda fotos de los lomos reales, se reemplazan. Al pasar o tocar un lomo se muestra título y autor. Lo usan A y H; B y D mantienen sus propias listas.

**Lab (definido 2026-11-15):** Rocío quiere que el Lab se muestre como artículos, con fotos y la solución, solo para los experimentos de los que hay material. Estado real de cada uno:

- Juegos en Python: hecho. Es el único del que se puede armar artículo hoy. Hay un esqueleto y tres capturas en `drafts/lab-python-games/` (no enlazado desde el sitio; **no entra en el primer lanzamiento**).
- Detector de caída de perro a la pileta: en progreso.
- Bot de salud mental para una ONG: experimental.
- Terminales de pago cripto: **no existe, se quitó. No volver a agregarlo.**
- Agente de fitness: se quitó a pedido de Rocío.

En el sitio el Lab es por ahora una lista corta con el estado de cada experimento (campo `status`, helper `labMeta()`).

**Cortes entre secciones en H:** a Rocío le resultaban raros, sobre todo por las líneas. Se quitaron todas las líneas entre secciones: ahora se separan solo con espacio (el mismo valor en todas) y su etiqueta. Las líneas finas quedan únicamente dentro de listas y tablas. No volver a poner reglas entre secciones.

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

Caso de trabajos finales: Rocío reescribió el texto completo (2026-11-15) y confirmó que **tiene el permiso de la universidad siempre que esté anonimizado**. Solo falta el **resultado**, que sigue como `[COMPLETAR]` visible. El rol en el caso es "Líder de producto y automatización" y el stack incluye n8n.

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
