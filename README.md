# Rocío Jacob · portfolio

Cuatro direcciones de diseño para el mismo contenido. Cada archivo es autocontenido (HTML + CSS + JS, sin build).

| Archivo | Dirección |
|---|---|
| `site-A-notebook.html` | Editorial, texto primero, estante de libros |
| `site-B-dock.html` | Dark, dock flotante, juego en canvas |
| `site-D-ledger.html` | Perfil de inversión, ticker `ROCI` |
| `site-H-studio.html` | Sobria y limpia: líneas finas, tipografía, un solo detalle |

`index.html` es una página para comparar todas.

## Editar contenido

Todo el texto (EN/ES), libros y artículos viven en `src/core.js`, en el objeto `content`. Después de editar:

```bash
node src/build.mjs
```

Eso regenera los HTML. Para verificar: `node scripts/check.js`.

El contexto completo del proyecto, las decisiones y los pendientes están en `docs/HANDOFF.md`. Los ítems marcados `// REPLACE` y los `[CORCHETES]` son datos pendientes.

## Deploy en Vercel

El sitio que se publica es `index.html`, que el build genera a partir de la dirección H (`src/site-H-studio.html`). Las otras tres direcciones (`site-A-notebook`, `site-B-dock`, `site-D-ledger`) y `compare.html` quedan accesibles por URL directa, marcadas `noindex`.

1. En vercel.com: Add New, Project, importar `rochijacob/portfolio_rj`.
2. Framework Preset: **Other**. Dejar vacíos Build Command y Output Directory.
3. Deploy. Cada push a la rama vuelve a publicar.

No hay paso de build en Vercel: los HTML ya están generados y versionados. Si se edita `src/`, correr `node src/build.mjs` antes de hacer commit.

Foto: `profile.png` en la raíz.
