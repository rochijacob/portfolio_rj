const {chromium} = require('playwright');
const path = require('node:path');
(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  try {
    for(const width of [390,1440]) {
      const context=await browser.newContext({locale:'es-AR',viewport:{width,height:900},colorScheme:width===390?'dark':'light'});
      await context.route(/googletagmanager|google-analytics/,r=>r.fulfill({body:''}));
      const page=await context.newPage();
      await page.goto('https://rochijacob.github.io/portfolio_rj/');
      await page.evaluate(()=>document.fonts.ready);
      await page.screenshot({path:path.join(__dirname,'../audit-shots',`published-${width}.png`),fullPage:true});
      console.log(JSON.stringify(await page.evaluate(()=>({width:innerWidth,height:document.body.scrollHeight,overflow:document.documentElement.scrollWidth-innerWidth,headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>e.textContent),text:document.body.innerText}))));
      await context.close();
    }
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
