// Focused regressions for the Studio UX. Requires Playwright, like check.js.
// BROWSER_CHANNEL=chrome uses an installed Chrome instead of bundled Chromium.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const fs = require('node:fs');
const url = pathToFileURL(path.join(__dirname, '..', 'site-H-studio.html')).href;
const shots = process.env.SHOTS;
(async () => {
  const browser = await chromium.launch(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {});
  try {
    if (shots) fs.mkdirSync(shots, { recursive: true });
    const dockSize = {};
    for (const width of [320, 390, 768, 1024, 1440]) for (const theme of ['light', 'dark']) for (const lang of ['en', 'es']) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: lang, colorScheme: theme, reducedMotion: 'reduce' });
      const page = await ctx.newPage(), errors = [];
      await page.route('https://www.googletagmanager.com/**', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(url);
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.evaluate(() => {
        const dock = document.querySelector('.dock').getBoundingClientRect();
        const shelf = document.querySelector('.spines');
        return { dockW: Math.round(dock.width), dockH: Math.round(dock.height), overflow: document.documentElement.scrollWidth - innerWidth, dockBottomGap: innerHeight - dock.bottom,
          shelfOverflow: shelf.scrollWidth - shelf.clientWidth, shelfVertical: shelf.scrollHeight - shelf.clientHeight,
          social: [...document.querySelectorAll('header .lk a')].every(e => getComputedStyle(e).display !== 'none') };
      });
      assert.equal(layout.overflow, 0, `Page overflow at ${width}/${theme}/${lang}`);
      assert.ok(layout.dockBottomGap >= 10 && layout.dockBottomGap <= 24, 'Dock must stay at the bottom at entry');
      assert.equal(await page.locator('#offers .cta').count(), 0, 'Services should not contain a contact CTA');
      assert.equal(await page.locator('.availability').count(), 0, 'Freelance availability line should be removed');
      assert.ok(await page.evaluate(() => dataLayer.some(item => item.event === 'gtm.js')), 'GTM bootstrap is missing');
      const experienceText = await page.locator('#experience').textContent();
      for (const employer of ['Universidad de San Andrés', 'Accenture', 'Muvinai']) assert.ok(experienceText.includes(employer), `${employer} is missing from experience`);
      assert.ok((await page.locator('.feat .k').first().textContent()).includes(lang === 'es' ? 'Estudio de software' : 'Software studio'), 'Project case should remain anonymized');
      assert.ok(layout.shelfOverflow <= 1 && layout.shelfVertical <= 1, 'Books overflow internally');
      assert.ok(layout.social, 'A header contact link is hidden');
      assert.deepEqual(errors, []);
      (dockSize[`${width}/${theme}`] ||= []).push(`${layout.dockW}x${layout.dockH}`);
      assert.equal(await page.locator('[data-lang][aria-pressed="true"]').count(), 1, 'Exactly one language must be active');
      if (shots && lang === 'es' && [390, 1440].includes(width)) await page.screenshot({ path: path.join(shots, `studio-${width}-${theme}.png`), fullPage: true });
      await ctx.close();
    }
    for (const [k, v] of Object.entries(dockSize)) assert.equal(new Set(v).size, 1, `Dock changes size with the language at ${k}: ${v.join(' vs ')}`);
    console.log('PASS: 20 viewport / theme / language combinations; no overflow or JS errors; bottom dock; no mid-page contact CTA.');
    for (const lang of ['en', 'es']) {
      const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang, reducedMotion: 'reduce' });
      const p = await ctx.newPage();
      await p.route('https://www.googletagmanager.com/**', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
      await p.goto(url);
      await p.locator('.hero .btn').first().click();
      await p.evaluate(() => scrollTo(0, 0));
      await p.mouse.wheel(0, 700); await p.waitForTimeout(100);
      assert.ok(await p.locator('.dock').evaluate(e => { const r=e.getBoundingClientRect();return r.top>=0 && innerHeight-r.bottom>=10 && innerHeight-r.bottom<=24; }), 'Dock must remain visible at the bottom during scroll');
      await p.locator('.dock a').first().focus();
      assert.ok(await p.locator('.dock').evaluate(e => { const r=e.getBoundingClientRect();return r.top>=0 && r.bottom<=innerHeight; }), 'Keyboard focus must reveal the dock');
      await p.locator('#more-work summary').click();
      await p.locator('[data-theme-btn]').focus();
      const y = await p.evaluate(() => scrollY);
      await p.keyboard.press('Enter');
      assert.ok(await p.locator('#more-work').evaluate(e => e.open), 'Theme change closed the case');
      assert.ok(Math.abs(await p.evaluate(() => scrollY) - y) < 2, 'Theme change moved the reading position');
      await p.locator('[data-lang]:not([aria-pressed="true"])').click();
      assert.ok(await p.locator('#more-work').evaluate(e => e.open), 'Language change closed the case');
      assert.equal(await p.locator('[data-copy]').evaluate(e => getComputedStyle(e).borderTopWidth), '0px', 'Copy control must read as text, not a boxed button');
      assert.equal(await p.locator('[data-copy] svg').count(), 1, 'Copy control must carry its icon');
      for (const mode of ['success', 'denied', 'missing']) {
        await p.evaluate(mode => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: mode === 'missing' ? undefined : { writeText: () => mode === 'success' ? Promise.resolve() : Promise.reject(new Error('Test rejection')) } }), mode);
        await p.locator('[data-copy]').click();
        const status = await p.locator('#copy-status').textContent();
        assert.ok(status.length > 0, 'Copy outcome should be announced');
        assert.equal(/Could not|No se pudo/.test(status), mode !== 'success', 'Incorrect copy feedback');
        assert.ok(await p.evaluate(expected => dataLayer.some(item => item.portfolio_event_name === 'email_copy' && item.portfolio_parameters.result === expected), mode === 'success' ? 'success' : 'failure'), 'Email copy event is missing');
        assert.equal(/Copied|Copiado/.test(await p.locator('[data-copy] span').textContent()), mode === 'success', 'Copy label out of sync');
        await p.waitForTimeout(1900);
      }
      await p.setViewportSize({ width: 390, height: 844 });
      await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(80);
      await p.locator('[data-menu]').click();
      assert.equal(await p.locator('[data-menu]').getAttribute('aria-expanded'), 'true');
      await p.keyboard.press('Escape');
      assert.equal(await p.locator('[data-menu]').getAttribute('aria-expanded'), 'false');
      await ctx.close();
    }
    console.log('PASS: keyboard dock, theme and language state, clipboard success/failure/unavailable, mobile menu Escape.');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
