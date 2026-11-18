// Rebuild the bilingual link preview from the current hero illustration.
const { chromium } = require('playwright');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.join(__dirname, '..');
const copy = {
  en: {
    lines: ['I build web products', 'and automations', 'that reduce manual work.'],
    sub: 'I build the tool and run the project. Once it’s live, I watch how people use it and fix what gets in their way.',
    note: 'Buenos Aires · remote work',
  },
  es: {
    lines: ['Desarrollo productos web', 'y automatizaciones', 'para reducir el trabajo manual.'],
    sub: 'Desarrollo la herramienta y llevo el proyecto. Cuando sale, miro cómo se usa y arreglo lo que estorba.',
    note: 'Buenos Aires · trabajo remoto',
  },
};

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome' });
  try {
    for (const lang of ['en', 'es']) {
      const page = await browser.newPage({ viewport: { width: 1200, height: 627 }, deviceScaleFactor: 1 });
      await page.goto(pathToFileURL(path.join(root, lang === 'es' ? 'es.html' : 'index.html')).href);
      const sketch = await page.locator('.fig .sk').first().evaluate(el => el.outerHTML);
      const c = copy[lang];
      const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600&family=Instrument+Serif:ital@0;1&family=Shantell+Sans:wght@400&display=swap" rel="stylesheet">
        <style>
          *{box-sizing:border-box}html,body{width:1200px;height:627px;margin:0}
          body{background:#f4f6f7 radial-gradient(circle,rgba(0,48,73,.055) 1px,transparent 1.4px) 0 0/22px 22px;color:#003049}
          main{position:relative;width:100%;height:100%;padding:70px 72px;overflow:hidden}
          .name{font:600 20px/1.3 Geist,Arial,sans-serif}
          .copy{position:absolute;left:72px;top:154px;width:660px}
          h1{margin:0;font:400 54px/1.04 'Instrument Serif',Georgia,serif;letter-spacing:-.015em}
          html[lang=es] h1{font-size:46px}
          h1 span{display:block;white-space:nowrap}
          h1 .last{color:#5a8fb1;font-style:italic}
          .sub{margin:36px 0 0;max-width:575px;font:400 20px/1.42 Geist,Arial,sans-serif}
          .art{position:absolute;right:65px;top:145px;width:410px;height:365px}
          .art svg{display:block;width:100%;height:100%;fill:none;stroke:#003049;stroke-width:1.15;stroke-linecap:round;stroke-linejoin:round}
          .art svg .outline{stroke-width:1.6}.art svg .detail{stroke-width:.65}
          .art svg .context{stroke:#4a6676;stroke-width:.75;opacity:.65}
          .art svg .guide{stroke:#5a8fb1;stroke-width:.7;opacity:.9}
          .art svg .wash{fill:#5a8fb1;fill-opacity:.09;stroke:none}
          .art svg text{font:400 8px monospace;letter-spacing:.12em;fill:#4a6676;stroke:none}
          .note{position:absolute;right:72px;bottom:78px;margin:0;color:#1b5e85;font:400 22px/1.2 'Shantell Sans','Comic Sans MS',cursive;transform:rotate(-2deg)}
        </style></head><body><main><div class="name">Rocío Jacob</div>
        <div class="copy"><h1><span>${c.lines[0]}</span><span>${c.lines[1]}</span><span class="last">${c.lines[2]}</span></h1><p class="sub">${c.sub}</p></div>
        <div class="art">${sketch}</div><p class="note">${c.note}</p></main></body></html>`;
      await page.setContent(html, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(root, `og-hero-${lang}.png`) });
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
