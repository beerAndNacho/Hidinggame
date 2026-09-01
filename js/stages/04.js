(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '눈꽃 산장',
          difficulty: '보통',
          desc: '눈 덮인 산장과 소나무 숲에 섞여 있는 겨울 물건을 찾아보세요.',
          time: 88,
          targets: [
            { id:'winter-mitten', name:'빨간 장갑', icon:'🧤' },
            { id:'winter-bell', name:'황금 종', icon:'🔔' },
            { id:'winter-mug', name:'따뜻한 머그컵', icon:'☕' },
            { id:'winter-scarf', name:'줄무늬 목도리', icon:'🧣' },
            { id:'winter-snowflake', name:'커다란 눈송이', icon:'❄️' },
            { id:'winter-compass', name:'산악 나침반', icon:'🧭' },
            { id:'winter-star', name:'산장의 별', icon:'⭐' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="눈꽃 산장">
            <rect width="1000" height="620" fill="#abcbd8"/>
            <rect y="0" width="1000" height="330" fill="#91b9ce"/>
            <circle cx="858" cy="90" r="45" fill="#f3d49a"/>
            ${pixelCloud(70,66,1.1,'#dbe7e7')} ${pixelCloud(525,42,.8,'#dbe7e7')}
            <polygon points="0,330 185,125 360,330" fill="#718a9d"/>
            <polygon points="205,330 455,70 700,330" fill="#667f92"/>
            <polygon points="535,330 785,120 1000,330" fill="#738ea0"/>
            <polygon points="125,192 185,125 244,192" fill="#eaf3ee"/>
            <polygon points="374,155 455,70 536,155" fill="#f2f7f1"/>
            <polygon points="721,175 785,120 846,176" fill="#edf4ef"/>
            <rect y="318" width="1000" height="302" fill="#dce9e6"/>
            <path d="M0 480C180 420 310 505 465 462s278-40 535 5v153H0z" fill="#c8dddd"/>
            <path d="M0 544c190-42 330 14 510-5s309-42 490-2v83H0z" fill="#b7d0d0"/>
    
            ${pine(-20,250,1.05,'#74513f','#2e5c55','#3c7162')}
            ${pine(82,294,.78,'#74513f','#2f6259','#437969')}
            ${pine(780,245,1.2,'#74513f','#2d5c55','#3d7364')}
            ${pine(900,315,.73,'#74513f','#2e5e56','#42766a')}
            ${pine(692,334,.62,'#74513f','#315f58','#46776a')}
    
            <!-- 산장 -->
            <g>
              <rect x="280" y="302" width="380" height="226" fill="#84563f"/>
              <rect x="299" y="320" width="342" height="208" fill="#a96f4d"/>
              <polygon points="240,326 470,190 704,326" fill="#5b4552"/>
              <polygon points="273,316 470,214 672,316" fill="#714f58"/>
              <path d="M270 302L470 201 680 306" fill="none" stroke="#edf5ee" stroke-width="23"/>
              <rect x="544" y="238" width="43" height="79" fill="#665052"/>
              <rect x="380" y="397" width="83" height="131" fill="#65483f"/>
              <rect x="392" y="410" width="59" height="118" fill="#4d3c40"/>
              <circle cx="440" cy="467" r="5" fill="#e6c774"/>
              <rect x="503" y="366" width="88" height="69" fill="#315c70"/>
              <rect x="512" y="375" width="70" height="51" fill="#8fc0c6"/>
              <path d="M547 375v51M512 400h70" stroke="#315c70" stroke-width="6"/>
              <rect x="280" y="519" width="380" height="15" fill="#6b4a40"/>
              <rect x="258" y="531" width="425" height="22" fill="#edf5ef"/>
              <path d="M301 335h334" stroke="#c28b5f" stroke-width="6" stroke-dasharray="28 12"/>
            </g>
    
            <!-- 눈사람과 썰매 -->
            <g transform="translate(708 405)">
              <circle cx="51" cy="83" r="49" fill="#e9f1ed"/><circle cx="51" cy="23" r="34" fill="#f4f7f2"/>
              <circle cx="40" cy="17" r="4" fill="#3b4650"/><circle cx="61" cy="17" r="4" fill="#3b4650"/>
              <polygon points="51,25 82,33 51,39" fill="#d98743"/>
              <circle cx="51" cy="69" r="5" fill="#4a5057"/><circle cx="51" cy="89" r="5" fill="#4a5057"/><circle cx="51" cy="109" r="5" fill="#4a5057"/>
              <path d="M8 66L-28 42M94 66l36-24" stroke="#72533f" stroke-width="8"/>
            </g>
            <g transform="translate(805 520)">
              <path d="M0 48h130c20 0 25-9 30-24" fill="none" stroke="#855e48" stroke-width="10"/>
              <path d="M16 0v45m94-45v45M7 4h112" stroke="#a87551" stroke-width="10"/>
            </g>
    
            ${hiddenSprite('winter-mitten','빨간 장갑','mitten',218,360,{scale:.55,rotate:-12,hit:105})}
            ${hiddenSprite('winter-bell','황금 종','bell',618,319,{scale:.48,rotate:4,hit:110})}
            ${hiddenSprite('winter-mug','따뜻한 머그컵','mug',518,435,{scale:.48,rotate:-2,hit:112})}
            ${hiddenSprite('winter-scarf','줄무늬 목도리','scarf',735,440,{scale:.48,rotate:7,hit:112})}
            ${hiddenSprite('winter-snowflake','커다란 눈송이','snowflake',112,168,{scale:.5,opacity:.82,hit:120})}
            ${hiddenSprite('winter-compass','산악 나침반','compass',885,522,{scale:.43,rotate:12,hit:122})}
            ${hiddenSprite('winter-star','산장의 별','star',907,184,{scale:.38,rotate:-7,opacity:.86,hit:128})}
    
            <!-- 눈발 -->
            <g fill="#f4faf7" opacity=".78">
              ${Array.from({length:32},(_,i)=>`<rect x="${(i*83)%970}" y="${34+(i*71)%470}" width="${i%3===0?7:4}" height="${i%3===0?7:4}"/>`).join('')}
            </g>
          </svg>`
        }
  );
})();
