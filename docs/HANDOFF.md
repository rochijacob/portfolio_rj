# Handoff: portfolio de Rocío Jacob

Documento para que otro agente (o Rocío) retome el trabajo sin el historial de la conversación. Actualizalo cada vez que cambie una decisión.

Última actualización: 2026-11-16.

## Objetivo

Un portfolio personal bilingüe (EN/ES) para Rocío Jacob, Buenos Aires.

- **Ahora:** mostrar habilidades de programación y gestión de proyectos, y conseguir trabajo freelance (web, automatizaciones, gestión de proyectos), idealmente recurrente.
- **Después:** que también funcione como landing hacia venture capital (criterio de producto, finanzas, curiosidad).

## Estado

**Laboratorio tipográfico (2026-11-16, lo más reciente).** A Rocío H le parece prolija pero "le falta creatividad" y sospecha de la tipografía: H usa Geist en todo, como muchos portfolios de desarrolladores. Pidió retomar A, B y D como **laboratorio para ir combinando** (no candidatas a reemplazar H) y sumar opciones con referencias nuevas: falakgala.dev, lokiii.me, 10xshivam.dev (wording), d0xxed.com (bichitos de fondo) y nan.fyi/database (esqueleto de artículo). Diseño en `docs/superpowers/specs/2026-11-16-laboratorio-tipografico-design.md`; plan en `docs/superpowers/plans/`.

**La web publicada (H, `index.html`, rama `main`) no se toca:** Rocío dijo "la web posta dejémosla así". Ve las variantes por capturas y decide qué pasa a H. No empujar a `main` sin que lo pida.

| Archivo | Dirección | Tipografía | Qué prueba |
|---|---|---|---|
| `index.html` / `site-H-studio.html` | H · Studio, la publicada | Geist + Geist Mono | Ver "Reglas de H" abajo |
| `site-A-notebook.html` | A · Cuaderno | Instrument Serif + Geist + Shantell Sans | Titular serif grande con itálica en celeste; notas manuscritas al margen con flechas y un círculo a mano; croquis en el hero; estante con la panterita |
| `site-A-article.html` | A · Artículo | Igual que A | Esqueleto de blog estilo nan.fyi: título centrado, columna angosta, recuadro de nota, código y una demo de colisiones que se arrastra (mouse y dedo). Contenido del borrador de juegos en Python con `[COMPLETAR]` visibles; sin capturas de los juegos (sprites ajenos). A lo enlaza desde su Lab |
| `site-B-dock.html` | B · Terminal (`rocio(1)`) | IBM Plex Mono + Mrs Saint Delafield (firma) | Página de manual: NOMBRE, SINOPSIS, OPCIONES (servicios como flags), EJEMPLOS (casos como comandos), ARCHIVOS (libros), HISTORIA, VER TAMBIÉN. Cotorra, paloma y hornero en su nido dibujados con caracteres flotando detrás del texto (capa fija sin clics; quietos con reducir movimiento). Conserva el juego en canvas y el arranque en oscuro |
| `site-D-ledger.html` | D · Ledger | Barlow Condensed + Barlow + IBM Plex Mono | Hero solo tipográfico enorme; cinta de cifras; historia `[01]`–`[04]` con tags de pares; tesis; track record que se abre; el croquis baja al pie como panorama de cierre (la respuesta a "¿qué hacemos en el hero si la ilustración va al footer?"). Se quitaron el gráfico y las tenencias |
| `site-I-talk.html` | I · Charla (nueva) | Instrument Serif + Hanken Grotesk | Wording conversacional estilo 10xshivam: links como chips de borde punteado dentro de las frases, títulos de sección con voz. Textos en `content.*.talk` |

**Publicado (2026-11-17).** La mezcla está en `main` (GitHub Pages). El empuje con `--force` está bloqueado en estas sesiones: para publicar, integrar `origin/main` en la rama con un merge normal y empujar `HEAD:main`.

**Artículo escondido (decisión de Rocío, 2026-11-17):** le pareció perfecto, pero por ahora no va a la web. `site-K-case.html` vive solo en la rama de trabajo, **no en `main`**. Mientras siga así, no empujar la rama entera a `main`: los arreglos de la web se hacen sobre `origin/main` (checkout suelto, cambio, build, `git push origin HEAD:main`) y después se integran a la rama con un merge.

