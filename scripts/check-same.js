// Guards H against accidental change: compares the rendered markup of index.html with a saved reference.
// Usage: node scripts/check-same.js --save   (store reference)   |   node scripts/check-same.js   (compare)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..'), ref = process.env.REF || path.join(require('os').tmpdir(), 'portfolio-ref');
fs.mkdirSync(ref, { recursive: true });
const save = process.argv.includes('--save');
(async () => {
  const br = await chromium.launch(); let bad = 0;
  for (const w of [390, 1440]) for (const scheme of ['light', 'dark']) {
    const ctx = await br.newContext({ viewport: { width: w, height: 900 }, colorScheme: scheme, reducedMotion: 'reduce', locale: 'es-AR' });
    const p = await ctx.newPage();
    await p.addInitScript(() => { Date.now = () => 0; const D = Date; globalThis.Date = class extends D { constructor(...a) { super(...(a.length ? a : [0])); } }; });
    await p.goto('file://' + root + '/index.html'); await p.waitForTimeout(1200);
    const html = await p.evaluate(() => document.getElementById('app').outerHTML.replace(/\d\d:\d\d/g, '')); const h = crypto.createHash('sha1').update(html).digest('hex');
    const f = path.join(ref, `H-${w}-${scheme}.sha`);
    if (save) { fs.writeFileSync(f, h); console.log('saved', w, scheme); }
    else { const o = fs.readFileSync(f, 'utf8'); const ok = o === h; if (!ok) bad++; console.log(ok ? 'SAME' : 'DIFF', w, scheme); }
    await ctx.close();
  }
  await br.close(); process.exit(bad ? 1 : 0);
})();
