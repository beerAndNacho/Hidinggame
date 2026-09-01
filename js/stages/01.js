(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '반딧불 마법 숲',
          desc: '나무, 오두막, 개울 사이에 자연스럽게 섞인 물건을 찾으세요.',
          time: 75,
          targets: [
            { id:'key', name:'황금 열쇠', icon:'🗝️' },
            { id:'potion', name:'보라 물약', icon:'🧪' },
            { id:'crown', name:'작은 왕관', icon:'👑' },
            { id:'star', name:'노란 별', icon:'⭐' },
            { id:'gem', name:'푸른 보석', icon:'💎' },
            { id:'snail', name:'달팽이', icon:'🐌' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="반딧불 마법 숲">
            <rect width="1000" height="620" fill="#8fd3c7"/>
            <rect y="0" width="1000" height="270" fill="#8fc6d1"/>
            ${pixelCloud(76,66,1.25)} ${pixelCloud(620,42,.95,'#f3e8c8')}
            <circle cx="870" cy="92" r="42" fill="#f5cf67"/>
            <rect x="842" y="70" width="20" height="12" fill="#ffe599" opacity=".8"/>
            <polygon points="0,270 150,145 290,270" fill="#607d6e"/>
            <polygon points="145,270 335,115 535,270" fill="#557568"/>
            <polygon points="440,270 640,155 805,270" fill="#648678"/>
            <polygon points="680,270 845,120 1000,260 1000,300" fill="#4e7065"/>
            <polygon points="285,156 335,115 382,160" fill="#d7e7da"/>
            <polygon points="800,160 845,120 890,163" fill="#d7e7da"/>
            <rect y="250" width="1000" height="370" fill="#6c9a58"/>
            <rect y="283" width="1000" height="337" fill="#5f8d4e"/>
            <path d="M 630 318 C 720 350, 690 440, 780 475 C 860 505, 905 520, 1000 530 L1000 620 L720 620 C700 545 650 520 622 470 C590 414 580 365 630 318Z" fill="#4f9fa9"/>
            <path d="M 646 326 C 720 360, 692 426, 773 459" fill="none" stroke="#91ddd0" stroke-width="13"/>
            <rect x="0" y="514" width="720" height="106" fill="#527c43"/>
            <rect x="0" y="552" width="1000" height="68" fill="#466d3c"/>
    
            ${tree(-35,205,1.35,'#39754b','#285b45')}
            ${tree(112,225,1.05,'#3f7d50','#2f664a')}
            ${tree(820,215,1.3,'#3d7b50','#2b6148')}
            ${tree(720,265,.77,'#4b8551','#33694a')}
    
            <!-- Cottage -->
            <g>
              <rect x="350" y="300" width="230" height="185" fill="#9d6c4b"/>
              <rect x="365" y="320" width="200" height="165" fill="#bd8358"/>
              <polygon points="315,330 465,215 620,330" fill="#5b4050"/>
              <polygon points="338,323 465,238 590,323" fill="#75475a"/>
              <rect x="515" y="255" width="38" height="68" fill="#6d4a42"/>
              <rect x="415" y="388" width="70" height="97" fill="#6c453b"/>
              <rect x="427" y="402" width="47" height="83" fill="#4d3540"/>
              <rect x="438" y="438" width="7" height="7" fill="#e8c96f"/>
              <rect x="505" y="355" width="46" height="48" fill="#31556b"/>
              <rect x="511" y="361" width="34" height="36" fill="#83cad0"/>
              <rect x="526" y="361" width="4" height="36" fill="#31556b"/>
              <rect x="511" y="376" width="34" height="4" fill="#31556b"/>
              <rect x="350" y="470" width="230" height="15" fill="#704c3e"/>
              <rect x="310" y="482" width="310" height="18" fill="#4a6f3d"/>
            </g>
    
            <!-- Owl -->
            <g transform="translate(516 278)">
              <rect x="0" y="17" width="42" height="42" fill="#8a624b"/>
              <rect x="5" y="7" width="13" height="15" fill="#8a624b"/>
              <rect x="25" y="7" width="13" height="15" fill="#8a624b"/>
              <rect x="6" y="22" width="12" height="12" fill="#e9d69d"/>
              <rect x="25" y="22" width="12" height="12" fill="#e9d69d"/>
              <rect x="10" y="25" width="5" height="5" fill="#252238"/>
              <rect x="29" y="25" width="5" height="5" fill="#252238"/>
              <rect x="19" y="34" width="7" height="6" fill="#e5a04e"/>
              <rect x="9" y="54" width="8" height="8" fill="#5b403c"/>
              <rect x="27" y="54" width="8" height="8" fill="#5b403c"/>
            </g>
    
            <!-- Hidden crown on owl -->
            <g class="hidden-object" data-object="crown" transform="translate(520 270)" role="button" aria-label="작은 왕관">
              <rect x="0" y="10" width="36" height="9" fill="#e5b941"/>
              <rect x="3" y="4" width="7" height="9" fill="#f1ce58"/>
              <rect x="15" y="0" width="7" height="13" fill="#f1ce58"/>
              <rect x="27" y="4" width="7" height="9" fill="#f1ce58"/>
              <rect x="-7" y="-7" width="50" height="36" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden star among leaves -->
            <g class="hidden-object" data-object="star" transform="translate(150 246)" role="button" aria-label="노란 별">
              <polygon points="16,0 21,11 34,12 24,20 27,33 16,26 5,33 8,20 -2,12 11,11" fill="#f0ce58"/>
              <rect x="-10" y="-10" width="55" height="55" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden key on branch -->
            <g class="hidden-object" data-object="key" transform="translate(250 352) rotate(8)" role="button" aria-label="황금 열쇠">
              <rect x="0" y="8" width="52" height="8" fill="#d7a841"/>
              <rect x="38" y="14" width="8" height="13" fill="#d7a841"/>
              <rect x="48" y="14" width="8" height="9" fill="#d7a841"/>
              <rect x="-13" y="0" width="23" height="23" fill="#d7a841"/>
              <rect x="-7" y="6" width="11" height="11" fill="#5b7b48"/>
              <rect x="-22" y="-12" width="90" height="52" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Logs and snail -->
            <g>
              <rect x="120" y="505" width="200" height="38" fill="#704638"/>
              <rect x="130" y="513" width="183" height="13" fill="#905c42"/>
              <rect x="105" y="505" width="28" height="38" fill="#5f3c35"/>
              <rect x="113" y="513" width="12" height="22" fill="#9d7456"/>
            </g>
            <g class="hidden-object" data-object="snail" transform="translate(245 487)" role="button" aria-label="달팽이">
              <rect x="0" y="20" width="48" height="16" fill="#b58762"/>
              <rect x="7" y="6" width="29" height="29" fill="#71515a"/>
              <rect x="13" y="12" width="17" height="17" fill="#b17e65"/>
              <rect x="20" y="17" width="10" height="7" fill="#71515a"/>
              <rect x="40" y="7" width="4" height="16" fill="#b58762"/>
              <rect x="49" y="5" width="4" height="18" fill="#b58762"/>
              <rect x="39" y="4" width="8" height="5" fill="#302b43"/>
              <rect x="48" y="2" width="8" height="5" fill="#302b43"/>
              <rect x="-12" y="-10" width="82" height="58" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Rocks -->
            <g fill="#6f7d73">
              <rect x="585" y="492" width="61" height="30"/><rect x="602" y="477" width="30" height="20" fill="#87978a"/>
              <rect x="745" y="518" width="75" height="35"/><rect x="767" y="499" width="31" height="22" fill="#87978a"/>
              <rect x="895" y="458" width="70" height="34"/><rect x="916" y="442" width="32" height="20" fill="#87978a"/>
            </g>
    
            <!-- Hidden gem in water -->
            <g class="hidden-object" data-object="gem" transform="translate(748 475)" role="button" aria-label="푸른 보석">
              <polygon points="18,0 38,12 31,36 6,36 0,13" fill="#48b8c6"/>
              <polygon points="18,0 25,13 13,13" fill="#a6f0e5"/>
              <polygon points="0,13 13,13 6,36" fill="#3194aa"/>
              <polygon points="25,13 38,12 31,36" fill="#267d9d"/>
              <rect x="-18" y="-17" width="75" height="72" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden potion among flowers -->
            <g class="hidden-object" data-object="potion" transform="translate(631 520)" role="button" aria-label="보라 물약">
              <rect x="14" y="0" width="20" height="11" fill="#d8c3a7"/>
              <rect x="17" y="10" width="14" height="9" fill="#6a506e"/>
              <rect x="5" y="18" width="40" height="39" fill="#75508f"/>
              <rect x="0" y="27" width="50" height="22" fill="#75508f"/>
              <rect x="7" y="24" width="8" height="20" fill="#b882c0"/>
              <rect x="-14" y="-14" width="78" height="86" fill="transparent" pointer-events="all"/>
            </g>
    
            ${flower(52,485,'#e97386')} ${flower(335,515,'#e8bf5e')} ${flower(305,462,'#a678be')}
            ${flower(555,520,'#e87576')} ${flower(680,533,'#d5a0d0')} ${flower(836,470,'#f0ca65')}
            ${flower(948,510,'#ec7c91')} ${flower(390,532,'#7dc9c0')}
    
            <!-- Fireflies -->
            <g fill="#fff0a2" opacity=".9">
              <rect x="94" y="405" width="7" height="7"/><rect x="205" y="441" width="7" height="7"/>
              <rect x="591" y="419" width="7" height="7"/><rect x="699" y="391" width="7" height="7"/>
              <rect x="850" y="355" width="7" height="7"/><rect x="935" y="402" width="7" height="7"/>
            </g>
            <g fill="#f8d06c" opacity=".35">
              <rect x="87" y="398" width="21" height="21"/><rect x="584" y="412" width="21" height="21"/>
              <rect x="928" y="395" width="21" height="21"/>
            </g>
          </svg>`
        }
  );
})();
