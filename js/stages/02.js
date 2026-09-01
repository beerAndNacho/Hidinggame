(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '달빛 야시장',
          desc: '화려한 천막과 좌판 사이에 숨은 일상 물건을 찾아보세요.',
          time: 80,
          targets: [
            { id:'camera', name:'작은 카메라', icon:'📷' },
            { id:'apple', name:'빨간 사과', icon:'🍎' },
            { id:'spoon', name:'은색 숟가락', icon:'🥄' },
            { id:'ticket', name:'노란 표', icon:'🎟️' },
            { id:'robot', name:'장난감 로봇', icon:'🤖' },
            { id:'fish', name:'파란 물고기', icon:'🐟' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="달빛 야시장">
            <rect width="1000" height="620" fill="#302a58"/>
            <rect y="0" width="1000" height="235" fill="#494174"/>
            <rect y="235" width="1000" height="385" fill="#6d5270"/>
            <circle cx="865" cy="72" r="38" fill="#f5daa0"/>
            <rect x="843" y="52" width="17" height="10" fill="#fff0bf"/>
            ${pixelCloud(80,50,.75,'#6d648f')} ${pixelCloud(520,83,.55,'#756c99')}
    
            <!-- Distant city -->
            <g fill="#292440">
              <rect x="0" y="150" width="90" height="125"/><rect x="95" y="180" width="70" height="95"/>
              <rect x="170" y="130" width="110" height="145"/><rect x="290" y="185" width="75" height="90"/>
              <rect x="375" y="145" width="120" height="130"/><rect x="505" y="175" width="80" height="100"/>
              <rect x="595" y="138" width="95" height="137"/><rect x="700" y="170" width="74" height="105"/>
              <rect x="785" y="145" width="95" height="130"/><rect x="890" y="182" width="110" height="93"/>
            </g>
            <g fill="#e5b65e" opacity=".7">
              <rect x="20" y="177" width="10" height="13"/><rect x="49" y="207" width="10" height="13"/>
              <rect x="197" y="158" width="11" height="13"/><rect x="238" y="195" width="11" height="13"/>
              <rect x="406" y="175" width="11" height="13"/><rect x="449" y="205" width="11" height="13"/>
              <rect x="621" y="165" width="11" height="13"/><rect x="665" y="210" width="11" height="13"/>
              <rect x="809" y="173" width="11" height="13"/><rect x="846" y="205" width="11" height="13"/>
            </g>
    
            <!-- String lights -->
            <path d="M0 120 Q250 220 500 120 T1000 120" fill="none" stroke="#1f1b35" stroke-width="6"/>
            <g fill="#ffd56a">
              <rect x="67" y="142" width="13" height="19"/><rect x="177" y="165" width="13" height="19"/>
              <rect x="292" y="164" width="13" height="19"/><rect x="405" y="139" width="13" height="19"/>
              <rect x="513" y="126" width="13" height="19"/><rect x="628" y="143" width="13" height="19"/>
              <rect x="741" y="166" width="13" height="19"/><rect x="854" y="161" width="13" height="19"/>
              <rect x="958" y="132" width="13" height="19"/>
            </g>
    
            <!-- Ground -->
            <polygon points="0,430 1000,390 1000,620 0,620" fill="#4e3e5b"/>
            <path d="M0 560 L1000 510" stroke="#7d6581" stroke-width="9" opacity=".45"/>
            <path d="M0 470 L1000 430" stroke="#7d6581" stroke-width="5" opacity=".35"/>
    
            <!-- Left fruit stall -->
            <g>
              <rect x="25" y="300" width="295" height="225" fill="#49354d"/>
              <rect x="38" y="365" width="270" height="155" fill="#7d4e48"/>
              <polygon points="10,315 335,315 292,240 55,240" fill="#b95362"/>
              <polygon points="55,240 292,240 313,277 32,277" fill="#e08a62"/>
              <g fill="#f4d27e"><rect x="58" y="385" width="72" height="55"/><rect x="145" y="385" width="72" height="55"/><rect x="232" y="385" width="55" height="55"/></g>
              <g fill="#d75b57">
                <rect x="66" y="394" width="15" height="15"/><rect x="88" y="402" width="15" height="15"/><rect x="108" y="391" width="15" height="15"/>
                <rect x="153" y="399" width="15" height="15"/><rect x="178" y="390" width="15" height="15"/><rect x="198" y="405" width="15" height="15"/>
              </g>
              <g fill="#76a05a"><rect x="239" y="393" width="16" height="16"/><rect x="263" y="407" width="16" height="16"/><rect x="254" y="384" width="16" height="16"/></g>
              <rect x="50" y="458" width="245" height="45" fill="#5b3c45"/>
            </g>
    
            <!-- Hidden apple blending into fruit -->
            <g class="hidden-object" data-object="apple" transform="translate(188 372)" role="button" aria-label="빨간 사과">
              <rect x="0" y="9" width="30" height="29" fill="#e34e52"/>
              <rect x="5" y="4" width="21" height="34" fill="#e34e52"/>
              <rect x="14" y="0" width="5" height="9" fill="#5a4a31"/>
              <rect x="19" y="1" width="11" height="6" fill="#5d9b55"/>
              <rect x="-15" y="-15" width="65" height="70" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Center noodle stall -->
            <g>
              <rect x="338" y="280" width="322" height="270" fill="#3e334a"/>
              <rect x="355" y="355" width="288" height="178" fill="#6b4948"/>
              <polygon points="318,302 680,302 642,225 360,225" fill="#e5a84f"/>
              <polygon points="360,225 642,225 661,264 340,264" fill="#f3cf67"/>
              <rect x="397" y="323" width="201" height="20" fill="#312b43"/>
              <rect x="411" y="330" width="30" height="12" fill="#d96461"/>
              <rect x="452" y="330" width="30" height="12" fill="#68b29a"/>
              <rect x="493" y="330" width="30" height="12" fill="#e5b953"/>
              <rect x="534" y="330" width="30" height="12" fill="#7c75ac"/>
              <g>
                <rect x="410" y="394" width="75" height="50" fill="#d9c49a"/>
                <rect x="422" y="384" width="51" height="13" fill="#f1e0bb"/>
                <rect x="500" y="394" width="75" height="50" fill="#d9c49a"/>
                <rect x="512" y="384" width="51" height="13" fill="#f1e0bb"/>
                <rect x="590" y="394" width="40" height="50" fill="#d9c49a"/>
              </g>
              <rect x="376" y="470" width="248" height="42" fill="#4a3542"/>
            </g>
    
            <!-- Hidden spoon beside bowls -->
            <g class="hidden-object" data-object="spoon" transform="translate(575 370) rotate(18)" role="button" aria-label="은색 숟가락">
              <rect x="11" y="26" width="8" height="45" fill="#c7c7c9"/>
              <rect x="2" y="0" width="26" height="31" fill="#d9d9d9"/>
              <rect x="7" y="5" width="16" height="21" fill="#b6b6bb"/>
              <rect x="-16" y="-16" width="65" height="105" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden ticket on counter -->
            <g class="hidden-object" data-object="ticket" transform="translate(365 457) rotate(-4)" role="button" aria-label="노란 표">
              <rect x="0" y="0" width="55" height="27" fill="#efd16e"/>
              <rect x="7" y="6" width="20" height="4" fill="#9b6e61"/>
              <rect x="7" y="15" width="34" height="4" fill="#9b6e61"/>
              <rect x="-15" y="-16" width="85" height="60" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Right toy stall -->
            <g>
              <rect x="680" y="305" width="295" height="230" fill="#3c354e"/>
              <rect x="697" y="370" width="260" height="150" fill="#5f4663"/>
              <polygon points="657,322 995,322 952,248 700,248" fill="#5b8f9e"/>
              <polygon points="700,248 952,248 974,282 678,282" fill="#79b6b5"/>
              <rect x="720" y="393" width="213" height="17" fill="#352e45"/>
              <g>
                <rect x="722" y="425" width="52" height="58" fill="#916f87"/>
                <rect x="790" y="425" width="52" height="58" fill="#916f87"/>
                <rect x="858" y="425" width="52" height="58" fill="#916f87"/>
              </g>
              <g fill="#e5b65e"><rect x="733" y="437" width="29" height="18"/><rect x="800" y="437" width="29" height="18"/><rect x="868" y="437" width="29" height="18"/></g>
            </g>
    
            <!-- Hidden robot among toys -->
            <g class="hidden-object" data-object="robot" transform="translate(800 404)" role="button" aria-label="장난감 로봇">
              <rect x="7" y="0" width="37" height="30" fill="#7fa6aa"/>
              <rect x="0" y="31" width="51" height="42" fill="#8fb8b6"/>
              <rect x="13" y="8" width="7" height="7" fill="#f0d36c"/><rect x="31" y="8" width="7" height="7" fill="#f0d36c"/>
              <rect x="15" y="20" width="21" height="5" fill="#3f3a4f"/>
              <rect x="-10" y="39" width="10" height="25" fill="#6f9298"/><rect x="51" y="39" width="10" height="25" fill="#6f9298"/>
              <rect x="8" y="73" width="12" height="12" fill="#567780"/><rect x="31" y="73" width="12" height="12" fill="#567780"/>
              <rect x="23" y="-10" width="5" height="11" fill="#5b5366"/><rect x="20" y="-15" width="11" height="7" fill="#e16a65"/>
              <rect x="-22" y="-24" width="96" height="126" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Cat vendor silhouette -->
            <g transform="translate(850 310)">
              <rect x="0" y="25" width="55" height="68" fill="#2f2a42"/>
              <rect x="6" y="8" width="43" height="42" fill="#2f2a42"/>
              <polygon points="6,12 10,0 20,12" fill="#2f2a42"/>
              <polygon points="37,12 47,0 49,16" fill="#2f2a42"/>
              <rect x="16" y="24" width="7" height="6" fill="#e8d266"/><rect x="34" y="24" width="7" height="6" fill="#e8d266"/>
            </g>
    
            <!-- Camera hanging from awning -->
            <g class="hidden-object" data-object="camera" transform="translate(295 279) rotate(5)" role="button" aria-label="작은 카메라">
              <rect x="0" y="10" width="57" height="38" fill="#3b3948"/>
              <rect x="8" y="4" width="19" height="10" fill="#4c4a59"/>
              <rect x="19" y="17" width="24" height="24" fill="#242333"/>
              <rect x="25" y="22" width="12" height="12" fill="#78a6ad"/>
              <rect x="47" y="15" width="6" height="7" fill="#d46161"/>
              <path d="M4 11 Q28 -15 54 8" fill="none" stroke="#2a2936" stroke-width="5"/>
              <rect x="-17" y="-25" width="90" height="92" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Aquarium and hidden fish -->
            <g>
              <rect x="73" y="455" width="170" height="92" fill="#315c70"/>
              <rect x="83" y="465" width="150" height="68" fill="#5aa5ae"/>
              <rect x="83" y="519" width="150" height="14" fill="#d8b071"/>
              <rect x="95" y="495" width="8" height="8" fill="#dff2e8" opacity=".65"/>
              <rect x="210" y="479" width="7" height="7" fill="#dff2e8" opacity=".65"/>
            </g>
            <g class="hidden-object" data-object="fish" transform="translate(135 475)" role="button" aria-label="파란 물고기">
              <rect x="0" y="8" width="43" height="26" fill="#3e7fb5"/>
              <polygon points="43,9 63,0 63,42 43,32" fill="#376c9b"/>
              <rect x="8" y="14" width="6" height="6" fill="#f0e3a5"/>
              <rect x="10" y="15" width="3" height="3" fill="#20243b"/>
              <rect x="-17" y="-15" width="98" height="73" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Foreground crates and clutter -->
            <g>
              <rect x="287" y="525" width="115" height="70" fill="#8a5c48"/><rect x="297" y="535" width="95" height="50" fill="#a87352"/>
              <path d="M300 537 L390 583 M390 537 L300 583" stroke="#755044" stroke-width="8"/>
              <rect x="610" y="530" width="110" height="65" fill="#76505a"/><rect x="620" y="540" width="90" height="45" fill="#95646b"/>
              <rect x="920" y="535" width="68" height="60" fill="#70504e"/>
            </g>
          </svg>`
        }
  );
})();
