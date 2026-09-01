(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const { hiddenSprite } = HG;
  HG.scenes = HG.scenes || [];
  HG.scenes.push({
    name: '별빛 놀이공원',
    difficulty: '매우 어려움',
    desc: '불빛과 상품이 가득한 놀이공원에서 비슷한 색의 목표를 빠르게 찾아보세요.',
    time: 112,
    targets: [
      { id:'park-ticket', name:'노란 입장권', icon:'🎟️' },
      { id:'park-lollipop', name:'분홍 막대사탕', icon:'🍭' },
      { id:'park-balloon', name:'빨간 풍선', icon:'🎈' },
      { id:'park-teddy', name:'곰 인형', icon:'🧸' },
      { id:'park-camera', name:'검은 카메라', icon:'📷' },
      { id:'park-star', name:'금빛 별', icon:'⭐' },
      { id:'park-icecream', name:'삼색 아이스크림', icon:'🍦' },
      { id:'park-duck', name:'노란 오리', icon:'🦆' }
    ],
    svg: () => `
      <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="별빛 놀이공원">
        <defs><linearGradient id="parkSky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#44345f"/><stop offset="1" stop-color="#70506c"/></linearGradient></defs>
        <rect width="1000" height="620" fill="url(#parkSky)"/>
        <circle cx="885" cy="76" r="39" fill="#f1d795"/>
        <g fill="#f5e6b9" opacity=".75"><circle cx="70" cy="66" r="3"/><circle cx="148" cy="112" r="4"/><circle cx="343" cy="58" r="3"/><circle cx="525" cy="105" r="4"/><circle cx="690" cy="48" r="3"/><circle cx="795" cy="137" r="3"/><circle cx="944" cy="164" r="4"/></g>
        <path d="M0 469c160-48 291-6 444-14 173-9 329-35 556 4v161H0z" fill="#4b4355"/>
        <path d="M0 531c173-28 342 17 515-2 187-21 317-25 485-2v93H0z" fill="#3a3948"/>
        <g transform="translate(55 108)">
          <circle cx="198" cy="190" r="157" fill="none" stroke="#817493" stroke-width="14"/>
          <circle cx="198" cy="190" r="13" fill="#ddb95e"/>
          <g stroke="#817493" stroke-width="7"><path d="M198 33v314M41 190h314M87 79l222 222M309 79L87 301"/></g>
          <g fill="#d86671"><rect x="180" y="14" width="36" height="29"/><rect x="180" y="337" width="36" height="29"/></g>
          <g fill="#69a79d"><rect x="22" y="176" width="36" height="29"/><rect x="338" y="176" width="36" height="29"/></g>
          <g fill="#d8b657"><rect x="67" y="57" width="36" height="29"/><rect x="293" y="287" width="36" height="29"/></g>
          <g fill="#8076ae"><rect x="293" y="57" width="36" height="29"/><rect x="67" y="287" width="36" height="29"/></g>
          <path d="M198 347l-70 132m70-132 70 132" stroke="#817493" stroke-width="15"/>
          <rect x="104" y="470" width="188" height="17" fill="#66576f"/>
        </g>
        <path d="M405 260c74-100 141-98 202 0 64-91 132-96 207 0" fill="none" stroke="#302c43" stroke-width="12"/>
        <g transform="translate(418 270)"><polygon points="0 102 85 0 170 102" fill="#d3b65e"/><polygon points="170 102 255 0 340 102" fill="#bc5c6a"/><rect y="102" width="340" height="222" fill="#755464"/><rect x="28" y="136" width="122" height="86" fill="#453d50"/><rect x="190" y="136" width="122" height="86" fill="#453d50"/><rect x="55" y="246" width="230" height="68" fill="#614957"/></g>
        <g transform="translate(788 334)"><polygon points="0 76 76 0 152 76" fill="#5f9692"/><rect y="76" width="152" height="177" fill="#4e6877"/><rect x="20" y="103" width="112" height="67" fill="#293d4c"/><rect x="34" y="190" width="84" height="63" fill="#684d59"/></g>
        <path d="M0 141c245-70 501 52 1000-27" fill="none" stroke="#2d2940" stroke-width="5"/>
        <g fill="#f0c85f"><circle cx="65" cy="126" r="7"/><circle cx="235" cy="120" r="7"/><circle cx="405" cy="139" r="7"/><circle cx="575" cy="145" r="7"/><circle cx="745" cy="128" r="7"/><circle cx="915" cy="111" r="7"/></g>
        <ellipse cx="838" cy="561" rx="126" ry="43" fill="#3e7e89"/><ellipse cx="838" cy="553" rx="105" ry="29" fill="#62aaa7"/>
        ${hiddenSprite('park-ticket','노란 입장권','ticket',455,390,{scale:.42,rotate:-8,opacity:.86,hit:138})}
        ${hiddenSprite('park-lollipop','분홍 막대사탕','lollipop',714,312,{scale:.42,rotate:18,opacity:.85,hit:140})}
        ${hiddenSprite('park-balloon','빨간 풍선','balloon',936,176,{scale:.45,rotate:6,opacity:.88,hit:134})}
        ${hiddenSprite('park-teddy','곰 인형','teddy',633,444,{scale:.43,rotate:-4,opacity:.9,hit:134})}
        ${hiddenSprite('park-camera','검은 카메라','camera',468,493,{scale:.42,rotate:7,opacity:.75,hit:140})}
        ${hiddenSprite('park-star','금빛 별','star',274,211,{scale:.32,rotate:-6,opacity:.74,hit:150})}
        ${hiddenSprite('park-icecream','삼색 아이스크림','icecream',840,408,{scale:.4,rotate:-8,opacity:.84,hit:142})}
        ${hiddenSprite('park-duck','노란 오리','duck',789,535,{scale:.42,rotate:4,opacity:.78,hit:138})}
      </svg>`
  });
})();
