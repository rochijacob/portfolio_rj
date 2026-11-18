const { chromium } = require('playwright');
const { readFileSync } = require('node:fs');
const http = require('node:http');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
(async () => {
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname.replace('/portfolio_rj/', '');
    try { res.setHeader('Content-Type', pathname.endsWith('.png') ? 'image/png' : 'text/html; charset=utf-8'); res.end(readFileSync(path.join(root, !pathname || pathname.endsWith('/') ? pathname + 'index.html' : pathname))); }
    catch { res.writeHead(404); res.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome' });
    const base = `http://127.0.0.1:${server.address().port}/portfolio_rj/`;
    for (const js of [false, true]) for (const lang of ['en', 'es']) {
      const context = await browser.newContext({ javaScriptEnabled: js, locale: lang === 'es' ? 'en-US' : 'es-AR', viewport: {width:390,height:844} });
      await context.route(/googletagmanager|google-analytics/, route => route.fulfill({body:''}));
      const page = await context.newPage();
      const errors = []; page.on('pageerror', error => errors.push(error.message));
      await page.goto(base + (lang === 'es' ? 'es.html' : '') + '?utm_source=linkedin&utm_medium=social');
      assert.equal(await page.locator('html').getAttribute('lang'), lang);
      assert.equal(await page.locator('h1').count(), 1);
      const title = await page.title();
      assert.ok(lang === 'es' ? title.includes('IA, automatización y productos digitales') : title.includes('AI, Automation & Digital Products'));
      assert.ok((await page.locator('#experience').textContent()).includes('Accenture'));
      assert.ok((await page.locator('meta[name=description]').getAttribute('content')).length > 100);
      assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://rochijacob.github.io/portfolio_rj/' + (lang === 'es' ? 'es.html' : ''));
      assert.equal(await page.locator('link[hreflang]').count(), 3);
      assert.equal(JSON.parse(await page.locator('script[type="application/ld+json"]').textContent())['@graph'][1].inLanguage, lang);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.locator(`[data-lang="${lang === 'es' ? 'en' : 'es'}"]`).click();
      await page.waitForURL(lang === 'es' ? /portfolio_rj\/(\?|$)/ : /es\.html/);
      assert.equal(await page.locator('html').getAttribute('lang'), lang === 'es' ? 'en' : 'es');
      if (js) assert.ok(page.url().includes('utm_source=linkedin'));
      assert.deepEqual(errors, []);
      await context.close();
    }
    for (const [slug, source] of [['x','x'],['in','linkedin']]) for (const lang of ['', 'en', 'es']) {
      const html = readFileSync(path.join(root, slug, lang, 'index.html'), 'utf8');
      const destination = JSON.parse(html.match(/location.replace\((".*?")\)/)[1]);
      const url = new URL(destination);
      assert.equal(url.searchParams.get('utm_source'), source);
      assert.equal(url.pathname.endsWith('/es.html'), lang === 'es');
      assert.ok(html.includes(`lang="${lang || 'en'}"`));
      assert.ok(html.includes('noindex,follow'));
      assert.ok(!html.includes('googletagmanager'));
    }
    console.log('PASS: EN/ES static HTML, no-JS navigation, canonical, hreflang, schema, mobile layout, campaign preservation and short-link destinations.');
  } finally { await browser?.close(); server.close(); }
})().catch(error => {console.error(error); process.exitCode=1;});
