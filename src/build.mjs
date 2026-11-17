// Inlines src/core.js into each template so every site is a single self-contained file.
// Usage: node src/build.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { prerender, origin } from './seo.mjs';
const dir = new URL(".", import.meta.url);
const core = readFileSync(new URL("core.js", dir), "utf8");
for (const f of ["site-A-notebook", "site-A-article", "site-B-dock", "site-D-ledger", "site-I-talk", "site-J-hero", "site-H-studio"]) {
  if (!existsSync(new URL(`${f}.html`, dir))) continue;
  const tpl = readFileSync(new URL(`${f}.html`, dir), "utf8");
  const out = tpl.replace("/*CORE*/", () => core);
  writeFileSync(new URL(`../${f}.html`, dir), out);
  console.log(f, (Buffer.byteLength(out) / 1024).toFixed(1) + " KB");
  // The Studio direction is the live home page.
  if (f === "site-H-studio") {
    writeFileSync(new URL("../index.html", dir), prerender(out, 'en'));
    writeFileSync(new URL("../es.html", dir), prerender(out, 'es'));
    writeFileSync(new URL(`../${f}.html`, dir), out.replace('</head>', '<meta name="robots" content="noindex,follow"></head>'));
  }
}
writeFileSync(new URL('../robots.txt', dir), `User-agent: *\nAllow: /\nSitemap: ${origin}sitemap.xml\n`);
writeFileSync(new URL('../sitemap.xml', dir), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['', 'es.html'].map(path => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`);
for (const [slug, source, placement] of [['x', 'x', 'bio'], ['in', 'linkedin', 'profile']]) {
  const destination = origin + `?utm_source=${source}&utm_medium=social&utm_campaign=portfolio&utm_content=${placement}`;
  const folder = new URL(`../${slug}/`, dir);
  mkdirSync(folder, { recursive: true });
  writeFileSync(new URL('index.html', folder), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=${destination.replace(/&/g, '&amp;')}"><title>Rocío Jacob</title></head><body><a href="${destination.replace(/&/g, '&amp;')}">Rocío Jacob — portfolio</a><script>location.replace(${JSON.stringify(destination)});</script></body></html>\n`);
}
