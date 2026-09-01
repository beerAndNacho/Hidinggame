(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '해적단의 비밀 항구',
          desc: '배, 상자, 등대와 파도 사이에 숨은 해적 도구를 찾아보세요.',
          time: 85,
          targets: [
            { id:'compass', name:'나침반', icon:'🧭' },
            { id:'anchor', name:'작은 닻', icon:'⚓' },
            { id:'bottle', name:'유리병', icon:'🍾' },
            { id:'map', name:'보물 지도', icon:'🗺️' },
            { id:'shell', name:'조개껍데기', icon:'🐚' },
            { id:'feather', name:'붉은 깃털', icon:'🪶' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="해적단의 비밀 항구">
            <rect width="1000" height="620" fill="#7fb6bd"/>
            <rect y="0" width="1000" height="270" fill="#8cc7c4"/>
            ${pixelCloud(62,54,1.1,'#e8dfbc')} ${pixelCloud(533,34,.8,'#eee5c8')}
            <circle cx="890" cy="74" r="45" fill="#f2c765"/>
            <polygon points="0,260 135,120 270,260" fill="#5d756d"/>
            <polygon points="180,260 350,145 515,260" fill="#607f76"/>
            <polygon points="700,260 855,130 1000,250 1000,280" fill="#55756e"/>
            <polygon points="100,157 135,120 170,158" fill="#dde6d5"/>
            <rect y="250" width="1000" height="370" fill="#3f8e9a"/>
            <path d="M0 326 Q80 300 160 326 T320 326 T480 326 T640 326 T800 326 T1000 326" fill="none" stroke="#8fd6ce" stroke-width="13"/>
            <path d="M0 430 Q90 399 180 430 T360 430 T540 430 T720 430 T900 430 T1080 430" fill="none" stroke="#69b7b4" stroke-width="9"/>
            <path d="M0 530 Q90 500 180 530 T360 530 T540 530 T720 530 T900 530 T1080 530" fill="none" stroke="#82cbc3" stroke-width="8"/>
    
            <!-- Far lighthouse island -->
            <g>
              <polygon points="755,286 890,225 1000,285" fill="#5c6e59"/>
              <rect x="868" y="112" width="55" height="145" fill="#ded3b2"/>
              <rect x="875" y="112" width="41" height="145" fill="#eee2bf"/>
              <rect x="868" y="158" width="55" height="24" fill="#bb5657"/>
              <rect x="868" y="215" width="55" height="23" fill="#bb5657"/>
              <rect x="857" y="91" width="77" height="32" fill="#4c3d50"/>
              <rect x="872" y="79" width="47" height="19" fill="#e7c765"/>
              <polygon points="847,91 896,57 944,91" fill="#6a4351"/>
            </g>
    
            <!-- Pirate ship -->
            <g>
              <polygon points="205,385 700,385 650,500 270,500" fill="#633f38"/>
              <polygon points="238,402 675,402 639,474 286,474" fill="#8b5943"/>
              <rect x="248" y="480" width="392" height="30" fill="#4b3534"/>
              <rect x="420" y="105" width="22" height="300" fill="#5f4037"/>
              <rect x="522" y="166" width="19" height="224" fill="#5f4037"/>
              <polygon points="441,128 441,284 646,284" fill="#e7d7ad"/>
              <polygon points="541,184 541,321 690,321" fill="#d7c79f"/>
              <polygon points="418,143 260,273 418,273" fill="#f0dfb4"/>
              <rect x="440" y="128" width="8" height="156" fill="#6b4b40"/>
              <g transform="translate(495 190)">
                <rect x="0" y="0" width="47" height="41" fill="#353041"/>
                <rect x="11" y="8" width="9" height="9" fill="#e3d49f"/><rect x="29" y="8" width="9" height="9" fill="#e3d49f"/>
                <rect x="19" y="19" width="9" height="8" fill="#e3d49f"/>
                <rect x="9" y="30" width="30" height="5" fill="#e3d49f"/>
              </g>
              <g fill="#252434">
                <circle cx="337" cy="435" r="22"/><circle cx="444" cy="435" r="22"/><circle cx="551" cy="435" r="22"/>
              </g>
              <g fill="#587e80">
                <circle cx="337" cy="435" r="10"/><circle cx="444" cy="435" r="10"/><circle cx="551" cy="435" r="10"/>
              </g>
              <polygon points="416,104 458,120 416,136" fill="#c34f53"/>
            </g>
    
            <!-- Hidden feather in flag rigging -->
            <g class="hidden-object" data-object="feather" transform="translate(367 145) rotate(-20)" role="button" aria-label="붉은 깃털">
              <path d="M8 70 C-2 40 7 8 39 0 C52 28 37 57 8 70Z" fill="#c94f56"/>
              <path d="M8 70 L35 9" stroke="#f0ba84" stroke-width="5"/>
              <path d="M14 52 L3 44 M20 39 L8 31 M27 25 L16 17" stroke="#7d3e49" stroke-width="4"/>
              <rect x="-18" y="-17" width="88" height="105" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Dock -->
            <g>
              <rect x="0" y="485" width="330" height="43" fill="#70483a"/>
              <rect x="0" y="528" width="350" height="92" fill="#584039"/>
              <g stroke="#3d3233" stroke-width="7"><path d="M70 485V620"/><path d="M190 485V620"/><path d="M305 485V620"/></g>
              <g fill="#946346"><rect x="10" y="493" width="78" height="27"/><rect x="96" y="493" width="78" height="27"/><rect x="182" y="493" width="78" height="27"/><rect x="268" y="493" width="67" height="27"/></g>
            </g>
    
            <!-- Crates -->
            <g>
              <rect x="35" y="408" width="120" height="82" fill="#8c5c42"/><rect x="46" y="419" width="98" height="60" fill="#ad7650"/>
              <path d="M48 421 L141 477 M141 421 L48 477" stroke="#714b3c" stroke-width="9"/>
              <rect x="167" y="435" width="100" height="55" fill="#795044"/><rect x="177" y="445" width="80" height="35" fill="#956a50"/>
              <rect x="60" y="535" width="145" height="70" fill="#764e3e"/><rect x="72" y="547" width="121" height="46" fill="#946347"/>
            </g>
    
            <!-- Hidden map on crate -->
            <g class="hidden-object" data-object="map" transform="translate(70 386) rotate(-5)" role="button" aria-label="보물 지도">
              <rect x="0" y="0" width="76" height="52" fill="#e1c582"/>
              <rect x="8" y="8" width="60" height="36" fill="#d4b36e"/>
              <path d="M16 34 C28 16 44 38 60 18" fill="none" stroke="#806447" stroke-width="4"/>
              <path d="M51 30 L63 42 M63 30 L51 42" stroke="#a34d48" stroke-width="5"/>
              <rect x="-17" y="-17" width="110" height="87" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden compass on dock -->
            <g class="hidden-object" data-object="compass" transform="translate(223 520)" role="button" aria-label="나침반">
              <rect x="0" y="0" width="50" height="50" fill="#b47c48"/>
              <rect x="6" y="6" width="38" height="38" fill="#e0c278"/>
              <polygon points="25,8 31,25 25,42 19,25" fill="#b44549"/>
              <polygon points="8,25 25,19 42,25 25,31" fill="#526f7d"/>
              <rect x="22" y="22" width="6" height="6" fill="#eee0b1"/>
              <rect x="-18" y="-18" width="86" height="86" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Hidden anchor on hull -->
            <g class="hidden-object" data-object="anchor" transform="translate(598 405) scale(.8)" role="button" aria-label="작은 닻">
              <rect x="27" y="0" width="12" height="75" fill="#4d5560"/>
              <rect x="8" y="18" width="50" height="10" fill="#4d5560"/>
              <rect x="22" y="-7" width="22" height="22" fill="#4d5560"/>
              <rect x="28" y="-1" width="10" height="10" fill="#8b5943"/>
              <path d="M3 54 C8 86 58 86 64 54 L51 61 C43 74 25 74 16 61Z" fill="#4d5560"/>
              <rect x="-20" y="-24" width="105" height="128" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Floating bottle -->
            <g class="hidden-object" data-object="bottle" transform="translate(770 470) rotate(18)" role="button" aria-label="유리병">
              <rect x="19" y="0" width="17" height="18" fill="#b08962"/>
              <rect x="15" y="16" width="25" height="18" fill="#78aa9e"/>
              <rect x="4" y="29" width="47" height="57" fill="#67a595" opacity=".85"/>
              <rect x="11" y="38" width="15" height="40" fill="#a5d3bd" opacity=".55"/>
              <rect x="-18" y="-18" width="88" height="126" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Shore rocks -->
            <g fill="#69746b">
              <rect x="840" y="515" width="160" height="105"/><rect x="805" y="556" width="90" height="64" fill="#75837a"/>
              <rect x="916" y="482" width="84" height="54" fill="#839086"/>
            </g>
    
            <!-- Hidden shell on rocks -->
            <g class="hidden-object" data-object="shell" transform="translate(865 520)" role="button" aria-label="조개껍데기">
              <path d="M0 43 C3 9 19 0 38 0 C57 0 73 9 76 43Z" fill="#e9bf8d"/>
              <path d="M13 40 L19 8 M28 40 L32 3 M43 40 L43 3 M58 40 L53 8 M69 40 L62 13" stroke="#b67b68" stroke-width="5"/>
              <rect x="-18" y="-18" width="112" height="80" fill="transparent" pointer-events="all"/>
            </g>
    
            <!-- Ropes and barrel clutter -->
            <g>
              <rect x="345" y="520" width="74" height="88" fill="#6f493b"/><rect x="353" y="527" width="58" height="74" fill="#98654a"/>
              <rect x="345" y="535" width="74" height="8" fill="#3d3537"/><rect x="345" y="586" width="74" height="8" fill="#3d3537"/>
              <circle cx="470" cy="566" r="41" fill="none" stroke="#c09561" stroke-width="10"/>
              <circle cx="470" cy="566" r="22" fill="none" stroke="#c09561" stroke-width="8"/>
              <rect x="520" y="535" width="104" height="72" fill="#815443"/><rect x="532" y="547" width="80" height="48" fill="#a06c4c"/>
            </g>
    
            <!-- Birds -->
            <path d="M75 125 q14 -14 28 0 q14 -14 28 0" fill="none" stroke="#3d4650" stroke-width="6"/>
            <path d="M670 103 q12 -12 24 0 q12 -12 24 0" fill="none" stroke="#3d4650" stroke-width="5"/>
          </svg>`
        }
  );
})();
