(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '궤도 우주정거장',
          difficulty: '어려움',
          desc: '창밖 우주와 복잡한 제어 패널 사이에서 작은 우주 장비를 찾아내세요.',
          time: 105,
          targets: [
            { id:'space-planet', name:'고리 행성', icon:'🪐' },
            { id:'space-satellite', name:'소형 위성', icon:'🛰️' },
            { id:'space-alien', name:'초록 외계인', icon:'👽' },
            { id:'space-glove', name:'우주 장갑', icon:'🧤' },
            { id:'space-crystal', name:'청록 결정', icon:'💎' },
            { id:'space-wrench', name:'은색 렌치', icon:'🔧' },
            { id:'space-battery', name:'예비 배터리', icon:'🔋' },
            { id:'space-star', name:'금빛 별', icon:'⭐' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="궤도 우주정거장">
            <rect width="1000" height="620" fill="#17192a"/>
            <rect x="34" y="35" width="932" height="550" rx="38" fill="#363c4c"/>
            <rect x="61" y="64" width="878" height="493" rx="26" fill="#252b3a"/>
            <g fill="#8b96a2"><rect x="0" y="0" width="1000" height="26"/><rect x="0" y="594" width="1000" height="26"/><rect x="0" y="0" width="27" height="620"/><rect x="973" y="0" width="27" height="620"/></g>
            <g fill="#c0c9cb">${Array.from({length:18},(_,i)=>`<circle cx="${26+(i%9)*118}" cy="${i<9?26:594}" r="6"/>`).join('')}</g>
    
            <!-- 우주 창 -->
            <g>
              <rect x="255" y="86" width="490" height="258" rx="60" fill="#101322" stroke="#606b77" stroke-width="18"/>
              <rect x="278" y="107" width="444" height="216" rx="44" fill="#10152a"/>
              <circle cx="388" cy="242" r="112" fill="#326b89"/>
              <path d="M286 269c62-67 159-89 235-52 38 19 64 48 82 89-99 26-220 7-317-37z" fill="#5eb09f"/>
              <path d="M314 210c52-35 107-45 164-31" fill="none" stroke="#b4d6c4" stroke-width="14" opacity=".62"/>
              <g fill="#e8e8d7"><circle cx="658" cy="139" r="4"/><circle cx="678" cy="186" r="3"/><circle cx="630" cy="269" r="5"/><circle cx="559" cy="132" r="3"/><circle cx="695" cy="288" r="3"/></g>
            </g>
    
            <!-- 패널 -->
            <g>
              <rect x="74" y="92" width="154" height="438" rx="12" fill="#444b5a"/>
              <rect x="91" y="113" width="120" height="90" fill="#1f2c3b"/>
              <g fill="#60b8ae"><rect x="104" y="126" width="44" height="10"/><rect x="104" y="146" width="75" height="10"/><rect x="104" y="166" width="57" height="10"/></g>
              <g>${Array.from({length:12},(_,i)=>`<circle cx="${111+(i%3)*42}" cy="${244+Math.floor(i/3)*52}" r="13" fill="${['#c85c64','#d7b45b','#5ea384','#627ea9'][i%4]}"/>`).join('')}</g>
              <rect x="772" y="92" width="154" height="438" rx="12" fill="#444b5a"/>
              <rect x="789" y="113" width="120" height="112" fill="#1f2c3b"/>
              <path d="M801 200l18-34 21 15 18-43 38 52" fill="none" stroke="#69b9aa" stroke-width="6"/>
              <g fill="#697583"><rect x="794" y="259" width="49" height="70"/><rect x="858" y="259" width="49" height="70"/><rect x="794" y="345" width="113" height="54"/><rect x="794" y="417" width="113" height="91"/></g>
            </g>
    
            <!-- 하부 콘솔 -->
            <g><path d="M238 377h525l58 153H180z" fill="#4c5563"/><rect x="248" y="394" width="502" height="93" fill="#303746"/><g fill="#6d7b86">${Array.from({length:20},(_,i)=>`<rect x="${264+(i%10)*47}" y="${411+Math.floor(i/10)*39}" width="31" height="20"/>`).join('')}</g><g fill="#8fd0bd">${Array.from({length:7},(_,i)=>`<rect x="${278+i*67}" y="419" width="15" height="5"/>`).join('')}</g></g>
    
            ${hiddenSprite('space-planet','고리 행성','planet',602,220,{scale:.46,rotate:-8,opacity:.76,hit:130})}
            ${hiddenSprite('space-satellite','소형 위성','satellite',655,119,{scale:.42,rotate:17,opacity:.76,hit:132})}
            ${hiddenSprite('space-alien','초록 외계인','alien',171,420,{scale:.4,rotate:-3,opacity:.82,hit:132})}
            ${hiddenSprite('space-glove','우주 장갑','glove',698,364,{scale:.43,rotate:29,opacity:.82,hit:136})}
            ${hiddenSprite('space-crystal','청록 결정','crystal',827,429,{scale:.44,rotate:-8,opacity:.88,hit:130})}
            ${hiddenSprite('space-wrench','은색 렌치','wrench',354,424,{scale:.4,rotate:62,opacity:.7,hit:142})}
            ${hiddenSprite('space-battery','예비 배터리','battery',112,274,{scale:.39,rotate:0,opacity:.83,hit:138})}
            ${hiddenSprite('space-star','금빛 별','star',546,118,{scale:.33,rotate:12,opacity:.82,hit:145})}
          </svg>`
        }
  );
})();
