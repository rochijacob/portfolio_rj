# Laboratorio tipográfico Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rehacer A, B y D como variantes de laboratorio, cada una con su pareja tipográfica y su idea, y sumar I (Charla) y una página de artículo de A.

**Architecture:** HTML/CSS/JS plano. Cada plantilla `src/site-*.html` define `render(t, lang)` y recibe `src/core.js` inline vía `/*CORE*/` con `node src/build.mjs`. El croquis (`city()`, `bld()`) se mueve a `core.js` para compartirlo.

**Tech Stack:** HTML, CSS, JS sin frameworks; Google Fonts; Playwright (Chromium preinstalado) para los chequeos.

**Spec:** `docs/superpowers/specs/2026-11-16-laboratorio-tipografico-design.md`

## Global Constraints

- H (`src/site-H-studio.html`, `index.html`) no cambia visualmente.
- Todo texto visible vive en `content` de `src/core.js`, en `en` y `es`. Nada de texto fijo en plantillas.
- No inventar hechos, métricas ni links; lo que falta va como `[COMPLETAR]` visible. No nombrar empleadores ni clientes (tabla de anonimización en `docs/HANDOFF.md`).
- Modo claro y oscuro con variables CSS (`--bg`, `--ink`, `--acc`…), nunca colores fijos en componentes. Clave de tema: `rj-theme` (A, D, I, artículo), `rj-theme-b` (B).
- Paleta: fondo `#f4f6f7`, azul `#003049`, celeste `#669bbc`/`#5a8fb1`; rosa `#e56b9a` solo en la panterita. No volver al crema.
- Puntos de fondo: borde nítido 1,1 px, opacidad 0,15 claro / 0,09 oscuro.
- Sin tarjetas con sombra, gradientes decorativos, píldoras ni emojis.
- 390 px sin scroll horizontal; objetivos táctiles de 36 px o más.
- `<meta name="robots" content="noindex">` en todas las variantes.
- Solo Google Fonts como dependencia externa. Fuentes: A = Instrument Serif + Geist + Shantell Sans; B = IBM Plex Mono; D = Barlow Condensed + Barlow + IBM Plex Mono; I = Instrument Serif + Hanken Grotesk.
- Con `prefers-reduced-motion: reduce`, nada se anima.
- Español rioplatense, frases breves.

## Review Focus

1. Cambio de idioma o tema en cada variante: la página se re-renderiza sin perder el tema y sin errores de consola. Lo cubre `check.js` (toggle de idioma) y el chequeo de tema del Task 6.
2. Bichitos de B sobre texto en 390 px: no deben interceptar clics ni generar scroll horizontal. Test en Task 3.
3. Croquis compartido: H idéntica antes y después. Test de captura en Task 1.
4. Demo de colisiones con touch (celular): tiene que poder arrastrarse con el dedo sin hacer scroll de la página. Test en Task 5.
5. Textos largos en español en D (titular enorme condensado) a 390 px: no deben desbordar. Lo cubre `check.js`.

---

### Task 1: Croquis compartido en `core.js`

**Files:**
- Modify: `src/site-H-studio.html` (quitar `bld()` y `city()`), `src/core.js` (agregarlas)
- Create: `scripts/check-same.js`

**Interfaces:**
- Produces: `city(opts?) -> string` (SVG del croquis, misma firma y salida que hoy en H), `bld(...)` igual que hoy. Ambas globales en `core.js`.

- [ ] **Step 1:** Escribir `scripts/check-same.js`: abre `index.html` a 1440 y 390 px, en claro y oscuro, con `reducedMotion: 'reduce'`, y compara el `outerHTML` del SVG del croquis y una captura contra una referencia guardada en `$REF` (por defecto la carpeta temporal). Con `--save` guarda la referencia; sin flag compara y imprime `SAME` o `DIFF <detalle>`.
- [ ] **Step 2:** `node scripts/check-same.js --save` sobre el estado actual. Resultado esperado: guarda 4 referencias.
- [ ] **Step 3:** Mover `bld()` y `city()` de la plantilla H a `core.js` sin cambiar el cuerpo.
- [ ] **Step 4:** `node src/build.mjs && node scripts/check-same.js`. Resultado esperado: `SAME` ×4. Después `node scripts/check-studio.js` → PASS.
- [ ] **Step 5:** Commit "Share the Buenos Aires sketch between directions".

