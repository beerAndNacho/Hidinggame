(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '네온 옥상 도시',
          difficulty: '매우 어려움',
          desc: '네온 간판과 옥상 정원, 기계 설비가 뒤섞인 미래 도시를 수색하세요.',
          time: 116,
          targets: [
            { id:'city-drone', name:'순찰 드론', icon:'🚁' },
            { id:'city-sneaker', name:'빨간 운동화', icon:'👟' },
            { id:'city-coin', name:'황금 코인', icon:'🪙' },
            { id:'city-robot', name:'소형 로봇', icon:'🤖' },
            { id:'city-leaf', name:'초록 잎사귀', icon:'🍃' },
            { id:'city-battery', name:'충전 배터리', icon:'🔋' },
            { id:'city-headphones', name:'보라 헤드폰', icon:'🎧' },
            { id:'city-mug', name:'청록 머그컵', icon:'☕' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="네온 옥상 도시">
            <rect width="1000" height="620" fill="#24213b"/>
            <rect y="0" width="1000" height="405" fill="#302849"/>
            <circle cx="866" cy="75" r="35" fill="#d9c4a4"/>
            <g fill="#17182a"><rect x="0" y="178" width="112" height="247"/><rect x="122" y="102" width="151" height="323"/><rect x="286" y="151" width="118" height="274"/><rect x="416" y="74" width="172" height="351"/><rect x="602" y="138" width="126" height="287"/><rect x="742" y="91" width="109" height="334"/><rect x="866" y="163" width="134" height="262"/></g>
            <g fill="#5f9da2" opacity=".75">${Array.from({length:64},(_,i)=>{const blocks=[[0,112,178],[122,151,102],[286,118,151],[416,172,74],[602,126,138],[742,109,91],[866,134,163]]; const b=blocks[i%blocks.length]; const col=(Math.floor(i/blocks.length)%4); const row=Math.floor(i/(blocks.length*4)); const x=b[0]+18+col*25; const y=b[2]+25+row*39; return `<rect x="${x}" y="${y}" width="12" height="18" fill="${['#5ba5a7','#b45d8c','#d2aa58','#6574a5'][i%4]}"/>`;}).join('')}</g>
            <g opacity=".7"><rect x="137" y="139" width="120" height="23" fill="#b65484"/><rect x="443" y="121" width="118" height="24" fill="#4b9ca0"/><rect x="755" y="132" width="84" height="20" fill="#d3ac55"/></g>
    
            <!-- 옥상 -->
            <rect y="405" width="1000" height="215" fill="#42404d"/>
            <rect y="405" width="1000" height="24" fill="#6a6870"/>
            <path d="M0 545h1000" stroke="#2c2c36" stroke-width="10"/>
            <g><rect x="42" y="445" width="187" height="91" fill="#555b65"/><rect x="61" y="463" width="149" height="55" fill="#353d49"/><g stroke="#7c8790" stroke-width="7">${Array.from({length:6},(_,i)=>`<path d="M${75+i*25} 468v45"/>`).join('')}</g></g>
            <g><rect x="750" y="456" width="210" height="83" fill="#555b65"/><circle cx="803" cy="498" r="30" fill="#333b46"/><circle cx="903" cy="498" r="30" fill="#333b46"/><path d="M803 468v60m-30-30h60M903 468v60m-30-30h60" stroke="#7d8a91" stroke-width="6"/></g>
    
            <!-- 정원 -->
            <g><rect x="293" y="484" width="311" height="101" fill="#604d48"/><rect x="307" y="498" width="283" height="73" fill="#405d4b"/><g fill="#5d9a69">${Array.from({length:13},(_,i)=>`<circle cx="${329+i*20}" cy="${505+(i%3)*19}" r="${11+(i%2)*4}"/>`).join('')}</g><g fill="#d0a65a">${Array.from({length:7},(_,i)=>`<circle cx="${346+i*38}" cy="${529+(i%2)*18}" r="5"/>`).join('')}</g></g>
            <g><rect x="627" y="435" width="72" height="146" fill="#50525c"/><rect x="643" y="449" width="40" height="103" fill="#343942"/><path d="M646 462h34M646 483h34M646 504h34M646 525h34" stroke="#6e7780" stroke-width="6"/></g>
            <path d="M0 599h1000" stroke="#2f3038" stroke-width="15"/>
    
            ${hiddenSprite('city-drone','순찰 드론','drone',667,201,{scale:.39,rotate:-7,opacity:.73,hit:148})}
            ${hiddenSprite('city-sneaker','빨간 운동화','sneaker',817,551,{scale:.42,rotate:-11,opacity:.82,hit:142})}
            ${hiddenSprite('city-coin','황금 코인','coin',236,386,{scale:.36,rotate:0,opacity:.74,hit:155})}
            ${hiddenSprite('city-robot','소형 로봇','robot',611,514,{scale:.38,rotate:1,opacity:.8,hit:148})}
            ${hiddenSprite('city-leaf','초록 잎사귀','leaf',443,506,{scale:.39,rotate:24,opacity:.73,hit:148})}
            ${hiddenSprite('city-battery','충전 배터리','battery',153,468,{scale:.38,rotate:0,opacity:.8,hit:145})}
            ${hiddenSprite('city-headphones','보라 헤드폰','headphones',525,348,{scale:.38,rotate:-12,opacity:.73,hit:150})}
            ${hiddenSprite('city-mug','청록 머그컵','mug',903,409,{scale:.4,rotate:7,opacity:.75,hit:146})}
    
            <path d="M10 446C202 420 400 462 573 433s260-24 417 12" fill="none" stroke="#8b5b8e" stroke-width="4" opacity=".7"/>
            <g fill="#d59ac7" opacity=".65">${Array.from({length:19},(_,i)=>`<circle cx="${25+i*53}" cy="${443+Math.sin(i*.7)*17}" r="4"/>`).join('')}</g>
          </svg>`
        }
  );
})();