**Loader, ajuste:** la panterita le quedaba gigante y sobre un fondo liso. Ahora mide la mitad (3 px por píxel) y el fondo del loader es el mismo papel punteado.

**Artículo del caso (borrador, sin enlazar desde H):** `site-K-case.html` convierte el caso de trabajos finales en artículo sobre el esqueleto del artículo de A. Usa el texto de `cases` WK.04 tal cual y tres diagramas de cajas y flechas (antes, después, pasos del flujo), con rótulos en `content.*.caseArt`. Pendiente de Rocío: confirmar el orden de las piezas en el diagrama "después" (marcado `[REVISAR]`), y pasar cifras reales si quiere un gráfico (marcado `[COMPLETAR]`; no se dibujó ninguno para no inventar datos). Cuando lo apruebe, enlazarlo desde el caso en H.

**Ajustes finales y publicación de la mezcla (2026-11-17, lo más reciente).** Rocío aprobó la mezcla con estos cambios y pidió publicarla:

- **Servicios:** no le gusta "entregable y para quién" dentro de "Cómo podemos trabajar juntos". Se quitó de H: queda nombre y una frase por servicio. (Los campos `deliv` e `ideal` siguen en `content` y los usan otras direcciones.)
- **Más aire entre secciones:** el espacio entre secciones subió a `clamp(96px, 11vw, 160px)` (88 px en celular). No volver a apretar.
- **Caso de trabajos finales:** el paso a paso ("Leer el caso completo") se sacó de H para guardarlo como **artículo** con diagramas. Los `steps` siguen en `content.*.cases` (WK.04).
- **Loader:** pidió la panterita en 8 bits como loader. Camina en el lugar mientras cargan las fuentes: mínimo 450 ms (para que no parpadee), máximo 1,8 s (para que una fuente lenta no bloquee). La página ya está renderizada debajo; al levantarse arranca la entrada del hero. Esto reemplaza, por pedido explícito, la regla vieja de no tapar contenido.
- **Skeleton:** el único contenido que llega tarde es la foto; su círculo hace un brillo de carga hasta que la imagen aparece.

**La mezcla en H (2026-11-17, lo más reciente; manda sobre lo anterior).** Rocío eligió qué combinar y se aplicó en H, en la rama de trabajo, **sin publicar** (`main` sigue con la H anterior hasta que lo pida):

- **Hero:** titular en serif a la izquierda y el **Obelisco de cerca** a la derecha (`obelisk()` en `core.js`), con la nota a mano "mi base. Trabajo remoto desde acá". En celular el dibujo va debajo del texto.
- **El skyline cierra la página**, entre el contacto y el pie. "Una sola ilustración" pasa a ser dos: Obelisco arriba, skyline abajo.
- **"Un POCO de serif"** (A le pareció demasiado): Instrument Serif solo en el titular del hero, el título de servicios y la pregunta de cierre. Todo lo demás sigue en Geist. No extender el serif a títulos de casos ni de secciones sin que lo pida.
- **Servicios como en Charla**, que le gustó mucho: título "Cómo podemos trabajar juntos", nombre y una frase por servicio; entregable e ideal quedan dentro de un desplegable.
- **Desplegables:** los valora y pidió que sean fluidos. Todos los `<details>` de todas las direcciones se abren y cierran con animación de altura (bloque en `core.js`); aguanta clics repetidos y se apaga con reducir movimiento.
- **Cambio de idioma:** le resultaba abrupto. Ahora el re-render va dentro de un fundido corto (`swap()` en `core.js`, View Transitions; sin soporte o con reducir movimiento es instantáneo). Además volvió el scroll suave al navegar con el dock (pidió mejorar la navegación; se había quitado en una revisión anterior).
- **Selección de texto:** pidió que al marcar texto con el mouse "quede algo lindo y diferente". Es un resaltador en el rosa de la panterita (`::selection` en `core.js`, todas las direcciones).
- **Foto:** reemplazó el avatar pixel por una foto suya (`profile.jpg`, recorte cuadrado sin metadatos). `profile.png` y `avatar-full.png` quedan en el repo sin uso.
- **Texto del checkout:** "Diseñé y lancé **en equipo** un checkout…" (EN: "as part of a team").
- **Se conservan** B (tal cual) y el artículo de A ("me encantó la estructura"), para usarlo cuando haya artículos.
- **Pendiente:** dijo que en A ve "varias cosas desalineadas" y que la ve "muy cargada". Como lo que le gustó de A ya pasó a H, A no se retocó; falta que diga si quiere mantenerla viva y qué ve desalineado.

