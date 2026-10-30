// Development-only, isolated headless browser. No user browser profile or login.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const {pathToFileURL} = require('node:url');
const root=path.resolve(__dirname,'..');
const output=process.argv[2];
if(!output)throw new Error('Pass a screenshot output directory outside the website.');
fs.mkdirSync(output,{recursive:true});
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.argv[3]?{executablePath:process.argv[3]}:{})});
  try {
    const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.goto(pathToFileURL(path.join(root,'index.html')).href);
    assert.equal(await page.locator('.project-card').count(),10);
    for(const width of [1440,768,390,320]){
      await page.setViewportSize({width,height:1000});
      for(const lang of ['en','de','ru','uk']){
        await page.selectOption('#language',lang);
        assert.equal(await page.locator('html').getAttribute('lang'),lang);
        const dimensions=await page.evaluate(()=>({viewport:innerWidth,page:document.documentElement.scrollWidth}));
        assert.ok(dimensions.page<=dimensions.viewport,`Horizontal overflow ${lang}/${width}: ${JSON.stringify(dimensions)}`);
        assert.equal(await page.locator('.project-card:not([hidden])').count(),10);
      }
    }
    await page.setViewportSize({width:1440,height:1000});
    await page.selectOption('#language','en');
    await page.screenshot({path:path.join(output,'desktop-en.png')});
    for(const [category,expected] of Object.entries({open:2,ai:4,systems:5,games:4,security:2,engineering:3,all:10})){
      await page.locator(`[data-category="${category}"]`).click();
      assert.equal(await page.locator('.project-card:not([hidden])').count(),expected,category);
    }
    await page.locator('#project-l2rust summary').click();
    assert.equal(await page.locator('#project-l2rust details').getAttribute('open'),'');
    await page.locator('#project-l2rust').screenshot({path:path.join(output,'l2rust-card.png')});
    await page.locator('[data-category="open"]').click();
    await page.locator('.bench-row[href="#project-l2rust"]').click();
    await page.waitForFunction(()=>!document.getElementById('project-l2rust').hidden);
    assert.equal(await page.locator('.project-card:not([hidden])').count(),10);
    await page.selectOption('#language','de');
    await page.locator('#theme').click();
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    assert.equal(await page.locator('html').getAttribute('lang'),'de');
    await page.locator('.brand').click();
    await page.screenshot({path:path.join(output,'desktop-de-dark.png')});
    await page.locator('#theme').click();
    await page.setViewportSize({width:390,height:844});
    await page.selectOption('#language','ru');
    await page.locator('.brand').click();
    await page.screenshot({path:path.join(output,'mobile-ru.png')});
    await page.locator('[data-category="open"]').click();
    await page.locator('#projects').screenshot({path:path.join(output,'mobile-projects.png')});
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({ok:true,viewports:4,languages:4,projects:10,filters:7,pageErrors:errors,screenshots:output},null,2));
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
