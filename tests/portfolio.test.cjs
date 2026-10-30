const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = {window:{}, document:{addEventListener(){}}};
vm.createContext(context);
for (const file of ['js/projects.js','js/portfolio.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'), context);
const projects = context.window.PORTFOLIO_PROJECTS;
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
test('ten curated projects, unique identifiers and explicit maturity',()=>{
  assert.equal(projects.length,10); assert.equal(new Set(projects.map(p=>p.id)).size,10);
  for (const p of projects) {assert.ok(p.status);assert.ok(p.tags.length);assert.ok(p.categories.length);}
});
test('complete project copy in four languages',()=>{
  for(const p of projects) for(const lang of ['en','de','ru','uk']) {
    assert.equal(p.copy[lang].length,3); for(const text of p.copy[lang]) assert.ok(text.length>25, `${p.id}/${lang}`);
    assert.ok(context.window.PORTFOLIO_UI[lang].statuses[p.status]);
  }
});
test('all static page translation keys are present',()=>{
  const keys=[...html.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1]);
  for(const lang of ['de','ru','uk']) for(const key of keys) assert.ok(context.window.PORTFOLIO_TRANSLATIONS[lang][key], `${lang}/${key}`);
});
test('only the verified public code repositories receive source links',()=>{
  const sourceLinks=projects.flatMap(p=>p.links.filter(l=>l.kind==='code').map(l=>l.url)).sort();
  assert.deepEqual(Array.from(sourceLinks),['https://github.com/ANTIANT1/Cleaner','https://github.com/ANTIANT1/OpenPhoto']);
  for(const p of projects) for(const link of p.links){assert.equal(new URL(link.url).protocol,'https:');assert.ok(context.window.PORTFOLIO_UI.en[link.kind]);}
});
test('L2RUST is a private in-development description, not a download or legal claim',()=>{
  const l2=projects.find(p=>p.id==='l2rust');assert.equal(l2.status,'development');assert.equal(l2.links.length,0);assert.ok(!l2.public);
  assert.match(l2.copy.ru[0],/Экспериментальное Rust-ядро MMO в разработке/);
  assert.doesNotMatch(JSON.stringify(l2),/100%|500 CCU|legally clean|полностью легальн/i);
});
test('new entry point uses only existing local scripts and CSS',()=>{
  for(const match of html.matchAll(/(?:src|href)="((?:js|css)\/[^"?]+)(?:\?[^" ]+)?"/g)) assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
  assert.doesNotMatch(html,/13\+|Completed Projects|cdnjs|fonts.googleapis/);
});
test('project categories are known and both public projects remain visible',()=>{
  const categories=new Set(['open','ai','systems','games','security','engineering']);
  for(const p of projects) for(const category of p.categories)assert.ok(categories.has(category));
  assert.equal(projects.filter(p=>p.categories.includes('open')).length,2);
});