Gusto general confirmado: simpleza de texto (como Charla y Ledger), poco a la vista y el resto en desplegables.

**Primera devolución de Rocío sobre el laboratorio (2026-11-17, lo más reciente):**

- Le gusta el serif (A, I), "aunque hay secciones que no me gustan": **falta que diga cuáles**.
- Le encantan las notas a mano, sobre todo la del croquis ("mi base. Trabajo remoto desde acá"). Condición: al achicar el navegador no pueden generar desborde. La nota del croquis ahora queda siempre superpuesta al cielo del dibujo (no baja como bloque aparte); barrido de 320 a 1600 px sin desborde horizontal en todas las variantes.
- Botones "más cuadrados con redondeo": 10 px de radio en A, J y **también en H** (pidió "desredondear los bordes" de H: dock 14 px, links y botones 10 px, tags 6 px). No volver a las píldoras de 999 px.
- La nota de la app va en pasado: "una app que la gente abría todos los días" (ya no trabaja ahí).
- El artículo de A "está buenísimo". I · Charla le "encantó".
- B le encantó pero la siente "demasiado creativa": **se conserva tal cual**, por si algún día quiere virar hacia eso. No llevar sus ideas a H por ahora.
- De D le gusta que Buenos Aires quede como pie.
- **Panterita de H:** pidió que "camine" de verdad. Ahora alterna dos cuadros (`CAT` y `CAT_STEP` en `core.js`, patas separadas y juntas) cada 28 px de scroll, y se da vuelta cuando la página sube. Con reducir movimiento sigue quieta.
- **Hero:** si el skyline baja al pie, quiere una ilustración a la derecha del hero (como teodorovillanueva.com), con la misma línea del croquis. Sus ideas: enfatizar el Obelisco, o la ciudad vista desde arriba como plano de calles, o cosas que le gusten mucho. `site-J-hero.html` es un boceto con tres opciones dentro de un hero real (Obelisco de cerca, plano del centro, bandeja de DJ) y el skyline como cierre. **Falta que elija.** Los dibujos son esquemáticos, no a escala.

Estos cambios de H están en la rama de trabajo, **no publicados** (`main` sigue igual hasta que lo pida).

`compare.html` es la portada del laboratorio. Los textos nuevos de I (`content.*.talk`), las notas a mano de A (`content.*.a.notes`) y los rótulos del manual de B (`content.*.b.man`) los redactó el agente con hechos que ya estaban en el sitio: **falta el visto bueno de Rocío**.

El croquis (`city()`) se movió de la plantilla de H a `core.js` para que lo usen A y D. `scripts/check-same.js` verifica que H renderice idéntica (guardar referencia con `--save` antes de tocar algo compartido). `scripts/check-lab.js` prueba el tema al cambiar idioma, la demo del artículo (mouse y táctil sin scroll) y que los bichitos de B no tapen controles.

### Criterio de diseño (vale para todo lo que siga)

Rocío dijo que las primeras versiones se veían "hechas por una IA sin criterio de diseño". Quiere algo **sobrio, creativo, fresco y limpio**. Le gustan los fondos tipo hoja de dibujo o cuadriculada.

Reglas de H, la publicada (el laboratorio puede romperlas a propósito):

- Un solo acento de color (celeste) sobre crema y azul. El rosa aparece solo en el gato y en una caja de libro.
- Líneas finas en vez de cajas. Sin tarjetas, sombras ni bordes gruesos.
- Columna fija de etiquetas a la izquierda y contenido a la derecha, en una grilla de 12.
- La tipografía hace el trabajo: Geist, Geist Mono para etiquetas, y un poco de Instrument Serif (hero, título de servicios y cierre).
- Fondo de papel punteado (también en A).
- Dos ilustraciones con la misma línea: el Obelisco en el hero y el skyline de Buenos Aires como cierre.
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

