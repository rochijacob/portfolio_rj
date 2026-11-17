# Rocío Jacob · portfolio

Cuatro direcciones de diseño para el mismo contenido. Cada archivo es autocontenido (HTML + CSS + JS, sin build).

| Archivo | Dirección |
|---|---|
| `site-A-notebook.html` | Editorial, texto primero, estante de libros |
| `site-B-dock.html` | Dark, dock flotante, juego en canvas |
| `site-D-ledger.html` | Perfil de inversión, ticker `ROCI` |
| `site-H-studio.html` | Sobria y limpia: líneas finas, tipografía, un solo detalle |

`index.html` es la home en inglés y `es.html` su versión en español. `compare.html` compara las direcciones.

## Editar contenido

Todo el texto (EN/ES), libros y artículos viven en `src/core.js`, en el objeto `content`. Después de editar:

```bash
node src/build.mjs
```

Eso regenera los HTML. Para verificar: `node scripts/check.js`.

SEO: el build prerenderiza las dos páginas públicas y genera canonical, hreflang, JSON-LD, sitemap y redirecciones cortas `x/` e `in/`. El dominio se configura en `src/seo.mjs`. Prueba adicional: `node scripts/check-seo.js` (Playwright; `BROWSER_CHANNEL=chrome`). Ver `docs/AUDIT-2026-11-16.md` y `docs/ANALYTICS.md` para propuestas, Search Console y configuración pendiente de GTM.

El contexto completo del proyecto, las decisiones y los pendientes están en `docs/HANDOFF.md`. Los ítems marcados `// REPLACE` y los `[CORCHETES]` son datos pendientes.

## Publicación (GitHub Pages)

URL: https://rochijacob.github.io/portfolio_rj/

Se publica desde la rama **`main`**, carpeta raíz (Settings, Pages, Source: Deploy from a branch). El sitio principal es `index.html`, que el build genera a partir de la dirección H (`src/site-H-studio.html`). Las otras direcciones (`site-A-notebook`, `site-B-dock`, `site-D-ledger`) y `compare.html` quedan accesibles por URL directa y marcadas `noindex`.

No hay paso de build en el servidor: los HTML están generados y versionados. Si se edita `src/`, correr `node src/build.mjs` antes de hacer commit.

`vercel.json` queda por si algún día se prefiere Vercel (preset Other, sin build).

## Ramas

- `main`: lo publicado. No se trabaja directamente sobre ella.
- `claude/...`: ramas de trabajo de cada sesión de Claude. Se integran a `main` para actualizar la web.
- No dejar el sitio publicado desde una rama de sesión: cada sesión nueva crea una rama con otro nombre y el sitio dejaría de actualizarse.

Foto: `profile.png` en la raíz.
