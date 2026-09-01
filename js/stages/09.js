(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '황금 사막 유적',
          difficulty: '어려움',
          desc: '모래바람에 반쯤 묻힌 유적과 탐사 캠프에서 고대 유물을 찾으세요.',
          time: 108,
          targets: [
            { id:'desert-scarab', name:'청록 풍뎅이', icon:'🪲' },
            { id:'desert-flask', name:'탐사용 플라스크', icon:'⚗️' },
            { id:'desert-snake', name:'초록 뱀', icon:'🐍' },
            { id:'desert-lantern', name:'고대 등불', icon:'🏮' },
            { id:'desert-map', name:'낡은 지도', icon:'🗺️' },
            { id:'desert-crown', name:'파라오 왕관', icon:'👑' },
            { id:'desert-eye', name:'수호자의 눈', icon:'👁️' },
            { id:'desert-compass', name:'모래 나침반', icon:'🧭' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="황금 사막 유적">
            <rect width="1000" height="620" fill="#e5ad62"/>
            <rect y="0" width="1000" height="330" fill="#d98e61"/>
            <circle cx="835" cy="93" r="61" fill="#f4d178"/>
            <path d="M0 315c154-58 298-46 429 5 128 50 260 50 571-13v313H0z" fill="#d8a45d"/>
            <path d="M0 440c182-80 351-53 479 14 137 72 309 36 521-31v197H0z" fill="#c98e50"/>
            <path d="M0 543c185-42 345 12 526-1 202-14 322-48 474-9v87H0z" fill="#b97d4b"/>
            <g fill="#8b6354" opacity=".65"><polygon points="62,292 175,188 285,292"/><polygon points="748,300 837,219 930,300"/></g>
    
            <!-- 신전 -->
            <g>
              <rect x="285" y="197" width="432" height="264" fill="#a97854"/>
              <polygon points="255,205 501,84 747,205" fill="#b98459"/>
              <polygon points="298,192 501,111 704,192" fill="#c59763"/>
              <rect x="323" y="226" width="54" height="235" fill="#c09563"/><rect x="625" y="226" width="54" height="235" fill="#c09563"/>
              <g fill="#d0aa72"><rect x="313" y="215" width="74" height="25"/><rect x="615" y="215" width="74" height="25"/><rect x="313" y="446" width="74" height="20"/><rect x="615" y="446" width="74" height="20"/></g>
              <rect x="407" y="240" width="188" height="221" fill="#6e5048"/>
              <path d="M446 461V331c0-50 25-77 55-77s55 27 55 77v130z" fill="#403d43"/>
              <g fill="#8f664e"><rect x="270" y="461" width="462" height="28"/><rect x="246" y="489" width="510" height="24"/><rect x="218" y="513" width="566" height="25"/></g>
              <path d="M501 113v74M463 151h76" stroke="#8f674e" stroke-width="8"/>
            </g>
    
            <!-- 탐사 캠프 -->
            <g><polygon points="32,475 157,351 282,475" fill="#66505b"/><polygon points="62,470 157,380 249,470" fill="#8d6460"/><rect x="145" y="403" width="24" height="72" fill="#3e3b43"/><rect x="23" y="475" width="267" height="18" fill="#6d4b43"/></g>
            <g><rect x="806" y="455" width="145" height="85" fill="#80583f"/><path d="M816 465l125 65m0-65-125 65" stroke="#5e4239" stroke-width="9"/><rect x="851" y="405" width="55" height="50" fill="#9a6d4b"/></g>
    
            <!-- 야자수·조각상 -->
            <g transform="translate(83 246)"><path d="M80 68c-23 82-20 169-4 244" fill="none" stroke="#7a5640" stroke-width="18"/><path d="M80 72C33 38 2 53 0 78c37 8 61 7 80-6zm0 0c34-45 72-45 91-21-23 25-49 32-91 21zm0 0c4-49-19-72-43-68-3 30 9 53 43 68z" fill="#5f7750"/></g>
            <g transform="translate(752 307)"><rect x="36" y="75" width="54" height="137" fill="#a77b58"/><path d="M22 78h82l-9-48-32-28-32 28z" fill="#b78b62"/><rect x="16" y="210" width="94" height="24" fill="#8c634d"/><circle cx="50" cy="46" r="5" fill="#3e3b42"/><circle cx="75" cy="46" r="5" fill="#3e3b42"/></g>
    
            ${hiddenSprite('desert-scarab','청록 풍뎅이','scarab',660,279,{scale:.39,rotate:8,opacity:.82,hit:140})}
            ${hiddenSprite('desert-flask','탐사용 플라스크','flask',196,458,{scale:.43,rotate:-5,opacity:.84,hit:135})}
            ${hiddenSprite('desert-snake','초록 뱀','snake',786,520,{scale:.48,rotate:15,opacity:.76,hit:130})}
            ${hiddenSprite('desert-lantern','고대 등불','lantern',426,369,{scale:.42,rotate:0,opacity:.78,hit:138})}
            ${hiddenSprite('desert-map','낡은 지도','map',835,430,{scale:.43,rotate:11,opacity:.84,hit:135})}
            ${hiddenSprite('desert-crown','파라오 왕관','crown',749,295,{scale:.38,rotate:-4,opacity:.82,hit:145})}
            ${hiddenSprite('desert-eye','수호자의 눈','eye',467,157,{scale:.4,rotate:0,opacity:.72,hit:145})}
            ${hiddenSprite('desert-compass','모래 나침반','compass',70,516,{scale:.43,rotate:-20,opacity:.73,hit:142})}
    
            <g fill="#f1c77d" opacity=".45">${Array.from({length:30},(_,i)=>`<rect x="${(i*113)%990}" y="${60+(i*47)%500}" width="${2+(i%4)}" height="2"/>`).join('')}</g>
          </svg>`
        }
  );
})();