**Puntos del fondo (ajustado 2026-11-16):** primero pidió que fueran más suaves; después notó que en pantallas con mucho brillo no se veían. Ahora son de borde nítido (1,1 px) con opacidad 0,15 (claro) y 0,09 (oscuro) en A y H; B usa `#c3ced5` en claro. No volver a bajarlos al 0,075 difuso: desaparecen en monitores brillantes.

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

**Lanzamiento (2026-11-15):** Rocío pidió levantar un MVP en Vercel. `index.html` ahora es la dirección H (lo escribe `src/build.mjs`); la página comparadora pasó a `compare.html`. A, B y D quedan accesibles por URL pero con `noindex`. **El deploy en sí lo tiene que hacer Rocío** importando el repo en Vercel (pasos en el README): desde la sesión no hay credenciales de Vercel. Falta confirmar la URL final para agregarla como `og:url` y decidir si se quitan A, B y D del sitio publicado.

**Menú en celular:** el dock compacto con tres links no le gustó. Ahora, a 640 px o menos, el dock muestra un botón con el nombre de la sección actual que abre un menú hacia arriba con las cinco secciones, más tema e idioma. Se cierra al elegir, al tocar afuera o con Escape.

**Mascota:** pidió volver a la "panterita rosa" de antes en la navegación. Se había dejado de ver por un error de estilos (la regla de íconos del dock la dejaba sin relleno); está corregido y sigue siendo la grilla `cat`. Las panteras `walk` y `sit` siguen guardadas en `MASCOTS`. En los textos ahora se la nombra "panterita rosa".

**Español, segunda revisión:** no le gustaban los tags ni la traducción. Se revisó todo el español de nuevo. Decisiones a mantener: "Proyectos destacados" y "Otros proyectos" (no "Trabajo seleccionado"); "Por qué trabajar conmigo" como título en H (en español "Tesis" se confunde con una tesis académica; D conserva "Tesis" por su metáfora de inversión); columnas "Proyecto / Período / Resultado" en H (no "Posición / Entrada / Impacto"); tags "DESARROLLO + LIDERAZGO" y "LECTURA + PRÁCTICA"; "Experiencia laboral" y "Formación"; cifras escritas "500 mil" en frases. Se corrigió un error de traducción: "operational system" es "sistema de gestión", no "sistema operativo".

**Croquis, versión alineada (2026-11-16):** seguía viéndolo "muy desalineado". La causa era real: ventanas sin centrar, líneas que las cruzaban y edificios de fondo que se pisaban con los del frente. Se redibujó con reglas: cada edificio se genera con `bld()` (caja más grilla de ventanas centrada en su cara), todo lo simétrico es simétrico respecto de su eje, no hay edificios de fondo ni elementos superpuestos, y los rótulos usan la misma línea de referencia. Al agregar algo al croquis, respetar esas reglas.

**"Cómo pienso":** Rocío pasó un diagrama con las cinco preguntas que se hace en cada proyecto (entender, construir, aprender, y vuelta al inicio). Está en H como sección propia, dibujado con el lenguaje del croquis (filas con esquinas que se pasan, flechas, línea punteada de retorno). Textos en `content.*.think`. En su diagrama decía "Academ: un DataHub central" y "TFG"; por la regla de anonimato quedó "Universidad: un data hub central" y "Trabajos finales".

**Orden de H, pensado como historia para alguien que evalúa contratarla:** hero, por qué trabajar con ella (tres afirmaciones), prueba (tres proyectos destacados), cómo piensa, otros proyectos, sobre mí, experiencia y formación, herramientas, servicios freelance, lab, libros, contacto. Antes los servicios interrumpían la historia en el medio y el "por qué" llegaba tarde.

**Titular y bajada:** Rocío preguntó qué significaba "analítica" en el titular; se simplificó a "Construyo productos y automatizaciones para que las organizaciones decidan mejor y trabajen menos a mano". La bajada "Hoy soy Project Manager & Business Partner..." no le gustaba porque no apunta a lo que busca; ahora es "Product engineer con formación en negocios y finanzas. Tomo proyectos freelance." (pendiente de que la confirme).

