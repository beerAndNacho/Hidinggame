(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { pixelCloud, flower, tree, pine, hiddenSprite, decorSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push(
{
          name: '유령 도서관',
          difficulty: '어려움',
          desc: '촛불이 흔들리는 오래된 도서관에서 책등과 그림자에 숨은 단서를 찾으세요.',
          time: 100,
          targets: [
            { id:'lib-glasses', name:'금테 안경', icon:'👓' },
            { id:'lib-candle', name:'녹아내린 촛불', icon:'🕯️' },
            { id:'lib-feather', name:'하얀 깃털', icon:'🪶' },
            { id:'lib-moon', name:'초승달', icon:'🌙' },
            { id:'lib-cat', name:'검은 고양이', icon:'🐈' },
            { id:'lib-book', name:'펼쳐진 책', icon:'📖' },
            { id:'lib-key', name:'고서고 열쇠', icon:'🗝️' }
          ],
          svg: () => `
          <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="유령 도서관">
            <rect width="1000" height="620" fill="#28233f"/>
            <rect y="0" width="1000" height="525" fill="#3a3150"/>
            <rect y="525" width="1000" height="95" fill="#211e2d"/>
            <path d="M0 80h1000M0 492h1000" stroke="#584562" stroke-width="18"/>
            <g opacity=".22" stroke="#89749a" stroke-width="5"><path d="M0 170h1000M0 330h1000"/><path d="M190 0v525M500 0v525M808 0v525"/></g>
    
            <!-- 중앙 창 -->
            <g>
              <path d="M395 280V142c0-74 47-112 105-112s105 38 105 112v138z" fill="#211f38"/>
              <path d="M421 268V148c0-55 34-87 79-87s79 32 79 87v120z" fill="#52628a"/>
              <circle cx="500" cy="118" r="42" fill="#6d78a0"/>
              <path d="M500 61v207M421 170h158" stroke="#2d2a46" stroke-width="8"/>
              <g fill="#b7afd0" opacity=".48"><rect x="444" y="94" width="8" height="8"/><rect x="552" y="132" width="6" height="6"/><rect x="468" y="205" width="7" height="7"/></g>
            </g>
    
            <!-- 책장 -->
            <g>
              <rect x="24" y="76" width="334" height="430" fill="#493341"/>
              <rect x="42" y="94" width="298" height="394" fill="#322a3a"/>
              <rect x="642" y="76" width="334" height="430" fill="#493341"/>
              <rect x="660" y="94" width="298" height="394" fill="#322a3a"/>
              <g fill="#72514d"><rect x="42" y="177" width="298" height="13"/><rect x="42" y="274" width="298" height="13"/><rect x="42" y="371" width="298" height="13"/><rect x="660" y="177" width="298" height="13"/><rect x="660" y="274" width="298" height="13"/><rect x="660" y="371" width="298" height="13"/></g>
              <g>${Array.from({length:44},(_,i)=>{const left=i<22; const k=i%22; const row=Math.floor(k/6); const col=k%6; const x=(left?54:672)+col*46+(row%2)*6; const y=110+row*97; const h=48+((i*13)%22); const colors=['#92545b','#6b7791','#9c744f','#5c836f','#7b5c8c']; return `<rect x="${x}" y="${y+62-h}" width="${26+(i%3)*4}" height="${h}" fill="${colors[i%colors.length]}"/><rect x="${x+5}" y="${y+69-h}" width="${16+(i%3)*4}" height="4" fill="#d1b37e" opacity=".55"/>`;}).join('')}</g>
            </g>
    
            <!-- 사다리·책상 -->
            <g><path d="M318 164L265 506M372 164l-53 342" stroke="#8c644e" stroke-width="12"/><g stroke="#a87557" stroke-width="8">${Array.from({length:8},(_,i)=>`<path d="M${311-i*6} ${207+i*39}h49"/>`).join('')}</g></g>
            <g><rect x="356" y="409" width="288" height="33" fill="#725044"/><rect x="384" y="442" width="28" height="116" fill="#5d423d"/><rect x="589" y="442" width="28" height="116" fill="#5d423d"/><rect x="382" y="548" width="238" height="15" fill="#49373a"/></g>
            <g opacity=".3" fill="#c8c4df"><path d="M737 315c-27-41 12-75 43-50 30-31 73 3 44 47 35 16 17 67-22 53-20 32-66 15-58-24-24-2-26-20-7-26z"/><circle cx="771" cy="307" r="5" fill="#45415a"/><circle cx="803" cy="307" r="5" fill="#45415a"/></g>
    
            ${hiddenSprite('lib-glasses','금테 안경','glasses',482,401,{scale:.48,rotate:-6,opacity:.82,hit:132})}
            ${hiddenSprite('lib-candle','녹아내린 촛불','candle',829,287,{scale:.45,rotate:1,opacity:.88,hit:128})}
            ${hiddenSprite('lib-feather','하얀 깃털','feather',579,454,{scale:.45,rotate:18,opacity:.77,hit:135})}
            ${hiddenSprite('lib-moon','초승달','moon',460,83,{scale:.48,rotate:-11,opacity:.72,hit:130})}
            ${hiddenSprite('lib-cat','검은 고양이','cat',257,82,{scale:.42,rotate:0,opacity:.88,hit:130})}
            ${hiddenSprite('lib-book','펼쳐진 책','book',676,381,{scale:.43,rotate:6,opacity:.88,hit:130})}
            ${hiddenSprite('lib-key','고서고 열쇠','key',105,365,{scale:.42,rotate:-68,opacity:.7,hit:138})}
    
            <g fill="#e6c86d" opacity=".22">${Array.from({length:28},(_,i)=>`<circle cx="${30+(i*79)%950}" cy="${65+(i*67)%470}" r="${2+(i%3)}"/>`).join('')}</g>
          </svg>`
        }
  );
})();
