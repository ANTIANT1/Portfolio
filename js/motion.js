"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const root=document.documentElement;
  const hero=document.querySelector(".hero");
  const canvas=document.getElementById("hero-canvas");
  const ctx=canvas?.getContext("2d",{alpha:true});
  const motionButton=document.getElementById("motion-toggle");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)");
  const progress=document.querySelector(".reading-progress");
  const steps=[...document.querySelectorAll(".engineering-list article")];
  const contact=document.getElementById("contact");
  let paused=false;
  try{paused=localStorage.getItem("portfolio-motion")==="off";}catch{}
  let enabled=!paused&&!reduce.matches;
  let inView=true,frame=0,lastFrame=0,rotation=0,heroProgress=0,width=1,height=1,scrollFrame=0;
  let pointer={x:0,y:0},smoothPointer={x:0,y:0};
  const clamp=(value,min=0,max=1)=>Math.max(min,Math.min(max,value));
  const motionLabels={en:["Pause motion","Resume motion","Reduced motion"],de:["Animation pausieren","Animation starten","Reduzierte Bewegung"],ru:["Остановить анимацию","Включить анимацию","Без анимации"],uk:["Зупинити анімацію","Увімкнути анімацію","Без анімації"]};
  const diagram=document.getElementById("engineering-diagram");
  if(diagram&&window.PORTFOLIO_ENGINEERING_ART)diagram.innerHTML=window.PORTFOLIO_ENGINEERING_ART();

  // Parametric (2,3) torus knot: authored geometry, projected in 3D on a 2D canvas.
  // The modest mesh and 30fps cap keep this decorative layer lightweight.
  const slices=144, sides=12;
  const mesh=[];
  const center=u=>[(2+.58*Math.cos(3*u))*Math.cos(2*u),(2+.58*Math.cos(3*u))*Math.sin(2*u),.8*Math.sin(3*u)];
  for(let i=0;i<slices;i++){
    const u=i/slices*Math.PI*2,c=center(u),next=center(u+.001);
    let tangent=next.map((n,j)=>n-c[j]);const length=Math.hypot(...tangent);tangent=tangent.map(n=>n/length);
    let normal=[-tangent[1],tangent[0],0];const nl=Math.hypot(...normal);normal=normal.map(n=>n/nl);
    const binormal=[tangent[1]*normal[2]-tangent[2]*normal[1],tangent[2]*normal[0]-tangent[0]*normal[2],tangent[0]*normal[1]-tangent[1]*normal[0]];
    mesh.push(Array.from({length:sides},(_,j)=>{const v=j/sides*Math.PI*2;return c.map((n,k)=>n+.34*(Math.cos(v)*normal[k]+Math.sin(v)*binormal[k]));}));
  }
  function draw(){
    if(!ctx||width<1||height<1)return;
    const dark=root.dataset.theme!=="light";
    ctx.clearRect(0,0,width,height);
    const scale=Math.min(width/6.5,height/6.25);
    const ax=-.55+(enabled?smoothPointer.y*.14+heroProgress*.45:0);
    const ay=.35+rotation+(enabled?smoothPointer.x*.2+heroProgress*.7:0);
    const az=-.4;
    const cosX=Math.cos(ax),sinX=Math.sin(ax),cosY=Math.cos(ay),sinY=Math.sin(ay),cosZ=Math.cos(az),sinZ=Math.sin(az);
    const projected=mesh.map(ring=>ring.map(([x,y,z])=>{
      const y1=y*cosX-z*sinX,z1=y*sinX+z*cosX;
      const x2=x*cosY+z1*sinY,z2=-x*sinY+z1*cosY;
      const x3=x2*cosZ-y1*sinZ,y3=x2*sinZ+y1*cosZ;
      const perspective=8/(8+z2);
      return {x:width*.56+x3*scale*perspective,y:height*.47+y3*scale*perspective,z:z2};
    }));
    const rings=projected.map((points,i)=>({points,i,z:points.reduce((a,p)=>a+p.z,0)/sides})).sort((a,b)=>b.z-a.z);
    ctx.lineWidth=width<500?.65:.8;
    for(const ring of rings){
      const depth=clamp((3-ring.z)/6);
      const alpha=.15+depth*.52;
      ctx.strokeStyle=dark?(ring.i%9<3?`rgba(205,255,107,${alpha})`:`rgba(220,231,207,${alpha*.9})`):`rgba(50,78,29,${alpha})`;
      ctx.beginPath();ring.points.forEach((p,j)=>j===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.closePath();ctx.stroke();
    }
    for(let j=0;j<sides;j+=2){
      ctx.strokeStyle=dark?"rgba(215,240,183,.17)":"rgba(55,82,35,.18)";
      ctx.beginPath();projected.forEach((ring,i)=>i===0?ctx.moveTo(ring[j].x,ring[j].y):ctx.lineTo(ring[j].x,ring[j].y));ctx.closePath();ctx.stroke();
    }
    canvas.dataset.rendered="true";
  }
  function tick(now){
    frame=0;
    if(!enabled||!inView||document.hidden)return;
    if(now-lastFrame>=32){
      const elapsed=lastFrame?Math.min(now-lastFrame,64):32;lastFrame=now;
      rotation+=elapsed*.000065;
      smoothPointer.x+=(pointer.x-smoothPointer.x)*.06;smoothPointer.y+=(pointer.y-smoothPointer.y)*.06;
      draw();
    }
    frame=requestAnimationFrame(tick);
  }
  function resume(){if(enabled&&inView&&!document.hidden&&!frame)frame=requestAnimationFrame(tick);}
  function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastFrame=0;}
  function resize(){
    if(!canvas||!ctx)return;
    const box=canvas.getBoundingClientRect();width=box.width;height=box.height;
    const dpr=Math.min(devicePixelRatio||1,1.75);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();
  }
  function updateLabel(){
    const labels=motionLabels[root.lang]||motionLabels.en;
    motionButton.querySelector("[data-motion-label]").textContent=reduce.matches?labels[2]:(enabled?labels[0]:labels[1]);
    motionButton.setAttribute("aria-pressed",String(!enabled));motionButton.disabled=reduce.matches;
    motionButton.querySelector(".motion-icon").textContent=enabled?"Ⅱ":"▷";
  }
  function setMotion(){
    enabled=!paused&&!reduce.matches;root.dataset.motion=enabled?"on":"off";
    root.classList.add("motion-ready");updateLabel();
    if(enabled)resume();else{stop();rotation=0;smoothPointer={x:0,y:0};draw();}
  }
  motionButton.addEventListener("click",()=>{paused=!paused;try{localStorage.setItem("portfolio-motion",paused?"off":"on");}catch{}setMotion();});
  reduce.addEventListener("change",setMotion);

  const reveals=new IntersectionObserver(entries=>{
    for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add("is-visible");reveals.unobserve(entry.target);}
  },{threshold:.07,rootMargin:"0px 0px -20px 0px"});
  function collect(){
    reveals.disconnect();
    document.querySelectorAll(".project-card,.section-heading,.facts>div,.timeline>div,.engineering-intro,.contact").forEach((node,i)=>{
      node.dataset.reveal="";node.style.setProperty("--reveal-delay",`${node.classList.contains('project-card')?(i%2)*65:0}ms`);
      if(!node.hidden)reveals.observe(node);
    });
    updateLabel();resize();scheduleScroll();
  }
  function onScroll(){
    scrollFrame=0;
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?clamp(scrollY/max):0})`;
    const heroRect=hero.getBoundingClientRect();heroProgress=clamp(-heroRect.top/Math.max(1,heroRect.height));
    for(const step of steps){
      const rect=step.getBoundingClientRect();const value=clamp((innerHeight*.74-rect.top)/Math.max(rect.height,1));
      step.style.setProperty("--step-progress",value.toFixed(3));step.classList.toggle("is-active",rect.top<innerHeight*.65&&rect.bottom>innerHeight*.3);
    }
    if(enabled)contact.style.setProperty("--contact-progress",clamp((innerHeight-contact.getBoundingClientRect().top)/innerHeight).toFixed(3));
  }
  function scheduleScroll(){if(!scrollFrame)scrollFrame=requestAnimationFrame(onScroll);}
  window.addEventListener("scroll",scheduleScroll,{passive:true});
  new ResizeObserver(()=>{resize();scheduleScroll();}).observe(hero);
  new ResizeObserver(scheduleScroll).observe(document.body);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)resume();else stop();},{threshold:0}).observe(hero);
  document.addEventListener("visibilitychange",()=>document.hidden?stop():resume());
  hero.addEventListener("pointermove",event=>{if(event.pointerType!=="mouse"||!enabled)return;const rect=hero.getBoundingClientRect();pointer={x:(event.clientX-rect.left)/rect.width-.5,y:(event.clientY-rect.top)/rect.height-.5};});
  hero.addEventListener("pointerleave",()=>{pointer={x:0,y:0};});
  window.addEventListener("portfolio:render",collect);
  window.addEventListener("portfolio:theme",draw);
  setMotion();collect();resize();onScroll();
});