**Revisión grande de H (2026-11-16).** Rocío trajo una crítica externa detallada (posicionamiento, largo, dock, animaciones, redacción) y tres pedidos propios. Lo aplicado, que reemplaza decisiones anteriores de este documento:

- **Posicionamiento:** titular "Transformo procesos manuales en productos digitales y flujos automatizados." y bajada "Combino ingeniería de producto, operaciones y negocio... Disponible para proyectos freelance seleccionados." Una sola identidad a la vista: producto + operaciones + negocio. No volver a apilar roles (PM, docente, MFin, consultora) en el hero.
- **Autodidacta:** Rocío quiere que quede afirmado que todo lo que sabe de tecnología lo aprendió por su cuenta y porque le gusta. Es la primera frase de "Sobre mí" (`content.*.profile`).
- **Frase de diseño:** no le gustaba "Me importan los productos lindos... tiene que verse bien". Ahora: "Cuido cómo funciona un producto y cómo se siente al usarlo. El diseño no llega al final."
- **"Cómo pienso":** como sección propia con diagrama le pareció forzado. Quedó como una tira de cinco preguntas dentro de "Sobre mí" ("Cómo encaro un proyecto"), sin ejemplos ni flechas.
- **Largo:** la página bajó de unos 10.000 a unos 5.600 px en escritorio. Orden actual: hero, tres resultados, tres casos, servicios, sobre mí, libros, "Más sobre mí" (experiencia y otros proyectos, plegados), contacto. Se quitaron de H: "Por qué trabajar conmigo", Herramientas y Lab.
- **Dock:** cuatro secciones. Se probó que se escondiera al bajar; Rocío lo rechazó (ver "Corrección explícita" más abajo). Queda fijo abajo, sin movimiento.
- **Animaciones:** se quitó la aparición por opacidad y el scroll suave en H. No volver a poner contenido invisible a la espera de una animación.
- **Contacto:** además del `mailto:` hay un botón que copia el mail y un link a LinkedIn. Los botones del hero llevan a la sección de contacto.
- **Redacción:** en inglés, fuera la jerga de inversión ("underwrite", "compounds"). En español, menos anglicismos: "desarrollo móvil", "hoja de ruta", "venta de entradas", "repositorio central de datos". Ciudadanías reemplazadas por "autorización laboral en la Unión Europea".
- **Servicios:** los tres tienen ahora descripción, entregable y cliente ideal. Los entregables e ideales de "Agentes de IA" y "Web y producto" los redactó el agente: falta que Rocío los confirme.

Pendiente de Rocío tras esta revisión: **imágenes de los casos** (el campo `img` de cada caso ya se muestra si existe; es el hueco más grande: la página habla de cuidar el diseño y no muestra producto), el paso a paso de los otros dos casos principales (solo el universitario tiene "Leer el caso completo"), duración orientativa de cada servicio, y decidir si quiere formulario o agenda (necesita un servicio externo con cuenta suya).

A, B y D comparten el contenido nuevo pero no esta reestructura.

**Capa leve de animaciones (2026-11-16, lo más reciente).** Rocío pidió animaciones "elegantes y fluidas, sin zarparse". Esto convive con la regla anterior de no dejar contenido invisible: lo que se quitó fue la aparición por opacidad desde cero; lo nuevo nunca baja de 40 a 50 % de opacidad, así que el texto se lee siempre. Qué hay (todo en el bloque "Motion" del CSS de H):

- Primera carga solamente: el titular, la bajada y los botones se asientan (10 px, 0,7 s) y el croquis se dibuja de izquierda a derecha (1,5 s). No se repite al cambiar idioma o tema (atributo `data-intro` que se quita a los 2,4 s).
- Al hacer scroll: los bloques que arrancan fuera de pantalla suben 12 px al entrar (`soften()`). Los que ya están a la vista no se tocan.
- Respuestas chicas: botones que suben 1 px, la flecha de los destacados que se corre 3 px, el contenido de los desplegables que se despliega, y la panterita que se desliza suave.
- Una sola curva (`--ease`) y duraciones de 0,2 a 0,7 s. Con "reducir movimiento" se apaga todo.

No agregar más: nada de parallax, contadores, texto que se tipea ni animaciones en bucle.

