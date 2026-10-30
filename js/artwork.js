"use strict";
// Original, code-drawn visual studies. These are not product screenshots.
(() => {
  const range = n => Array.from({length:n},(_,i)=>i);
  const line = (x1,y1,x2,y2,opacity=.25) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="currentColor" opacity="${opacity}" fill="none"/>`;
  const circle = (x,y,r,opacity=.4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="currentColor" opacity="${opacity}"/>`;
  const grid = range(16).map(i=>line(i*50,0,i*50,500,.055)).join("")+range(10).map(i=>line(0,i*50,800,i*50,.055)).join("");
  const studies = {
    openphoto: {color:"#9daaff",bg:"#161729",label:"OPTICS / COLOR / LOCAL INTELLIGENCE",draw:id=>{
      const blades=range(8).map(i=>`<path d="M400 122 C490 105 552 198 516 270 L444 332 L362 269 L391 217Z" fill="url(#${id}-glass)" stroke="#b9c3ff" stroke-opacity=".3" transform="rotate(${i*45} 400 250)"/>`).join("");
      return `<defs><linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a2b8ff" stop-opacity=".5"/><stop offset=".5" stop-color="#4e55a0" stop-opacity=".1"/><stop offset="1" stop-color="#daabf9" stop-opacity=".5"/></linearGradient></defs><g transform="translate(0 3)">${range(15).map(i=>circle(400,245,92+i*7,.08+i*.017)).join("")}${blades}<circle cx="400" cy="250" r="44" fill="#101421" stroke="#c9d7ff" stroke-opacity=".4"/>${circle(400,250,212,.2)}${range(72).map(i=>`<path d="M400 27v${i%6===0?10:4}" transform="rotate(${i*5} 400 250)" stroke="#b7c8ff" opacity=".4"/>`).join("")}</g>${line(65,250,140,250)}${line(660,250,735,250)}<text x="70" y="225" fill="currentColor" font-size="10" opacity=".5">RAW</text><text x="690" y="225" fill="currentColor" font-size="10" opacity=".5">RGB</text>`;
    }},
    cleanpreview: {color:"#d2f5a0",bg:"#192219",label:"INSPECT / ISOLATE / RESTORE",draw:()=>{
      const tiles=range(7).flatMap(y=>range(8).map(x=>{const active=(x===4&&y===2)||(x===3&&y===4)||(x===5&&y===4);return `<rect x="${195+x*46}" y="${80+y*46}" width="36" height="36" rx="3" fill="${active?'#ceff85':'#90ac73'}" fill-opacity="${active?'.95':.08+(x+y)*.009}" stroke="#c1e599" stroke-opacity="${active?'.8':'.18'}"/>`;})).join("");
      return `<g transform="translate(400 250) rotate(-25) skewX(10) translate(-400 -250)">${tiles}<rect x="183" y="68" width="380" height="334" rx="7" fill="none" stroke="#caff91" stroke-opacity=".22"/>${line(165,96,165,374,.45)}${line(590,96,590,374,.45)}</g><path d="M110 310v35h35M655 135h35v35" fill="none" stroke="currentColor" opacity=".5"/>`;
    }},
    dreamverse: {color:"#ceb8ff",bg:"#211b30",label:"WORLDS / GRAPHS / GENERATION",draw:()=>{
      const mountains=range(24).map(i=>{const base=360+i*3;return `<path d="M105 ${base} ${range(40).map(x=>{const xx=105+x*15;const y=base-Math.sin(x*.09+i*.13)**8*110-Math.sin(x*.23-i*.04)**6*70;return `L${xx.toFixed(1)} ${y.toFixed(1)}`;}).join('')}" fill="none" stroke="currentColor" opacity="${.12+i*.012}"/>`;}).join("");
      return `<circle cx="410" cy="197" r="91" fill="#bfa3f1" fill-opacity=".05" stroke="currentColor" stroke-opacity=".4"/>${range(20).map(i=>`<ellipse cx="410" cy="197" rx="${5+i*4.4}" ry="91" fill="none" stroke="currentColor" opacity=".16" transform="rotate(-24 410 197)"/>`).join("")}${mountains}${range(22).map(i=>`<circle cx="${80+(i*173)%645}" cy="${50+(i*41)%160}" r="${i%3===0?2:1}" fill="currentColor" opacity=".45"/>`).join("")}`;
    }},
    mafia: {color:"#e2bd82",bg:"#23201b",label:"REAL-TIME / SOCIAL / MULTIPLAYER",draw:()=>{
      const cards=range(5).map(i=>`<g transform="rotate(${(i-2)*12} 400 405)"><rect x="303" y="95" width="194" height="280" rx="12" fill="#27251f" stroke="#c8aa73" stroke-opacity=".5"/><rect x="317" y="109" width="166" height="252" rx="6" fill="none" stroke="#c8aa73" stroke-opacity=".15"/></g>`).join("");
      return `${cards}<g fill="none" stroke="currentColor"><circle cx="400" cy="190" r="27" fill="#343229"/><path d="M377 225L359 286H441L423 225M352 298H448L458 318H342Z" fill="#3a392b"/>${circle(400,250,152,.1)}<path d="M383 187L393 191M407 191L417 187"/></g>`;
    }},
    l2rust: {color:"#e4a982",bg:"#251a16",label:"RUST / PROTOCOL / PERSISTENCE",draw:()=>{
      const vertices=range(12).map(i=>({x:400+155*Math.cos(i*Math.PI/6),y:250+155*Math.sin(i*Math.PI/6)}));
      return `<g transform="translate(400 250) rotate(-15) translate(-400 -250)">${vertices.flatMap((p,i)=>vertices.filter((_,j)=>j>i&&(j-i)%3===0).map(q=>line(p.x,p.y,q.x,q.y,.16))).join("")}${range(9).map(i=>`<polygon points="${range(6).map(j=>`${400+(40+i*15)*Math.cos(j*Math.PI/3)},${250+(40+i*15)*Math.sin(j*Math.PI/3)}`).join(' ')}" fill="none" stroke="currentColor" opacity="${.15+i*.035}" transform="rotate(${i*5} 400 250)"/>`).join("")}${vertices.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="4" fill="currentColor"/>`).join("")}<circle cx="400" cy="250" r="20" fill="#f2b58b" fill-opacity=".8"/>${circle(400,250,215,.15)}</g>`;
    }},
    dadbs: {color:"#9bd1d6",bg:"#162526",label:"EVENT / SIGNATURE / VERIFICATION",draw:()=>{
      return `<g transform="translate(30 0)">${range(4).map(i=>{const x=145+i*125;const y=240-i*16;return `<path d="M${x} ${y-55}l65 -36 65 36v94l-65 36 -65 -36Z" fill="#25474a" fill-opacity=".5" stroke="currentColor" stroke-opacity=".5"/><path d="M${x} ${y-55}l65 38 65 -38M${x+65} ${y-17}v94" fill="none" stroke="currentColor" stroke-opacity=".3"/>${range(5).map(n=>line(x+15,y+n*9,x+52,y+n*9+21,.2)).join('')}`;}).join("")}</g>${line(100,400,690,325,.3)}<path d="M148 100v24m-12 -12h24M665 380v24m-12 -12h24" stroke="currentColor" opacity=".5"/>`;
    }},
    microagent: {color:"#86d6c5",bg:"#132420",label:"LINUX / eBPF / OBSERVABILITY",draw:()=>{
      return `${range(12).map(i=>`<path d="${range(130).map(j=>{const x=70+j*5.2;const pulse=Math.exp(-(((j-60)/21)**2));const y=130+i*20+Math.sin(j*.25+i*.4)*pulse*70;return `${j===0?'M':'L'}${x.toFixed(1)} ${y.toFixed(1)}`;}).join('')}" fill="none" stroke="currentColor" opacity="${.13+i*.055}"/>`).join("")}<rect x="260" y="78" width="280" height="345" fill="none" stroke="currentColor" stroke-opacity=".15" stroke-dasharray="2 7"/>${line(400,60,400,440,.17)}`;
    }},
    deutschecore: {color:"#c8d992",bg:"#22291b",label:"LANGUAGE / KNOWLEDGE / RETRIEVAL",draw:()=>{
      const nodes=range(24).map(i=>({x:400+Math.cos(i*2.399)*(40+i*6.1),y:250+Math.sin(i*2.399)*(35+i*5.4)}));
      return nodes.flatMap((p,i)=>nodes.filter((q,j)=>j>i&&Math.hypot(p.x-q.x,p.y-q.y)<125).map(q=>line(p.x,p.y,q.x,q.y,.2))).join("")+nodes.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="${i%5===0?18:5}" fill="${i%5===0?'#343f27':'#c8d992'}" stroke="currentColor" stroke-opacity=".65" fill-opacity="${i%5===0?1:.55}"/>`).join("")+`<circle cx="400" cy="250" r="39" fill="#232e19" stroke="currentColor"/><text x="400" y="264" text-anchor="middle" fill="currentColor" font-size="38" font-family="serif">ä</text>`;
    }},
    aigamestudio: {color:"#e0adc9",bg:"#291c26",label:"AGENTS / NARRATIVE / CREATIVE TOOLS",draw:()=>{
      return `${range(22).map(i=>`<rect x="${270+i*2}" y="${115+i*2}" width="${260-i*4}" height="${260-i*4}" rx="${30-i}" fill="none" stroke="currentColor" opacity="${.1+i*.017}" transform="rotate(${i*2.8-24} 400 245)"/>`).join("")}<path d="M378 209L438 245L378 281Z" fill="#e0adc9" fill-opacity=".85"/>${circle(400,245,200,.14)}${line(120,245,185,245)}${line(615,245,680,245)}`;
    }},
    maglens: {color:"#a8c4e8",bg:"#1b2331",label:"PARAMETRIC / OPTICS / FORM",draw:()=>{
      return `<g transform="rotate(-24 400 250)">${range(5).map(i=>{const x=180+i*100;return `<ellipse cx="${x}" cy="250" rx="35" ry="112" fill="#a8c4e8" fill-opacity="${i===2?.12:.025}" stroke="currentColor" stroke-opacity=".7"/>${range(4).map(j=>`<ellipse cx="${x+j*3}" cy="250" rx="35" ry="${112-j*6}" fill="none" stroke="currentColor" opacity=".2"/>`).join('')}`;}).join("")}<path d="M100 250H730" stroke="currentColor" stroke-dasharray="6 6" opacity=".3"/><path d="M180 250L580 158M180 250L580 342M180 250H580" stroke="currentColor" opacity=".2"/>${line(180,398,580,398,.6)}${line(180,387,180,409,.6)}${line(580,387,580,409,.6)}</g>`;
    }}
  };
  window.PORTFOLIO_ART = projectId => {
    const study=studies[projectId];
    if(!study)return null;
    const figure=document.createElement("div");figure.className="project-art";figure.setAttribute("aria-hidden","true");
    // All interpolated values are constants authored in this file, never external input.
    figure.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" style="color:${study.color}" preserveAspectRatio="xMidYMid slice"><rect width="800" height="500" fill="${study.bg}"/>${grid}${study.draw('art-'+projectId)}<path d="M30 50V30H50M750 30H770V50M770 450V470H750M50 470H30V450" fill="none" stroke="currentColor" opacity=".3"/></svg><span class="art-caption">${study.label}</span>`;
    return figure;
  };
  window.PORTFOLIO_ENGINEERING_ART = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" fill="none" style="color:var(--accent)"><g stroke="currentColor">${range(8).map(i=>`<path d="M${100+i*8} ${220-i*22}L${300+i*8} ${275-i*22}L${480+i*8} ${195-i*22}L${280+i*8} ${140-i*22}Z" opacity="${.12+i*.065}"/>`).join("")}<path d="M100 220L156 66M300 275L356 121M480 195L536 41M280 140L336 -14" opacity=".3"/><path d="M60 250L305 315L570 200" stroke-dasharray="4 5" opacity=".3"/></g></svg>`;
})();
