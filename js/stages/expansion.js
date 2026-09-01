(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  HG.scenes = HG.scenes || [];

  // CASE 13~30 · 사실적 사진 장면과 함께 사용하는 경량 확장 캠페인 데이터
  const configs = [{"name":"한밤의 미니어처 베이커리","difficulty":"어려움","desc":"빵 진열대, 오븐, 조리도구 속에 섞인 여덟 가지 재료와 도구를 찾으세요.","time":105,"missionCode":"mistakes1","targets":[{"id":"s13-cupcake","name":"컵케이크","icon":"🧁"},{"id":"s13-spoon","name":"작은 숟가락","icon":"🥄"},{"id":"s13-strawberry","name":"딸기","icon":"🍓"},{"id":"s13-whisk","name":"거품기","icon":"🥣"},{"id":"s13-rollingpin","name":"밀대","icon":"🪵"},{"id":"s13-cookie","name":"별 쿠키","icon":"🍪"},{"id":"s13-mug","name":"따뜻한 머그","icon":"☕"},{"id":"s13-bell","name":"은빛 종","icon":"🔔"}]},{"name":"꿈속의 별빛 놀이공원","difficulty":"어려움","desc":"회전목마, 관람차, 게임 부스와 조명 사이에 숨은 물건을 추적하세요.","time":104,"missionCode":"noHint","targets":[{"id":"s14-ticket","name":"놀이공원 표","icon":"🎟️"},{"id":"s14-balloon","name":"풍선","icon":"🎈"},{"id":"s14-clock","name":"회중시계","icon":"🕰️"},{"id":"s14-umbrella","name":"줄무늬 우산","icon":"☂️"},{"id":"s14-drum","name":"작은 북","icon":"🥁"},{"id":"s14-duck","name":"노란 오리","icon":"🦆"},{"id":"s14-camera","name":"필름 카메라","icon":"📷"},{"id":"s14-lantern","name":"작은 등불","icon":"🏮"}]},{"name":"시간 여행자의 비밀 박물관","difficulty":"어려움","desc":"서로 다른 시대의 전시품과 시간문 사이에서 마지막 여덟 단서를 찾아내세요.","time":102,"missionCode":"time35","targets":[{"id":"s15-hourglass","name":"모래시계","icon":"⏳"},{"id":"s15-cassette","name":"카세트테이프","icon":"📼"},{"id":"s15-camera","name":"필름 카메라","icon":"📷"},{"id":"s15-coin","name":"옛 동전","icon":"🪙"},{"id":"s15-feather","name":"붉은 깃털","icon":"🪶"},{"id":"s15-globe","name":"작은 지구본","icon":"🌍"},{"id":"s15-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s15-ring","name":"왕가의 반지","icon":"💍"}]},{"name":"유리정원의 비밀 온실","difficulty":"어려움","desc":"유리 천장과 화분, 덩굴 사이에 숨겨진 아홉 개의 초대장 단서를 찾으세요.","time":101,"missionCode":"combo5","targets":[{"id":"s16-leaf","name":"황금 잎사귀","icon":"🍃"},{"id":"s16-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s16-potion","name":"보라 물약","icon":"🧪"},{"id":"s16-snail","name":"달팽이","icon":"🐌"},{"id":"s16-bell","name":"은빛 종","icon":"🔔"},{"id":"s16-book","name":"낡은 책","icon":"📕"},{"id":"s16-pearl","name":"진주","icon":"⚪"},{"id":"s16-crown","name":"작은 왕관","icon":"👑"},{"id":"s16-feather","name":"붉은 깃털","icon":"🪶"}]},{"name":"황혼 특급열차 7호칸","difficulty":"어려움","desc":"노을빛 객실과 좌석, 선반의 짐 속에서 사라진 승객의 흔적을 추적하세요.","time":100,"missionCode":"noRadar","targets":[{"id":"s17-ticket","name":"놀이공원 표","icon":"🎟️"},{"id":"s17-umbrella","name":"줄무늬 우산","icon":"☂️"},{"id":"s17-clock","name":"회중시계","icon":"🕰️"},{"id":"s17-mug","name":"따뜻한 머그","icon":"☕"},{"id":"s17-glasses","name":"둥근 안경","icon":"👓"},{"id":"s17-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s17-book","name":"낡은 책","icon":"📕"},{"id":"s17-bell","name":"은빛 종","icon":"🔔"},{"id":"s17-map","name":"보물 지도","icon":"🗺️"}]},{"name":"왕실 대주방의 소동","difficulty":"어려움","desc":"커다란 조리대와 오븐, 식재료 사이에 섞인 왕실 연회 도구를 찾으세요.","time":98,"missionCode":"balanced","targets":[{"id":"s18-rollingpin","name":"밀대","icon":"🪵"},{"id":"s18-whisk","name":"거품기","icon":"🥣"},{"id":"s18-spoon","name":"작은 숟가락","icon":"🥄"},{"id":"s18-teapot","name":"찻주전자","icon":"🫖"},{"id":"s18-cupcake","name":"컵케이크","icon":"🧁"},{"id":"s18-cookie","name":"별 쿠키","icon":"🍪"},{"id":"s18-strawberry","name":"딸기","icon":"🍓"},{"id":"s18-mug","name":"따뜻한 머그","icon":"☕"},{"id":"s18-bell","name":"은빛 종","icon":"🔔"}]},{"name":"밤의 자연사 박물관","difficulty":"전문가","desc":"화석 전시와 유리 진열장, 어두운 복도에서 움직인 전시품의 단서를 찾으세요.","time":97,"missionCode":"time45","targets":[{"id":"s19-bone","name":"작은 뼈","icon":"🦴"},{"id":"s19-coin","name":"옛 동전","icon":"🪙"},{"id":"s19-glasses","name":"둥근 안경","icon":"👓"},{"id":"s19-map","name":"보물 지도","icon":"🗺️"},{"id":"s19-compass","name":"나침반","icon":"🧭"},{"id":"s19-vase","name":"고대 항아리","icon":"🏺"},{"id":"s19-idol","name":"석상 우상","icon":"🗿"},{"id":"s19-feather","name":"붉은 깃털","icon":"🪶"},{"id":"s19-clock","name":"회중시계","icon":"🕰️"}]},{"name":"산호빛 대형 수족관","difficulty":"전문가","desc":"거대한 수조와 산호 터널, 관람 시설 사이에서 아홉 개의 해양 단서를 찾으세요.","time":96,"missionCode":"mistakes2Radar","targets":[{"id":"s20-fish","name":"파란 물고기","icon":"🐟"},{"id":"s20-pearl","name":"진주","icon":"⚪"},{"id":"s20-submarine","name":"미니 잠수함","icon":"🚤"},{"id":"s20-shell","name":"조개껍데기","icon":"🐚"},{"id":"s20-coral","name":"붉은 산호","icon":"🪸"},{"id":"s20-octopus","name":"꼬마 문어","icon":"🐙"},{"id":"s20-bottle","name":"유리병","icon":"🍾"},{"id":"s20-star","name":"빛나는 별","icon":"⭐"},{"id":"s20-gem","name":"푸른 보석","icon":"💎"}]},{"name":"용암산의 거인 대장간","difficulty":"전문가","desc":"불꽃과 쇳물, 거대한 모루 주변에 흩어진 전설의 금속 유물을 수집하세요.","time":95,"missionCode":"hints1mistakes1","targets":[{"id":"s21-sword","name":"은빛 검","icon":"🗡️"},{"id":"s21-shield","name":"기사 방패","icon":"🛡️"},{"id":"s21-gear","name":"톱니바퀴","icon":"⚙️"},{"id":"s21-wrench","name":"렌치","icon":"🔧"},{"id":"s21-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s21-crown","name":"작은 왕관","icon":"👑"},{"id":"s21-bell","name":"은빛 종","icon":"🔔"},{"id":"s21-ring","name":"왕가의 반지","icon":"💍"},{"id":"s21-torch","name":"횃불","icon":"🔥"}]},{"name":"유령들의 자정 음악실","difficulty":"전문가","desc":"피아노와 악보대, 무대 커튼 사이에서 저절로 연주된 음악의 흔적을 찾으세요.","time":94,"missionCode":"perfect","targets":[{"id":"s22-musicbox","name":"뮤직박스","icon":"🎵"},{"id":"s22-cassette","name":"카세트테이프","icon":"📼"},{"id":"s22-drum","name":"작은 북","icon":"🥁"},{"id":"s22-bell","name":"은빛 종","icon":"🔔"},{"id":"s22-fan","name":"접이식 부채","icon":"🪭"},{"id":"s22-mask","name":"가면","icon":"🎭"},{"id":"s22-candle","name":"촛불","icon":"🕯️"},{"id":"s22-clock","name":"회중시계","icon":"🕰️"},{"id":"s22-feather","name":"붉은 깃털","icon":"🪶"}]},{"name":"구름 위 왕국 우체국","difficulty":"전문가","desc":"떠다니는 섬과 우편 창구, 비행선 짐칸에서 목적지를 잃은 우편물을 찾으세요.","time":93,"missionCode":"combo6","targets":[{"id":"s23-map","name":"보물 지도","icon":"🗺️"},{"id":"s23-feather","name":"붉은 깃털","icon":"🪶"},{"id":"s23-ticket","name":"놀이공원 표","icon":"🎟️"},{"id":"s23-umbrella","name":"줄무늬 우산","icon":"☂️"},{"id":"s23-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s23-globe","name":"작은 지구본","icon":"🌍"},{"id":"s23-lantern","name":"작은 등불","icon":"🏮"},{"id":"s23-camera","name":"필름 카메라","icon":"📷"},{"id":"s23-clock","name":"회중시계","icon":"🕰️"}]},{"name":"무지개 사탕 연금술실","difficulty":"전문가","desc":"끓어오르는 솥과 유리관, 알록달록한 재료 속에 숨은 제조 비법을 찾아보세요.","time":92,"missionCode":"noRadarTime35","targets":[{"id":"s24-potion","name":"보라 물약","icon":"🧪"},{"id":"s24-cupcake","name":"컵케이크","icon":"🧁"},{"id":"s24-cookie","name":"별 쿠키","icon":"🍪"},{"id":"s24-strawberry","name":"딸기","icon":"🍓"},{"id":"s24-bottle","name":"유리병","icon":"🍾"},{"id":"s24-gem","name":"푸른 보석","icon":"💎"},{"id":"s24-pearl","name":"진주","icon":"⚪"},{"id":"s24-star","name":"빛나는 별","icon":"⭐"},{"id":"s24-spoon","name":"작은 숟가락","icon":"🥄"}]},{"name":"고대 공룡 협곡 캠프","difficulty":"마스터","desc":"붉은 협곡과 발굴 텐트, 거대한 뼈 주변에서 열 개의 시대 단서를 발견하세요.","time":91,"missionCode":"noHintCombo5","targets":[{"id":"s25-bone","name":"작은 뼈","icon":"🦴"},{"id":"s25-egg","name":"용의 알","icon":"🥚"},{"id":"s25-brush","name":"발굴 붓","icon":"🖌️"},{"id":"s25-compass","name":"나침반","icon":"🧭"},{"id":"s25-map","name":"보물 지도","icon":"🗺️"},{"id":"s25-goggles","name":"보호 고글","icon":"🥽"},{"id":"s25-boot","name":"겨울 장화","icon":"🥾"},{"id":"s25-feather","name":"붉은 깃털","icon":"🪶"},{"id":"s25-leaf","name":"황금 잎사귀","icon":"🍃"},{"id":"s25-coin","name":"옛 동전","icon":"🪙"}]},{"name":"달빛 벚꽃 가면 축제","difficulty":"마스터","desc":"벚꽃 성곽과 야시장, 가면 행렬 사이에 숨은 축제의 비밀 물건을 찾으세요.","time":90,"missionCode":"mistakes1Time30","targets":[{"id":"s26-fan","name":"접이식 부채","icon":"🪭"},{"id":"s26-lantern","name":"작은 등불","icon":"🏮"},{"id":"s26-mask","name":"가면","icon":"🎭"},{"id":"s26-umbrella","name":"줄무늬 우산","icon":"☂️"},{"id":"s26-camera","name":"필름 카메라","icon":"📷"},{"id":"s26-ticket","name":"놀이공원 표","icon":"🎟️"},{"id":"s26-bell","name":"은빛 종","icon":"🔔"},{"id":"s26-crown","name":"작은 왕관","icon":"👑"},{"id":"s26-ring","name":"왕가의 반지","icon":"💍"},{"id":"s26-star","name":"빛나는 별","icon":"⭐"}]},{"name":"심해에 잠긴 유리도시","difficulty":"마스터","desc":"빛이 새어드는 돔과 고대 거리, 물속 유적에서 열 개의 도시 기록을 회수하세요.","time":89,"missionCode":"threeStar","targets":[{"id":"s27-pearl","name":"진주","icon":"⚪"},{"id":"s27-shell","name":"조개껍데기","icon":"🐚"},{"id":"s27-coral","name":"붉은 산호","icon":"🪸"},{"id":"s27-octopus","name":"꼬마 문어","icon":"🐙"},{"id":"s27-submarine","name":"미니 잠수함","icon":"🚤"},{"id":"s27-anchor","name":"작은 닻","icon":"⚓"},{"id":"s27-compass","name":"나침반","icon":"🧭"},{"id":"s27-bottle","name":"유리병","icon":"🍾"},{"id":"s27-gem","name":"푸른 보석","icon":"💎"},{"id":"s27-fish","name":"파란 물고기","icon":"🐟"}]},{"name":"검은 화산의 수정 광산","difficulty":"마스터","desc":"광차와 용암 강, 수정 기둥 사이에서 최종 장치의 부품 열 개를 확보하세요.","time":88,"missionCode":"mistakes1","targets":[{"id":"s28-gear","name":"톱니바퀴","icon":"⚙️"},{"id":"s28-wrench","name":"렌치","icon":"🔧"},{"id":"s28-battery","name":"에너지 전지","icon":"🔋"},{"id":"s28-goggles","name":"보호 고글","icon":"🥽"},{"id":"s28-crystal","name":"우주 수정","icon":"💠"},{"id":"s28-lantern","name":"작은 등불","icon":"🏮"},{"id":"s28-boot","name":"겨울 장화","icon":"🥾"},{"id":"s28-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s28-coin","name":"옛 동전","icon":"🪙"},{"id":"s28-torch","name":"횃불","icon":"🔥"}]},{"name":"검은 달 천문대","difficulty":"마스터","desc":"회전 돔과 별자리 장치, 검은 달빛 속에서 사건을 연결하는 열 개의 증거를 찾으세요.","time":87,"missionCode":"noHint","targets":[{"id":"s29-telescope","name":"망원경","icon":"🔭"},{"id":"s29-planet","name":"고리 행성","icon":"🪐"},{"id":"s29-rocket","name":"작은 로켓","icon":"🚀"},{"id":"s29-star","name":"빛나는 별","icon":"⭐"},{"id":"s29-globe","name":"작은 지구본","icon":"🌍"},{"id":"s29-antenna","name":"접시 안테나","icon":"📡"},{"id":"s29-crystal","name":"우주 수정","icon":"💠"},{"id":"s29-clock","name":"회중시계","icon":"🕰️"},{"id":"s29-battery","name":"에너지 전지","icon":"🔋"},{"id":"s29-glasses","name":"둥근 안경","icon":"👓"}]},{"name":"리얼 탐정단 비밀 본부","difficulty":"최종","desc":"사건 보드와 통신 장비, 수집된 증거 속에 숨어 있는 마지막 열 개의 진실을 밝혀내세요.","time":86,"missionCode":"time35","targets":[{"id":"s30-camera","name":"필름 카메라","icon":"📷"},{"id":"s30-map","name":"보물 지도","icon":"🗺️"},{"id":"s30-key","name":"황금 열쇠","icon":"🗝️"},{"id":"s30-glasses","name":"둥근 안경","icon":"👓"},{"id":"s30-clock","name":"회중시계","icon":"🕰️"},{"id":"s30-cassette","name":"카세트테이프","icon":"📼"},{"id":"s30-compass","name":"나침반","icon":"🧭"},{"id":"s30-book","name":"낡은 책","icon":"📕"},{"id":"s30-feather","name":"붉은 깃털","icon":"🪶"},{"id":"s30-ring","name":"왕가의 반지","icon":"💍"}]}];
  const palettes = [
    ['#2f1d2b','#8a5b4a','#e2b77c'],['#121c37','#5f4b88','#e6c66e'],['#17263b','#597c91','#d7bd87'],
    ['#17362b','#5f8a64','#cbbd78'],['#3b2119','#9d6346','#e4bd7f'],['#232734','#687481','#d7b27a'],
    ['#152e3a','#387f87','#d8c27a'],['#321d18','#9c4c32','#efb45e'],['#252038','#70548b','#dcb97c']
  ];

  const esc = value => String(value)
    .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

  function rng(seed) {
    let value = seed >>> 0;
    return () => {
      value += 0x6D2B79F5;
      let t = value;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function makeBackdrop(index, palette, random) {
    const [deep, mid, glow] = palette;
    const skyline = Array.from({length:10}, (_,i) => {
      const x=i*104-20, height=90+Math.round(random()*150), width=72+Math.round(random()*50);
      return `<rect x="${x}" y="${470-height}" width="${width}" height="${height}" rx="${8+index%12}" fill="${i%2?mid:deep}" opacity="${(.38+random()*.27).toFixed(2)}"/>`;
    }).join('');
    const props = Array.from({length:16}, (_,i) => {
      const x=35+Math.round(random()*930), y=80+Math.round(random()*470), r=5+Math.round(random()*20);
      return i%3===0
        ? `<circle cx="${x}" cy="${y}" r="${r}" fill="${glow}" opacity=".16"/>`
        : `<path d="M${x-r} ${y}h${r*2}M${x} ${y-r}v${r*2}" stroke="${glow}" stroke-width="${2+i%4}" opacity=".12"/>`;
    }).join('');
    return `<defs>
      <linearGradient id="bg-${index}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${deep}"/><stop offset=".55" stop-color="${mid}"/><stop offset="1" stop-color="#080d16"/></linearGradient>
      <radialGradient id="lamp-${index}"><stop stop-color="${glow}" stop-opacity=".7"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1000" height="620" fill="url(#bg-${index})"/>
    <circle cx="${180+(index*83)%650}" cy="${100+(index*37)%180}" r="190" fill="url(#lamp-${index})" opacity=".34"/>
    <path d="M0 420 Q180 ${330+(index%4)*30} 350 410 T710 390 T1000 430 V620 H0Z" fill="${deep}" opacity=".75"/>
    ${skyline}${props}
    <rect x="38" y="48" width="924" height="514" rx="28" fill="none" stroke="${glow}" stroke-opacity=".17" stroke-width="3"/>`;
  }

  function makeScene(config, offset) {
    const stageNumber = offset + 13;
    const random = rng(9001 + stageNumber * 197);
    const palette = palettes[offset % palettes.length];
    const cells = [
      [90,95],[270,92],[455,100],[650,88],[835,105],
      [115,285],[300,300],[490,285],[685,300],[850,286],
      [165,465],[365,455],[580,470],[785,450]
    ].sort(() => random()-.5);
    const hidden = config.targets.map((target,i) => {
      const [baseX,baseY] = cells[i];
      const x=baseX+Math.round((random()-.5)*38), y=baseY+Math.round((random()-.5)*30);
      const rotate=Math.round((random()-.5)*30), scale=(.64+random()*.23).toFixed(2);
      return `<g class="hidden-object" data-object="${esc(target.id)}" transform="translate(${x} ${y}) rotate(${rotate}) scale(${scale})" role="button" tabindex="0" aria-label="${esc(target.name)}">
        <text x="38" y="42" text-anchor="middle" dominant-baseline="middle" font-size="58" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">${target.icon}</text>
        <rect x="-14" y="-14" width="104" height="104" rx="18" fill="transparent" pointer-events="all"/>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" aria-label="${esc(config.name)}">
      ${makeBackdrop(stageNumber,palette,random)}
      <text x="58" y="594" fill="${palette[2]}" opacity=".28" font-size="18" font-family="system-ui,sans-serif">CASE ${stageNumber} · ${esc(config.name)}</text>
      ${hidden}
    </svg>`;
  }

  configs.forEach((config,index) => HG.scenes.push({...config, svg:() => makeScene(config,index)}));
})();