**"Copiar mail" como texto (2026-11-16, lo más reciente).** Rocío prefiere ese CTA con el ícono de copiar y solo las palabras, sin borde de botón. Ahora es texto subrayado con ícono (`.copy`), con altura táctil de 44 px; al copiar, el ícono pasa a un tilde y dice "Copiado" durante unos segundos, y un aviso accesible confirma o explica el error. El CTA principal "Trabajemos juntos" sigue siendo un botón relleno: es la única acción con peso de botón.

**Dock estable y selector de idioma (2026-11-16, lo más reciente).** A Rocío le resultaba raro que el dock cambiara de tamaño al cambiar el idioma (las etiquetas en español son más largas) y que el botón de idioma fuera uno solo que alterna. Ahora: cada link del dock tiene ancho fijo (96 px en escritorio; el botón de menú móvil, 132 px) y el idioma es un selector con "EN" y "ES" siempre visibles, la activa resaltada. `scripts/check-studio.js` verifica que el dock mida lo mismo en los dos idiomas en cinco anchos y que haya exactamente un idioma activo. Si se agregan o renombran secciones del dock, revisar que la etiqueta más larga entre en 96 px.

**La panterita vuelve a caminar (2026-11-16, lo más reciente).** Rocío extrañaba que la mascota se moviera al hacer scroll y pidió traerla de vuelta. Esto **reemplaza** la parte de la corrección anterior que decía "la mascota permanece estática". Lo que sigue valiendo: el dock queda fijo abajo, no se esconde ni cambia de lugar; solo se mueve la mascota. Camina sobre el borde superior del dock: a la izquierda arriba de la página, a la derecha al llegar al final (`walk()` en `src/site-H-studio.html`). Con "reducir movimiento" activado en el sistema queda quieta. Con el menú móvil abierto se oculta.

**Integración de la rama `codex/portfolio-ux-refinements` (2026-11-16).** Rocío trabajó una versión local con otra herramienta y pidió validarla con criterio. Se revisó (build reproducible, `check.js` y `check-studio.js` en verde, capturas en escritorio y celular) y se integró completa por avance rápido: es la versión publicada. Donde este documento se contradiga, **valen las tres entradas que siguen** por ser las más recientes.

Costos conocidos de esa versión, aceptados a sabiendas:

- El dock fijo tapa una franja de contenido mientras se lee (más notorio en celular). Es decisión explícita de Rocío; no reabrir.
- H pesa unos 80 KB sin comprimir, por encima de la guía de 60 KB.
- Los casos siguen sin imágenes; es el pendiente más importante del sitio.

Ajuste hecho al integrar: en celular los rótulos del croquis se veían a menos de 6 px; ahora usan 11 px.

**Mejoras UX y diseño aplicadas (2026-11-16):** Rocío aprobó implementar la segunda auditoría completa. En H, el hero es más ancho y compacto; la disponibilidad se separa de la bajada. Los tres destacados muestran cifra, contexto y nombre breve. Los casos separan título (hasta 36 px), descripción y resultado; la escala ya no se repite en la tabla. Servicios usa el ancho completo con descripción, entregable y destinatario separados. Los títulos de sección son más visibles y los metadatos suben a 12 px. Las cinco preguntas del método se leen en filas. Otros proyectos queda junto a los casos; experiencia/formación, dentro de Sobre mí. Se conserva la paleta; los resultados pequeños usan el azul de mayor contraste. La biblioteca ajusta sus lomos al ancho disponible sin zoom ni scroll interno y el encabezado móvil conserva LinkedIn y GitHub.

**Corrección explícita de Rocío (2026-11-16):** rechazó el menú en el encabezado, el CTA "Hablemos / Let's talk" a mitad de página y la animación/interacción del dock. El menú vuelve a estar fijo abajo desde el inicio, sin esconderse, cambiar de posición ni moverse con el scroll. La mascota permanece estática. El menú móvil abre hacia arriba y se cierra al elegir, tocar afuera o presionar Escape. Se eliminó el CTA de Servicios; el acceso del hero lleva al contacto final. No volver a trasladar el dock al encabezado ni agregarle desplazamientos automáticos.

Cambiar de tema actualiza solo colores/ícono y conserva los desplegables y la posición. Cambiar de idioma conserva los desplegables identificados. Copiar mail confirma únicamente después de una copia exitosa; ante rechazo o API ausente, muestra instrucciones para copiar manualmente en una región accesible EN/ES. Las imágenes de los casos siguen pendientes de material real; no se inventaron pantallas ni entregables.

