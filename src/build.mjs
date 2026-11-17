// Inlines src/core.js into each template so every site is a single self-contained file.
// Usage: node src/build.mjs
import { existsSync, readFileSync, writeFileSync } from "node:fs";
const dir = new URL(".", import.meta.url);
const core = readFileSync(new URL("core.js", dir), "utf8");
for (const f of ["site-A-notebook", "site-A-article", "site-B-dock", "site-D-ledger", "site-I-talk", "site-J-hero", "site-H-studio"]) {
  if (!existsSync(new URL(`${f}.html`, dir))) continue;
  const tpl = readFileSync(new URL(`${f}.html`, dir), "utf8");
  const out = tpl.replace("/*CORE*/", () => core);
  writeFileSync(new URL(`../${f}.html`, dir), out);
  console.log(f, (Buffer.byteLength(out) / 1024).toFixed(1) + " KB");
  // The Studio direction is the live home page.
  if (f === "site-H-studio") writeFileSync(new URL("../index.html", dir), out);
}
