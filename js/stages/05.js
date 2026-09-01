(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '심해 연구소',
          difficulty: '보통',
          desc: '잠수 연구소와 산호 군락 사이에서 빛과 형태가 비슷한 물건을 구별하세요.',
          time: 92,
          targets: [
            { id:'sea-pearl', name:'빛나는 진주', icon:'⚪' },
            { id:'sea-wrench', name:'정비용 렌치', icon:'🔧' },
            { id:'sea-starfish', name:'주황 불가사리', icon:'⭐' },
            { id:'sea-battery', name:'초록 배터리', icon:'🔋' },
            { id:'sea-jelly', name:'보라 해파리', icon:'🪼' },
            { id:'sea-shell', name:'분홍 조개', icon:'🐚' },
            { id:'sea-key', name:'침몰한 열쇠', icon:'🗝️' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="심해 연구소">
            <defs>
              <linearGradient id="seaBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#287f91"/><stop offset=".5" stop-color="#155d72"/><stop offset="1" stop-color="#123c58"/></linearGradient>
            </defs>
            <rect width="1000" height="620" fill="url(#seaBg)"/>
            <path d="M0 0h1000v95c-130 22-250-18-378 2S345 128 201 97 62 75 0 93z" fill="#69b8b1" opacity=".27"/>
            <g opacity=".2" fill="#a7ebe0">
              <polygon points="80,0 160,0 330,620 220,620"/><polygon points="430,0 500,0 580,620 500,620"/><polygon points="760,0 820,0 705,620 620,620"/>
            </g>
            <path d="M0 521c120-31 216 14 325-12 143-34 269 22 391-5 110-24 182-13 284 9v107H0z" fill="#315b5e"/>
            <path d="M0 566c152-22 277 28 435 2 174-29 335 13 565-4v56H0z" fill="#294b51"/>
    
            <!-- 연구소 -->
            <g>
              <path d="M280 432V322c0-114 87-190 194-190s194 76 194 190v110z" fill="#65848d"/>
              <path d="M308 424V326c0-96 72-162 166-162s166 66 166 162v98z" fill="#325e70"/>
              <path d="M340 314c15-78 65-118 134-118s119 40 134 118z" fill="#7cc5c3" opacity=".78"/>
              <path d="M360 304c17-52 57-78 114-78s97 26 114 78z" fill="#a8e0d7" opacity=".34"/>
              <rect x="331" y="322" width="286" height="102" fill="#486f79"/>
              <rect x="361" y="346" width="68" height="51" fill="#224757"/><rect x="447" y="346" width="68" height="51" fill="#224757"/><rect x="533" y="346" width="55" height="51" fill="#224757"/>
              <g fill="#72c6bd"><rect x="371" y="356" width="48" height="31"/><rect x="457" y="356" width="48" height="31"/><rect x="543" y="356" width="35" height="31"/></g>
              <path d="M474 132v-53M452 82h44" stroke="#78959d" stroke-width="12"/><circle cx="474" cy="67" r="14" fill="#dbb85f"/>
              <rect x="252" y="414" width="445" height="37" fill="#4f6970"/>
              <path d="M284 451v89m382-89v89" stroke="#465d64" stroke-width="22"/>
              <path d="M260 367H172V250h-53" fill="none" stroke="#6f8c91" stroke-width="26"/>
              <path d="M688 348h95v-86h96" fill="none" stroke="#6f8c91" stroke-width="24"/>
              <g fill="#a6bdba"><circle cx="174" cy="367" r="10"/><circle cx="783" cy="348" r="10"/></g>
            </g>
    
            <!-- 해초·산호 -->
            <g fill="none" stroke-linecap="round">
              <path d="M80 578c-4-85 22-120 12-173m-5 90-29-38m34-3 25-43" stroke="#4f9776" stroke-width="14"/>
              <path d="M188 592c9-78-23-108-5-164m4 77 32-36m-36-5-24-34" stroke="#3e8871" stroke-width="13"/>
              <path d="M854 595c-10-94 25-131 15-190m-3 93-32-39m39-14 27-37" stroke="#4d9675" stroke-width="15"/>
              <path d="M940 590c7-62-15-96-3-138m0 62 24-28m-26-8-22-26" stroke="#3e846e" stroke-width="12"/>
            </g>
            <g fill="#b45b71"><rect x="109" y="520" width="18" height="82"/><rect x="88" y="541" width="28" height="15"/><rect x="126" y="552" width="29" height="15"/></g>
            <g fill="#d17a5f"><rect x="755" y="538" width="17" height="65"/><rect x="731" y="558" width="29" height="14"/><rect x="772" y="570" width="28" height="14"/></g>
    
            <!-- 물고기 -->
            <g fill="#7fc3bd" opacity=".78"><path d="M98 215l43-20v40z"/><ellipse cx="159" cy="215" rx="28" ry="16"/><path d="M842 178l-39-19v38z"/><ellipse cx="785" cy="178" rx="26" ry="15"/></g>
            <g fill="#efc671" opacity=".72"><path d="M228 110l33-16v32z"/><ellipse cx="277" cy="110" rx="23" ry="13"/></g>
    
            ${hiddenSprite('sea-pearl','빛나는 진주','pearl',72,499,{scale:.5,rotate:-5,hit:125})}
            ${hiddenSprite('sea-wrench','정비용 렌치','wrench',426,423,{scale:.46,rotate:23,opacity:.83,hit:130})}
            ${hiddenSprite('sea-starfish','주황 불가사리','starfish',695,539,{scale:.48,rotate:-14,hit:126})}
            ${hiddenSprite('sea-battery','초록 배터리','battery',541,350,{scale:.42,rotate:0,opacity:.86,hit:128})}
            ${hiddenSprite('sea-jelly','보라 해파리','jellyfish',814,111,{scale:.55,rotate:3,opacity:.75,hit:118})}
            ${hiddenSprite('sea-shell','분홍 조개','shell',288,538,{scale:.5,rotate:8,hit:124})}
            ${hiddenSprite('sea-key','침몰한 열쇠','key',884,418,{scale:.45,rotate:72,opacity:.76,hit:130})}
    
            <g fill="#b4e7db" opacity=".53">
              ${Array.from({length:26},(_,i)=>`<circle cx="${42+(i*97)%930}" cy="${35+(i*73)%500}" r="${3+(i%4)}"/>`).join('')}
            </g>
          </svg>`
        }
  );
})();