**Croquis, refinamiento arquitectónico (2026-11-15):** se redibujaron las cuatro siluetas: Kavanagh con alas retranqueadas y torre continua, Congreso con linterna/cúpula/tambor/frontón/columnas/escalinata, Obelisco con dos caras y basamento, puente con mástil ahusado y abanico de tirantes. Tres pesos de línea separan contornos, detalles y contexto; un relleno celeste muy tenue sugiere volumen en ambos temas. Los rótulos comparten una línea al pie. Se quitaron las nubes y las llamadas superiores para despejar el cielo. Es una composición ilustrativa, no una vista geográfica ni un plano a escala. Se conserva el recorte móvil centrado en el Obelisco, sin imágenes raster ni dependencias nuevas. La cota usa coma en ES y punto en EN; el texto accesible nombra los cuatro hitos.

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
scripts/check.js         verificación automática con Playwright (todas las páginas)
scripts/check-lab.js     comportamiento del laboratorio (tema, demo del artículo, bichitos de B)
scripts/check-same.js    H idéntica antes y después de tocar algo compartido
site-A-article.html      artículo de A (generado)
site-I-talk.html         dirección I (generado)
site-*.html (raíz)       SALIDA GENERADA. No editar a mano.
index.html               H, la publicada (generada desde site-H-studio)
compare.html             portada del laboratorio (a mano)
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
- Qué ideas del laboratorio (A, artículo, B, D, I) quiere llevar a H, y si aprueba los textos nuevos de I, las notas de A y los rótulos de B.

Los carga Rocío más adelante:

- Una línea propia por libro. Los 8 títulos ya están cargados (Shoe Dog, Sapiens, Factfulness, Life 3.0, Creativity, Inc., The Hard Thing About Hard Things, Brave New World, Fahrenheit 451), pero cada `note` es una descripción neutra, no su opinión. Tampoco definió la "convicción" que usa D (se muestra "—").
- 3 artículos reales (`content.writing`).
- `profile.jpg`.
- Revisar su GitHub público antes de publicar: el footer enlaza al perfil y los repos pueden mostrar nombres de empresas.

## Deploy y ramas

El sitio está en **GitHub Pages**: https://rochijacob.github.io/portfolio_rj/ (el repo es público; Pages es gratis). Vercel no se usó. El plan era publicar ahí, pero Rocío habilitó Pages y quedó funcionando, y `vercel.json` sigue en el repo por si cambia de idea.

**Ramas (2026-11-16).** Hasta hoy Pages servía una rama de sesión (`claude/bold-feynman-x0n91n`), que además era la rama por defecto del repo. Eso es frágil: cada sesión nueva crea una rama con otro nombre. Se creó `main` con el mismo contenido. El esquema que queda:

- `main` es lo publicado. Se actualiza con avance rápido desde la rama de trabajo cuando Rocío pide "actualicemos la web"; el agente necesita ese permiso explícito para empujar a `main`.
- La rama de la sesión (`claude/...`) es donde se trabaja.
- La rama `codex/portfolio-ux-refinements` está totalmente contenida en la de trabajo y se puede borrar.

**Pasos que solo Rocío puede hacer en GitHub** (el agente no tiene acceso a esos ajustes), en este orden:

1. Settings, Pages, Source: rama `main`, carpeta `/ (root)`, Save. Esperar a que figure como publicado.
2. Settings, Branches, Default branch: cambiar a `main`.
3. Recién entonces borrar `codex/portfolio-ux-refinements`. La rama `claude/...` conviene borrarla al terminar la sesión, no antes.

Si se borra la rama desde la que Pages publica antes del paso 1, el sitio da 404.

## Qué no se verificó

Lector de pantalla, recorrido completo con teclado, y navegadores distintos de Chromium. El chequeo de idioma es por palabras clave, no una lectura completa.

## Fuentes que no estuvieron disponibles

Los chats de Claude de Rocío no eran accesibles desde la sesión que armó esto. De GitHub se leyeron solo repos públicos; los privados (`pileta_ml`, `pool-sim`, entre otros) no se abrieron.