### Task 2: A · Cuaderno

**Files:**
- Modify: `src/site-A-notebook.html` (rehecha), `src/core.js` (textos de notas en `content.*.a`)

**Interfaces:**
- Consumes: `city()`, `bookShelf()`, `pixelCat()`, `langToggle()`, `content`.
- Produces: link al artículo con `href="site-A-article.html"` dentro del Lab de A.

- [ ] **Step 1:** Fuentes: Instrument Serif (400 e itálica) en títulos, Geist en texto, Shantell Sans en `.note`. Fondo punteado.
- [ ] **Step 2:** Hero: nombre y titular en Instrument Serif grande con una parte en itálica, croquis debajo. Dos o tres notas a mano en celeste (`.note`, Shantell Sans) con flecha o subrayado SVG dibujado a mano, al margen en escritorio y en línea en 390 px. Las notas son textos de `content.*.a.notes` (EN/ES) que solo repiten hechos ya presentes en `content` (por ejemplo "Buenos Aires · remoto", "500 mil+ descargas").
- [ ] **Step 3:** Conservar estante de libros con panterita, casos, Lab (con link al artículo), contacto, selector de tema y de idioma.
- [ ] **Step 4:** `node src/build.mjs && node scripts/check.js` → sin overflow, sin errores, sin leaks en `site-A-notebook`. Mirar capturas 390/1440 claro y oscuro.
- [ ] **Step 5:** Commit "A: notebook with serif display and handwritten margin notes".

### Task 3: B · Terminal

**Files:**
- Modify: `src/site-B-dock.html` (rehecha), `src/core.js` (rótulos tipo manual en `content.*.b`)

**Interfaces:**
- Consumes: `content`, `pixelCat()`, el juego en canvas existente de B.
- Produces: `critters(canvas)` local a B: dibuja y mueve cotorra, paloma y hornero hechos con caracteres.

- [ ] **Step 1:** Todo en IBM Plex Mono. Encabezado de manual (`rocio(1)` · título · `rocio(1)`), secciones con rótulos en mayúsculas tipo manual (NOMBRE, SINOPSIS, PROYECTOS, VER TAMBIÉN…) desde `content.*.b`, en EN y ES. Pie con fecha y firma a mano (SVG propio del nombre "Rocío", trazo simple).
- [ ] **Step 2:** Capa de bichitos: `<canvas aria-hidden="true">` fijo a pantalla completa, `pointer-events:none`, `z-index` por debajo del contenido, opacidad baja (≤ 0,35 en sus caracteres). Tres siluetas en grillas de caracteres (cotorra verde-celeste, paloma gris, hornero ocre apagado; en oscuro, mismos tonos). Movimiento lento en x; con reducir movimiento, quietos.
- [ ] **Step 3:** Test en `scripts/check.js`: para `site-B-dock` a 390 px, `document.elementFromPoint` en el centro de cada link visible devuelve el link (no el canvas).
- [ ] **Step 4:** `node src/build.mjs && node scripts/check.js` → B limpio. Capturas a ojo.
- [ ] **Step 5:** Commit "B: man-page terminal with Buenos Aires ASCII critters".

### Task 4: D · Ledger con panorama en el pie

**Files:**
- Modify: `src/site-D-ledger.html`

**Interfaces:**
- Consumes: `city()`, `content` (track record, tesis, tags, ticker `ROCI`).

- [ ] **Step 1:** Barlow Condensed para títulos, Barlow para texto, IBM Plex Mono para cifras con `tabular-nums`.
- [ ] **Step 2:** Hero solo tipográfico: titular a tamaño muy grande (`clamp`), ticker `ROCI` y disponibilidad; sin ilustración.
- [ ] **Step 3:** Conservar tesis, track record como tabla con filas que se abren, tags de pares, rótulo "ilustrativo".
- [ ] **Step 4:** Pie: contacto y, debajo, `city()` a todo el ancho como panorama de cierre. A 390 px, recorte centrado en el Obelisco.
- [ ] **Step 5:** `node src/build.mjs && node scripts/check.js` → D limpio. Capturas a ojo.
- [ ] **Step 6:** Commit "D: type-only hero, Buenos Aires panorama in the footer".

