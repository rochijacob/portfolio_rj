// Behaviour checks for the lab directions (A, article, B, D, I). Needs Playwright with Chromium.
const { chromium, devices } = require('playwright');
const path = require('path'), fs = require('fs');
const root = path.join(__dirname, '..'), url = s => 'file://' + root + '/' + s + '.html';
const lab = ['site-A-notebook', 'site-A-article', 'site-B-dock', 'site-D-ledger', 'site-I-talk', 'site-J-hero'].filter(s => fs.existsSync(path.join(root, s + '.html')));
let fails = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fails++; };
(async () => {
  const br = await chromium.launch();
  // 1. Theme survives a language change on every lab page.
  for (const s of lab) {
    const p = await br.newPage({ colorScheme: 'light' }); await p.goto(url(s));
    const btn = await p.$('[data-theme-btn]'); if (!btn) { ok(false, `${s}: theme button`); await p.close(); continue; }
    const before = await p.evaluate(() => document.documentElement.dataset.theme);
    await btn.click(); const mid = await p.evaluate(() => document.documentElement.dataset.theme);
    const other = await p.evaluate(() => document.documentElement.lang === 'es' ? 'en' : 'es');
    await p.click(`[data-lang="${other}"]`);
    const after = await p.evaluate(() => document.documentElement.dataset.theme);
    ok(mid !== before && after === mid, `${s}: theme ${before}→${mid}, kept after language change (${after})`);
    await p.close();
  }
  // 2. Article demo: mouse drag reaches "hit".
  if (lab.includes('site-A-article')) {
    const p = await br.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto(url('site-A-article'));
    const st = () => p.$eval('#demo', d => d.classList.contains('on'));
    await p.$eval('#demo', e => e.scrollIntoView({ block: 'center' }));
    ok(!(await st()), 'article: starts apart');
    const m = await (await p.$('#mov')).boundingBox(), f = await (await p.$('.fix')).boundingBox();
    await p.mouse.move(m.x + m.width / 2, m.y + m.height / 2); await p.mouse.down();
    await p.mouse.move(f.x + f.width / 2, f.y + f.height / 2, { steps: 8 }); await p.mouse.up();
    ok(await st(), 'article: mouse drag makes them touch');
    await p.click('[data-reset]'); ok(!(await st()), 'article: reset separates them');
    await p.close();
    // 3. Touch drag on a phone does not scroll the page.
    const ctx = await br.newContext({ ...devices['iPhone 13'] }); const q = await ctx.newPage(); await q.goto(url('site-A-article'));
    await q.$eval('#demo', e => e.scrollIntoView({ block: 'center' })); const y0 = await q.evaluate(() => scrollY);
    const mb = await (await q.$('#mov')).boundingBox(), fb = await (await q.$('.fix')).boundingBox();
    const cdp = await ctx.newCDPSession(q);
    const tp = (type, x, y) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
    await tp('touchStart', mb.x + mb.width / 2, mb.y + mb.height / 2);
    for (let i = 1; i <= 8; i++) await tp('touchMove', mb.x + mb.width / 2 + (fb.x + fb.width / 2 - mb.x - mb.width / 2) * i / 8, mb.y + mb.height / 2 + (fb.y + fb.height / 2 - mb.y - mb.height / 2) * i / 8);
    await tp('touchEnd'); await q.waitForTimeout(100);
    const hit = await q.$eval('#demo', d => d.classList.contains('on')), y1 = await q.evaluate(() => scrollY);
    ok(hit && y0 === y1, `article: touch drag touches (${hit}) without scrolling (${y0}→${y1})`);
    await ctx.close();
  }
  // 4. B: background critters never sit on top of a link or button at 390 px.
  if (lab.includes('site-B-dock')) {
    const p = await br.newPage({ viewport: { width: 390, height: 900 } }); await p.goto(url('site-B-dock')); await p.waitForTimeout(600);
    const blocked = await p.evaluate(() => [...document.querySelectorAll('a,button')].filter(e => { const r = e.getBoundingClientRect(); if (!r.width || r.top < 0 || r.bottom > innerHeight) return false; const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return hit && !e.contains(hit) && hit.closest('.critters'); }).length);
    ok(blocked === 0, `B: critters block ${blocked} controls`);
    await p.close();
  }
  await br.close(); console.log(fails ? `${fails} FAILED` : 'PASS: lab behaviour'); process.exit(fails ? 1 : 0);
})();
