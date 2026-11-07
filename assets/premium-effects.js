/* Vision Trading Academy — decorative effects, no trading signals */
document.addEventListener('DOMContentLoaded',()=>{
 const hero=document.querySelector('.hero');
 if(hero){
  const orb=document.createElement('div');orb.className='vision-glow-orb';hero.appendChild(orb);
  const grid=document.createElement('div');grid.className='vision-chart-grid';hero.appendChild(grid);
  const art=document.createElement('div');art.className='vision-beasts';art.setAttribute('aria-hidden','true');
  art.innerHTML='<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g class="vision-bull" fill="none" stroke="#ff8a26" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"><path d="M20 100 L40 63 L64 80 L89 52 L113 79 L140 61 L169 83 L189 66 L206 88 L228 84 L247 101 L273 97 L293 116 L276 127 L255 118 L235 140 L207 128 L181 151 L151 135 L125 159 L102 137 L77 145 L60 119 L39 129 Z" fill="#ff7a1815"/><path d="M39 63 Q25 35 38 18 Q49 38 67 45 M83 50 Q95 20 113 18 Q111 43 100 55"/><path d="M61 112 L55 158 M121 144 L115 178 M222 135 L228 170 M266 117 L281 153"/></g><g class="vision-bear" transform="translate(195 10) scale(.44)" fill="none" stroke="#ff4848" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".7"><path d="M20 112 Q26 78 56 77 L83 61 Q109 45 143 66 L173 84 L213 91 L237 119 L225 143 L197 143 L185 171 L162 171 L156 143 L104 148 L93 175 L68 175 L61 142 L32 146 Z"/><circle cx="203" cy="107" r="4" fill="#ff4848"/><path d="M40 76 L22 50 L17 71 M142 65 L159 44 L169 79"/></g></svg>';
  hero.appendChild(art);
 }
 const ticker=document.querySelector('.ticker');
 if(ticker){const strip=document.createElement('div');strip.className='vision-live-strip';strip.innerHTML='<span>◉ VISION MARKET LAB</span><span>▲ BULLISH / LEARN THE STRUCTURE</span><span>▼ BEARISH / MANAGE THE RISK</span><span>EDUCATIONAL CHARTS ONLY</span>';ticker.insertAdjacentElement('afterend',strip)}
 const section=document.querySelector('#masterclass .shell');
 if(section){const el=document.createElement('div');el.className='vision-spotlight';el.innerHTML='<div><span class="tag">ONE COMPLETE PROGRAM · KOLHAPUR</span><h3>FROM THE FIRST CANDLE TO A COMPLETE TRADING PLAN.</h3><p>15 days covering fundamentals, technical analysis, live market setups and risk-first decision making. One learning journey from basics to advanced concepts.</p></div><a class="btn btn-orange" href="https://wa.me/919665420707?text=Hi%20Vision%20Trading%20Academy%2C%20I%20want%20to%20enquire%20about%20the%2015-day%20masterclass" target="_blank" rel="noopener">JOIN THE NEXT BATCH ↗</a>';section.appendChild(el)}
});