### Task 5: Artículo de A

**Files:**
- Create: `src/site-A-article.html`
- Modify: `src/core.js` (`content.*.article`), `src/build.mjs`, `scripts/check.js`

**Interfaces:**
- Consumes: `content.*.article = { title, dek, sections: [{h, body}], note, code, demo: {label, hint, hit, miss} }`.
- Produces: `site-A-article.html` generado.

- [ ] **Step 1:** Agregar `site-A-article` a `build.mjs` y a `sites` en `check.js`.
- [ ] **Step 2:** Contenido desde `drafts/lab-python-games/README.md`, con cada `[COMPLETAR]` visible, en EN y ES. Bloque de código: comprobación de colisión entre rectángulos (AABB) en Python, cuatro líneas, rotulado como ejemplo ilustrativo. Sin capturas de los juegos.
- [ ] **Step 3:** Layout tipo nan.fyi con las fuentes de A: título Instrument Serif grande centrado, bajada, columna de ~65ch, recuadro de nota con borde punteado, bloque de código, demo.
- [ ] **Step 4:** Demo: dos rectángulos en un SVG o canvas; uno se arrastra con pointer events (`touch-action:none` en el área); cuando se superponen cambia el color y el texto de estado (`hit`/`miss`). Botón "Reiniciar".
- [ ] **Step 5:** Test en `check.js` para el artículo: arrastrar con `page.mouse` el rectángulo móvil sobre el fijo y verificar que el texto de estado pasa de `miss` a `hit`; repetir con `page.touchscreen.tap` + eventos de puntero en 390 px emulando táctil, y que `scrollY` no cambie.
- [ ] **Step 6:** `node src/build.mjs && node scripts/check.js` → limpio. Commit "A: article page skeleton with a collision demo".

### Task 6: I · Charla

**Files:**
- Create: `src/site-I-talk.html`
- Modify: `src/core.js` (`content.*.talk`), `src/build.mjs`, `scripts/check.js`

**Interfaces:**
- Consumes: `content` de H (casos, servicios, libros, contacto), `content.*.talk = { hello, intro, links, sections: {work, services, about, books, contact} }`.

- [ ] **Step 1:** Agregar `site-I-talk` a `build.mjs` y `check.js`.
- [ ] **Step 2:** Textos de `content.*.talk` en EN y ES, conversacionales, con links dentro de la frase (mail, LinkedIn, GitHub como chips en línea, con borde fino, no píldoras rellenas). Solo hechos ya presentes en `content`.
- [ ] **Step 3:** Instrument Serif en títulos, Hanken Grotesk en texto; estructura de H (tres casos, servicios, sobre mí, libros, contacto) con títulos de sección con voz; puntos de fondo; tema y idioma.
- [ ] **Step 4:** Test de tema en `check.js` para A, B, D, I y artículo: cambiar tema, cambiar idioma, verificar que `data-theme` se mantiene.
- [ ] **Step 5:** `node src/build.mjs && node scripts/check.js && node scripts/check-studio.js` → limpio. Commit "I: conversational direction".

### Task 7: Laboratorio en `compare.html` y handoff

**Files:**
- Modify: `compare.html`, `docs/HANDOFF.md`

- [ ] **Step 1:** `compare.html` como "Laboratorio": H arriba como la publicada; A, artículo de A, B, D, I con una línea de qué prueba cada una y su pareja tipográfica. Las muestras usan la tipografía de cada variante.
- [ ] **Step 2:** HANDOFF: tabla de estado con las cinco páginas, tipografías, reglas de bichitos, croquis compartido, textos nuevos pendientes de visto bueno de Rocío.
- [ ] **Step 3:** Corrida final de los tres chequeos y `check-same.js` → todo verde. Commit y push a la rama de trabajo.
