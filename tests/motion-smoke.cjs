// Isolated browser checks for motion, pause, accessibility fallbacks and local assets.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const {pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
const output=process.argv[2];
if(!output)throw new Error('Pass a screenshot directory outside the repository.');
fs.mkdirSync(output,{recursive:true});
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.argv[3]?{executablePath:process.argv[3]}:{})});
  try{
    const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'no-preference'});
    const url=process.argv[4]||pathToFileURL(path.join(root,'index.html')).href;
    const origin=new URL(url).origin;
    const errors=[],external=[],badResponses=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('request',r=>{if(/^https?:/.test(r.url())&&new URL(r.url()).origin!==origin)external.push(r.url());});
    page.on('response',r=>{if(r.status()>=400)badResponses.push({url:r.url(),status:r.status()});});
    await page.goto(url);await page.evaluate(()=>document.fonts.ready);
    await page.waitForFunction(()=>document.getElementById('hero-canvas').dataset.rendered==='true');
    assert.equal(await page.locator('html').getAttribute('data-motion'),'on');
    const snapshot=()=>page.locator('#hero-canvas').evaluate(c=>c.toDataURL());
    const first=await snapshot();await page.waitForTimeout(220);assert.notEqual(await snapshot(),first,'Geometry must animate');
    await page.waitForTimeout(1400);
    await page.screenshot({path:path.join(output,'hero-animated.png')});
    await page.locator('#motion-toggle').click();
    assert.equal(await page.locator('html').getAttribute('data-motion'),'off');
    const frozen=await snapshot();await page.waitForTimeout(150);assert.equal(await snapshot(),frozen,'Pause must freeze canvas');
    await page.reload();await page.evaluate(()=>document.fonts.ready);
    assert.equal(await page.locator('html').getAttribute('data-motion'),'off','Pause persists');
    await page.locator('#motion-toggle').click();
    await page.locator('#projects').scrollIntoViewIfNeeded();await page.waitForTimeout(1000);
    assert.ok(await page.locator('.project-card.is-visible').count()>0,'Project reveal is visible');
    await page.locator('#project-openphoto .project-visual-link').click();
    assert.equal(await page.locator('#project-openphoto details').getAttribute('open'),'','Visual opens details');
    await page.waitForTimeout(450);
    const offscreen=await snapshot();await page.waitForTimeout(150);assert.equal(await snapshot(),offscreen,'Offscreen canvas stops');
    const steps=page.locator('.engineering-list article');
    await steps.nth(1).scrollIntoViewIfNeeded();await page.waitForTimeout(200);
    assert.ok(Number(await steps.nth(1).evaluate(n=>n.style.getPropertyValue('--step-progress')))>.1);
    assert.ok(await steps.nth(1).evaluate(n=>n.classList.contains('is-active')));
    for(const width of [1920,1440,1024,768,390,320]){
      await page.setViewportSize({width,height:1000});
      for(const lang of ['en','de','ru','uk']){
        await page.selectOption('#language',lang);await page.evaluate(()=>document.fonts.ready);
        const layout=await page.evaluate(()=>({viewport:innerWidth,page:document.documentElement.scrollWidth}));
        assert.ok(layout.page<=layout.viewport,`Overflow ${lang}/${width}`);
      }
    }
    await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(50);
    assert.equal(await page.locator('html').getAttribute('data-motion'),'off');
    assert.equal(await page.locator('#motion-toggle').isDisabled(),true);
    for(const language of ['en','de','ru','uk']){
      await page.selectOption('#language',language);await page.setViewportSize({width:390,height:844});await page.locator('.brand').click();
      await page.screenshot({path:path.join(output,`mobile-${language}-final.png`)});
    }
    await page.setViewportSize({width:1440,height:1000});await page.selectOption('#language','en');
    await page.locator('.brand').click();await page.locator('#theme').click();
    await page.screenshot({path:path.join(output,'hero-light.png')});
    await page.locator('#theme').click();
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(output,'projects-final.png')});
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(output,'contact-final.png')});
    assert.deepEqual(errors,[]);assert.deepEqual(external,[],'No third-party requests');assert.deepEqual(badResponses,[],'All resources load');
    const noJS=await browser.newPage({javaScriptEnabled:false});await noJS.goto(url);
    assert.ok(await noJS.locator('noscript').isVisible());assert.ok(await noJS.locator('#hero-title').isVisible());await noJS.close();
    console.log(JSON.stringify({ok:true,motion:true,pausePersistence:true,offscreenSuspension:true,reducedMotion:true,noJavaScriptFallback:true,localAssetsOnly:true,viewports:6,languages:4,errors},null,2));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
