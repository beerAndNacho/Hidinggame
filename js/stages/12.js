(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '시간의 성',
          difficulty: '최종',
          desc: '거대한 시계와 기어가 움직이는 마지막 성에서 아홉 개의 시간 유물을 찾으세요.',
          time: 125,
          targets: [
            { id:'time-hourglass', name:'황금 모래시계', icon:'⏳' },
            { id:'time-clock', name:'작은 회중시계', icon:'🕰️' },
            { id:'time-sword', name:'은빛 검', icon:'🗡️' },
            { id:'time-rose', name:'붉은 장미', icon:'🌹' },
            { id:'time-mask', name:'하얀 가면', icon:'🎭' },
            { id:'time-crown', name:'왕의 왕관', icon:'👑' },
            { id:'time-key', name:'시간의 열쇠', icon:'🗝️' },
            { id:'time-orb', name:'보랏빛 구슬', icon:'🔮' },
            { id:'time-feather', name:'기록자의 깃털', icon:'🪶' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="시간의 성">
            <rect width="1000" height="620" fill="#231d36"/>
            <rect y="0" width="1000" height="520" fill="#332944"/>
            <rect y="520" width="1000" height="100" fill="#1d1a29"/>
            <g fill="#493851"><rect x="0" y="0" width="1000" height="32"/><rect x="0" y="493" width="1000" height="27"/><rect x="0" y="0" width="27" height="520"/><rect x="973" y="0" width="27" height="520"/></g>
            <g stroke="#59425d" stroke-width="5" opacity=".45"><path d="M0 128h1000M0 276h1000M0 420h1000"/><path d="M174 0v520M826 0v520"/></g>
    
            <!-- 거대한 시계 -->
            <g>
              <circle cx="500" cy="246" r="190" fill="#50445b"/>
              <circle cx="500" cy="246" r="166" fill="#b49766"/>
              <circle cx="500" cy="246" r="145" fill="#d5c394"/>
              <circle cx="500" cy="246" r="131" fill="#c8b584"/>
              <g fill="#735e52">${Array.from({length:12},(_,i)=>{const a=i*Math.PI/6-Math.PI/2; return `<rect x="${500+Math.cos(a)*112-5}" y="${246+Math.sin(a)*112-10}" width="10" height="20" transform="rotate(${i*30} ${500+Math.cos(a)*112} ${246+Math.sin(a)*112})"/>`;}).join('')}</g>
              <path d="M500 246L465 143M500 246l87 48" stroke="#4e4145" stroke-width="13" stroke-linecap="square"/>
              <circle cx="500" cy="246" r="15" fill="#8b6b4d"/>
              <path d="M500 56v-34M463 28h74" stroke="#8a6c55" stroke-width="12"/>
            </g>
    
            <!-- 기어 -->
            ${decorSprite('gear',109,110,{scale:1.35,rotate:7,opacity:.72})}
            ${decorSprite('gear',770,93,{scale:1.55,rotate:-13,opacity:.68})}
            ${decorSprite('gear',47,342,{scale:.95,rotate:20,opacity:.66})}
            ${decorSprite('gear',858,356,{scale:1.02,rotate:-5,opacity:.66})}
            ${decorSprite('gear',236,380,{scale:.65,rotate:7,opacity:.62})}
            ${decorSprite('gear',707,392,{scale:.7,rotate:2,opacity:.62})}
    
            <!-- 기둥과 왕좌 -->
            <g><rect x="77" y="93" width="63" height="406" fill="#674c58"/><rect x="860" y="93" width="63" height="406" fill="#674c58"/><rect x="61" y="72" width="95" height="31" fill="#795a62"/><rect x="844" y="72" width="95" height="31" fill="#795a62"/><rect x="58" y="486" width="101" height="24" fill="#4d3d49"/><rect x="841" y="486" width="101" height="24" fill="#4d3d49"/></g>
            <g><path d="M395 494V387c0-52 47-73 105-73s105 21 105 73v107z" fill="#633e54"/><path d="M421 480v-81c0-36 35-52 79-52s79 16 79 52v81z" fill="#8c5064"/><rect x="368" y="478" width="264" height="32" fill="#4e3848"/><rect x="385" y="510" width="28" height="72" fill="#423442"/><rect x="587" y="510" width="28" height="72" fill="#423442"/></g>
            <g><rect x="180" y="522" width="182" height="61" fill="#4b3b47"/><rect x="638" y="522" width="182" height="61" fill="#4b3b47"/><path d="M198 522v61m55-61v61m55-61v61M656 522v61m55-61v61m55-61v61" stroke="#6a5059" stroke-width="6"/></g>
    
            ${hiddenSprite('time-hourglass','황금 모래시계','hourglass',173,439,{scale:.41,rotate:-3,opacity:.79,hit:148})}
            ${hiddenSprite('time-clock','작은 회중시계','clock',799,302,{scale:.37,rotate:12,opacity:.71,hit:155})}
            ${hiddenSprite('time-sword','은빛 검','sword',339,385,{scale:.44,rotate:42,opacity:.74,hit:145})}
            ${hiddenSprite('time-rose','붉은 장미','rose',559,445,{scale:.4,rotate:-7,opacity:.78,hit:150})}
            ${hiddenSprite('time-mask','하얀 가면','mask',749,500,{scale:.4,rotate:7,opacity:.79,hit:150})}
            ${hiddenSprite('time-crown','왕의 왕관','crown',455,323,{scale:.38,rotate:0,opacity:.78,hit:156})}
            ${hiddenSprite('time-key','시간의 열쇠','key',148,216,{scale:.39,rotate:80,opacity:.66,hit:160})}
            ${hiddenSprite('time-orb','보랏빛 구슬','orb',878,220,{scale:.4,rotate:0,opacity:.7,hit:155})}
            ${hiddenSprite('time-feather','기록자의 깃털','feather',642,134,{scale:.39,rotate:28,opacity:.68,hit:160})}
    
            <g fill="#e5c66b" opacity=".3">${Array.from({length:34},(_,i)=>`<circle cx="${26+(i*89)%950}" cy="${36+(i*61)%450}" r="${2+(i%3)}"/>`).join('')}</g>
          </svg>`
        }
  );
})();
