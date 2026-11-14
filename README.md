# Rocío Jacob · portfolio

Cuatro direcciones de diseño para el mismo contenido. Cada archivo es autocontenido (HTML + CSS + JS, sin build).

| Archivo | Dirección |
|---|---|
| `site-A-notebook.html` | Editorial, texto primero, estante de libros |
| `site-B-dock.html` | Dark, dock flotante, juego en canvas |
| `site-C-poster.html` | Celeste pleno, tipografía gigante |
| `site-D-ledger.html` | Perfil de inversión, ticker `ROCI` |

`index.html` es una página para comparar las cuatro.

## Editar contenido

Todo el texto (EN/ES), libros y artículos viven en `src/core.js`, en el objeto `content`. Después de editar:

```bash
node src/build.mjs
```

Eso regenera los cuatro HTML. Para verificar: `node scripts/check.js`.

El contexto completo del proyecto, las decisiones y los pendientes están en `docs/HANDOFF.md`. Los ítems marcados `// REPLACE` y los `[CORCHETES]` son datos pendientes.

## Deploy en Vercel

Importar el repo en Vercel con preset "Other", sin build command ni output directory. Se sirve como sitio estático.

Foto opcional: agregar `profile.jpg` en la raíz.
