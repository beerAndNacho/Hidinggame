(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '장난감 공장',
          difficulty: '보통',
          desc: '컨베이어 벨트와 부품 상자 속에서 진짜 목표 장난감을 골라내세요.',
          time: 95,
          targets: [
            { id:'toy-dice', name:'점박이 주사위', icon:'🎲' },
            { id:'toy-gear', name:'회색 톱니', icon:'⚙️' },
            { id:'toy-duck', name:'노란 오리', icon:'🦆' },
            { id:'toy-rocket', name:'작은 로켓', icon:'🚀' },
            { id:'toy-brush', name:'파란 붓', icon:'🖌️' },
            { id:'toy-train', name:'빨간 기차', icon:'🚂' },
            { id:'toy-ball', name:'줄무늬 공', icon:'🏀' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="장난감 공장">
            <rect width="1000" height="620" fill="#8c8990"/>
            <rect y="0" width="1000" height="505" fill="#777986"/>
            <rect y="505" width="1000" height="115" fill="#554f57"/>
            <g fill="#646571"><rect x="0" y="0" width="1000" height="24"/><rect x="0" y="184" width="1000" height="18"/><rect x="0" y="364" width="1000" height="18"/></g>
            <g stroke="#92939b" stroke-width="5" opacity=".5"><path d="M0 91h1000M0 274h1000M0 455h1000"/><path d="M120 0v505M330 0v505M560 0v505M795 0v505"/></g>
            <g fill="#d7b65f" opacity=".9"><rect x="72" y="45" width="96" height="20"/><rect x="432" y="45" width="96" height="20"/><rect x="792" y="45" width="96" height="20"/></g>
    
            <!-- 선반 -->
            <g>
              <rect x="38" y="105" width="270" height="250" fill="#4f5361"/>
              <rect x="52" y="121" width="242" height="62" fill="#676b76"/><rect x="52" y="199" width="242" height="62" fill="#676b76"/><rect x="52" y="277" width="242" height="62" fill="#676b76"/>
              <g fill="#a86c4e"><rect x="67" y="138" width="62" height="40"/><rect x="144" y="132" width="70" height="46"/><rect x="230" y="145" width="48" height="33"/><rect x="71" y="216" width="85" height="40"/><rect x="174" y="211" width="104" height="45"/><rect x="61" y="294" width="69" height="40"/><rect x="144" y="303" width="66" height="31"/><rect x="225" y="287" width="57" height="47"/></g>
              <path d="M84 137l28 40m0-40-28 40M193 211l36 45m0-45-36 45M78 294l35 40m0-40-35 40" stroke="#7a4e42" stroke-width="6"/>
            </g>
    
            <!-- 중앙 기계 -->
            <g>
              <rect x="366" y="98" width="270" height="298" rx="10" fill="#545c68"/>
              <rect x="391" y="124" width="220" height="114" fill="#303d4e"/>
              <rect x="407" y="140" width="188" height="82" fill="#6aa2a5"/>
              <g fill="#bdd5c8"><rect x="424" y="156" width="40" height="15"/><rect x="478" y="156" width="25" height="15"/><rect x="517" y="156" width="60" height="15"/><rect x="424" y="185" width="82" height="15"/><rect x="520" y="185" width="57" height="15"/></g>
              <circle cx="426" cy="291" r="24" fill="#c95c5d"/><circle cx="492" cy="291" r="24" fill="#d8b653"/><circle cx="558" cy="291" r="24" fill="#5da18f"/>
              <rect x="407" y="336" width="186" height="34" fill="#383f4b"/>
              <path d="M625 165h84v180h-84" fill="none" stroke="#8e9a9f" stroke-width="18"/>
              <path d="M704 214h63v84h-63" fill="none" stroke="#8e9a9f" stroke-width="14"/>
              <circle cx="767" cy="255" r="24" fill="#424b58"/>
            </g>
    
            <!-- 컨베이어 -->
            <g>
              <rect x="0" y="412" width="1000" height="83" fill="#4d4c55"/>
              <rect x="0" y="422" width="1000" height="54" fill="#73757b"/>
              <g fill="#34343c">${Array.from({length:13},(_,i)=>`<circle cx="${35+i*78}" cy="449" r="20"/>`).join('')}</g>
              <path d="M0 412h1000M0 495h1000" stroke="#b79a5a" stroke-width="9"/>
              <g fill="#aa714f"><rect x="83" y="370" width="95" height="52"/><rect x="252" y="381" width="78" height="41"/><rect x="684" y="366" width="98" height="56"/><rect x="850" y="383" width="82" height="39"/></g>
            </g>
    
            <!-- 바닥 상자 -->
            <g fill="#8b5f49"><rect x="36" y="522" width="128" height="80"/><rect x="188" y="538" width="112" height="64"/><rect x="696" y="527" width="131" height="75"/><rect x="846" y="515" width="128" height="87"/></g>
            <g stroke="#66463d" stroke-width="7"><path d="M44 530l112 64m0-64L44 594M704 535l115 59m0-59-115 59M855 523l110 71m0-71-110 71"/></g>
    
            ${hiddenSprite('toy-dice','점박이 주사위','dice',232,286,{scale:.42,rotate:8,opacity:.88,hit:130})}
            ${hiddenSprite('toy-gear','회색 톱니','gear',704,218,{scale:.47,rotate:11,opacity:.83,hit:125})}
            ${hiddenSprite('toy-duck','노란 오리','duck',102,377,{scale:.44,rotate:-4,hit:130})}
            ${hiddenSprite('toy-rocket','작은 로켓','rocket',547,239,{scale:.42,rotate:17,opacity:.85,hit:130})}
            ${hiddenSprite('toy-brush','파란 붓','brush',878,326,{scale:.45,rotate:-37,opacity:.82,hit:135})}
            ${hiddenSprite('toy-train','빨간 기차','train',397,527,{scale:.48,rotate:0,hit:124})}
            ${hiddenSprite('toy-ball','줄무늬 공','ball',574,526,{scale:.45,rotate:-9,opacity:.9,hit:128})}
    
            <!-- 작은 부품 장식 -->
            <g fill="#d3b15a" opacity=".7">${Array.from({length:16},(_,i)=>`<rect x="${325+(i*47)%640}" y="${72+(i*83)%430}" width="8" height="8"/>`).join('')}</g>
          </svg>`
        }
  );
})();
