// Inlines src/core.js into each template so every site is a single self-contained file.
// Usage: node src/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
const dir = new URL(".", import.meta.url);
const core = readFileSync(new URL("core.js", dir), "utf8");
for (const f of ["site-A-notebook", "site-B-dock", "site-C-poster", "site-D-ledger", "site-E-arcade", "site-F-gallery", "site-G-record", "site-H-studio"]) {
  const tpl = readFileSync(new URL(`${f}.html`, dir), "utf8");
  const out = tpl.replace("/*CORE*/", () => core);
  writeFileSync(new URL(`../${f}.html`, dir), out);
  console.log(f, (Buffer.byteLength(out) / 1024).toFixed(1) + " KB");
}
