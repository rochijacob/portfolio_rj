# Laboratorio tipográfico: A, B, D renovadas + I nueva

Fecha: 2026-11-16. Estado: propuesta, pendiente de aprobación de Rocío.

## Intención

A Rocío la web (H) le parece prolija pero "le falta creatividad", y sospecha que la tipografía tiene que ver. Diagnóstico: H usa Geist en todo, la misma fuente que muchos portfolios de desarrolladores (falakgala.dev, por ejemplo), y por eso se ve genérica.

A, B y D pasan a ser un **laboratorio**: cada una lleva una idea al extremo para que se note, y después Rocío elige qué combinar en H. No son candidatas a reemplazar H. Se agrega una variante nueva, I.

## Metas

- Cada variante se arma alrededor de una pareja tipográfica distinta y prueba una idea concreta de las referencias nuevas.
- Conservar en cada una lo que a Rocío ya le gusta (ver tabla).
- Mostrar en D una respuesta funcionando a su pregunta: si el croquis va al pie, ¿qué sostiene el hero?

## No metas

- No se toca H (`index.html`, lo publicado) en este trabajo. Lo que guste se lleva a H después, en otro pedido.
- No se rehace el contenido: se usa `content` de `core.js`. Solo se agrega texto donde una variante lo necesita (I y el artículo de A).
- No se recuperan C, E, F ni G.

## Anti-metas (sería un fracaso aunque funcione)

- Que se vea "hecho por una IA sin criterio": tarjetas con sombra, gradientes, píldoras decorativas, emojis.
- Que las cuatro variantes se parezcan entre sí.
- Que los bichitos o las anotaciones tapen el texto o compitan con el croquis de Buenos Aires: la ciudad sigue siendo la protagonista.
- Inventar hechos, métricas o links, o nombrar empleadores o clientes.

## Referencias y qué se toma de cada una

| Referencia | Qué se toma |
|---|---|
| 10xshivam.dev | El wording: links dentro de las frases, tono suelto, títulos con voz (I) |
| nan.fyi/database | El esqueleto de artículo: título serif grande centrado, columna angosta, recuadros interactivos, notas (A) |
| d0xxed.com | Bichitos hechos con caracteres flotando de fondo; estructura de manual de terminal (B) |
| falakgala.dev | Ilustración panorámica en el pie como cierre (D) |
| lokiii.me | Todo en monoespaciada, firma a mano en el pie (B) |

Se toman decisiones de diseño, nunca layouts, textos ni assets.

## Las cuatro variantes

| | Tipografía (Google Fonts) | Conserva | Prueba |
|---|---|---|---|
| **A · Cuaderno** | Instrument Serif (títulos, con itálica) + Geist (texto) + Shantell Sans (notas a mano en celeste) | Estilo editorial, estante de libros con la panterita, puntitos | Anotaciones manuscritas al margen sobre la hoja punteada (flechas y subrayados a mano en SVG). Croquis en el hero. Página de artículo con el esqueleto de nan.fyi |
| **B · Terminal** | IBM Plex Mono en todo | Fondo de puntitos, azul marino, arranque en oscuro, juego en canvas | Estructura de manual (`rocio(1)`, NOMBRE, SINOPSIS, OPCIONES…). Bichitos porteños con caracteres flotando de fondo. Firma a mano en el pie |
| **D · Ledger** | Sans condensado con números tabulares (Barlow Condensed para títulos, Barlow para texto, IBM Plex Mono para cifras) | Espaciado, track record como tabla, tesis, tags de pares, ticker `ROCI` | Hero solo tipográfico (titular enorme). El croquis de Buenos Aires baja al pie como panorama, arriba del contacto |
| **I · Charla** (nueva) | Instrument Serif (títulos) + Hanken Grotesk (texto) | El contenido y la estructura de H | Wording conversacional: links y chips dentro de las frases, títulos de sección con voz. Textos nuevos en `content.*.talk` |

Todas: modo claro y oscuro con variables, EN/ES, 390 px sin scroll horizontal, `noindex`, sin dependencias nuevas fuera de Google Fonts.

### Detalle: el artículo de A

Página `site-A-article.html` (generada como las demás), con el esqueleto de nan.fyi: título serif grande centrado, bajada, columna de lectura angosta, recuadros de nota, bloque de código y **un recuadro interactivo propio**: una demo chica de colisiones entre rectángulos (dos cajas que se arrastran y se marcan al chocar), que es el "problema interesante" del borrador de juegos en Python.

Contenido: el borrador `drafts/lab-python-games/README.md`, con sus `[COMPLETAR]` como marcadores visibles. **No se usan las capturas** de los juegos: el borrador advierte que los sprites no son de Rocío. El artículo es un esqueleto de diseño: A lo enlaza desde su Lab, H no lo enlaza. (Decisión del agente.)

### Detalle: los bichitos de B

Fauna porteña dibujada con caracteres monoespaciados (cotorra, paloma, hornero), en un canvas o capa fija detrás del contenido, a muy baja opacidad, moviéndose lento. Se quietan con "reducir movimiento" y no interceptan clics. Son dibujos propios.

### Detalle: el croquis compartido

La función `city()` (y `bld()`) vive hoy en `src/site-H-studio.html`. Se mueve a `src/core.js` para que A y D la usen. H tiene que quedar idéntica: se verifica comparando capturas de H antes y después.

## Enfoque elegido

Se consideraron dos:

1. **Rehacer A, B y D en sus mismos archivos y agregar I.** Lo viejo queda en git. Se compara mejor con pocas opciones. **Elegido por Rocío.**
2. Mantener A, B y D y agregar versiones nuevas aparte. Descartado: ocho páginas, difícil de comparar y mantener.

## Archivos

- `src/site-A-notebook.html`, `src/site-B-dock.html`, `src/site-D-ledger.html`: rehechos.
- `src/site-I-talk.html`, `src/site-A-article.html`: nuevos.
- `src/core.js`: `city()`/`bld()` compartidos; textos nuevos de I y del artículo en EN y ES.
- `src/build.mjs`: suma las páginas nuevas.
- `compare.html`: se presenta como "Laboratorio", con H como la publicada y una línea por variante que diga qué prueba.
- `scripts/check.js`: incluye las páginas nuevas.
- `docs/HANDOFF.md`: estado del laboratorio, tipografías y reglas nuevas.

## Verificación

`node src/build.mjs`, `node scripts/check.js` y `node scripts/check-studio.js` en verde. Capturas de cada variante en 390 y 1440 px, claro y oscuro, revisadas a ojo. H idéntica antes y después del cambio de `city()`.

## Decisiones del agente (para que Rocío las revise)

- Las tipografías concretas de cada variante.
- Los tres animales de B (cotorra, paloma, hornero).
- Que el artículo use la demo de colisiones como recuadro interactivo.
- Los títulos y frases nuevas de I: se redactan a partir de hechos que ya están en `content` y quedan marcados en el handoff como pendientes de su visto bueno.

## Lo que queda al criterio de quien construye

Layout fino de cada variante, tamaños y espaciados, el dibujo exacto de los bichitos y de las anotaciones, y cómo se reacomodan las secciones de A, B y D dentro de su idea.
