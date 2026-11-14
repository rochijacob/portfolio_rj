const { chromium } = require('playwright');
const path = require('path');
const root = path.join(__dirname, '..'), out = process.env.SHOTS || path.join(require('os').tmpdir(), 'portfolio-shots'); require('fs').mkdirSync(out, { recursive: true });
const sites = ['site-A-notebook', 'site-B-dock', 'site-C-poster', 'site-D-ledger'];
(async () => {
  const br = await chromium.launch();
  for (const s of sites) for (const w of [390, 768, 1440]) for (const lg of ['en', 'es']) {
    const ctx = await br.newContext({ viewport: { width: w, height: 900 }, locale: lg === 'es' ? 'es-AR' : 'en-US', reducedMotion: 'reduce' });
    const p = await ctx.newPage(); const errs = [];
    p.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|profile\.jpg|Failed to load resource/.test(m.text())) errs.push(m.text()); });
    p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
    await p.goto('file://' + root + '/' + s + '.html'); await p.waitForTimeout(250);
    const r = await p.evaluate(() => {
      const de = document.documentElement, over = de.scrollWidth - innerWidth;
      const wide = over > 0 ? [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1 && !e.closest('.shelf,.term,.stick,.rings')).slice(0, 4).map(e => e.tagName + '.' + e.className) : [];
      const small = [...document.querySelectorAll('a,button')].filter(e => { const b = e.getBoundingClientRect(); return b.width && (b.height < 36 || b.width < 30) && getComputedStyle(e).display !== 'inline'; }).map(e => (e.textContent.trim().slice(0, 18) || e.getAttribute('aria-label')) + ' ' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height));
      const noRel = [...document.querySelectorAll('a[target=_blank]')].filter(a => !/noopener/.test(a.rel)).length;
      return { lang: de.lang, over, wide, small: [...new Set(small)].slice(0, 8), noRel, text: document.body.innerText };
    });
    // crude leftover-language check
    const enWords = /\b(Work with me|Selected work|Experience|Books I've|Writing|Skip to|daily active|Master in Finance)\b/;
    const esWords = /\b(Trabajemos juntos|Sobre mí|Experiencia|Libros|descargas)\b/;
    const leak = lg === 'es' ? (r.text.match(enWords) || [])[0] : (r.text.match(esWords) || [])[0];
    console.log(`${s} ${w} ${lg} lang=${r.lang} overflow=${r.over} ${r.wide.join('|')} noRel=${r.noRel} leak=${leak || '-'} errs=${errs.length ? errs.join(';') : '-'} small=${w === 390 && lg === 'en' ? r.small.join(' , ') : '.'}`);
    if (lg === 'es' || w === 1440) await p.screenshot({ path: `${out}/${s}-${w}-${lg}.png`, fullPage: true });
    if (w === 390 && lg === 'en') { // toggle test
      await p.click('[data-lang="es"]'); const l2 = await p.evaluate(() => document.documentElement.lang + '/' + localStorage.getItem('rj-lang')); console.log('   toggle ->', l2);
    }
    await ctx.close();
  }
  await br.close();
})();
