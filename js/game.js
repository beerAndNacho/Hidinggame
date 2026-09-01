(() => {
  'use strict';

  const scenes = window.HiddenGame?.scenes || [];
  if (!scenes.length) throw new Error('스테이지 데이터가 로드되지 않았습니다.');

  const $ = selector => document.querySelector(selector);
  const els = {
    scene: $('#scene'),
    shell: $('#sceneShell'),
    toast: $('#toast'),
    targetList: $('#targetList'),
    stageHud: $('#stageHud'),
    timerHud: $('#timerHud'),
    timerCard: $('#timerCard'),
    scoreHud: $('#scoreHud'),
    starHud: $('#starHud'),
    bestHud: $('#bestHud'),
    stageLabel: $('#stageLabel'),
    stageName: $('#stageName'),
    stageDesc: $('#stageDesc'),
    foundCount: $('#foundCount'),
    progressBar: $('#progressBar'),
    caseRoute: $('#caseRoute'),
    hintBtn: $('#hintBtn'),
    hintCount: $('#hintCount'),
    radarBtn: $('#radarBtn'),
    radarCount: $('#radarCount'),
    pauseBtn: $('#pauseBtn'),
    soundBtn: $('#soundBtn'),
    comboHud: $('#comboHud'),
    mistakeHud: $('#mistakeHud'),
    hintUsedHud: $('#hintUsedHud'),
    comboChip: $('#comboChip'),
    modeRibbon: $('#modeRibbon'),
    missionCard: $('#missionCard'),
    missionText: $('#missionText'),
    startOverlay: $('#startOverlay'),
    mapOverlay: $('#mapOverlay'),
    resultOverlay: $('#resultOverlay'),
    pauseOverlay: $('#pauseOverlay'),
    continueBtn: $('#continueBtn'),
    newGameBtn: $('#newGameBtn'),
    dailyBtn: $('#dailyBtn'),
    startMapBtn: $('#startMapBtn'),
    mapBtn: $('#mapBtn'),
    closeMapBtn: $('#closeMapBtn'),
    worldMap: $('#worldMap'),
    nextBtn: $('#nextBtn'),
    replayBtn: $('#replayBtn'),
    resultMapBtn: $('#resultMapBtn'),
    resumeBtn: $('#resumeBtn'),
    pauseMapBtn: $('#pauseMapBtn'),
    resultIcon: $('#resultIcon'),
    resultEyebrow: $('#resultEyebrow'),
    resultTitle: $('#resultTitle'),
    resultStars: $('#resultStars'),
    resultMessage: $('#resultMessage'),
    resultScore: $('#resultScore'),
    timeBonus: $('#timeBonus'),
    maxCombo: $('#maxCombo'),
    resultMistakes: $('#resultMistakes'),
    recordBanner: $('#recordBanner'),
    unlockedStat: $('#unlockedStat'),
    startStarStat: $('#startStarStat'),
    startBestStat: $('#startBestStat')
  };

  const SAVE_KEY = 'pixelDetectiveSaveV2';
  const LEGACY_BEST_KEY = 'pixelHiddenBest';
  const MAX_COMBO = 6;
  const COMBO_WINDOW = 5000;
  const WRONG_TIME_PENALTY = 3;
  const TOTAL_STARS = scenes.length * 3;

  const worlds = [
    { name: 'CHAPTER I · 첫 번째 수사', desc: '마법 숲에서 장난감 공장까지, 탐정단의 첫 여섯 사건' },
    { name: 'CHAPTER II · 미지의 경계', desc: '유령 도서관에서 시간의 성까지 이어지는 기묘한 사건' },
    { name: 'CHAPTER III · 바람과 얼음', desc: '빗속 플랫폼, 정글 신전, 비행선과 얼음 궁전을 가로지르는 확장 수사' },
    { name: 'CHAPTER IV · 최후의 기록', desc: '용의 동굴부터 달빛 탐정 본부까지, 전설을 완성하는 마지막 사건' }
  ];

  function safeNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function loadSave() {
    const fallback = {
      version: 2,
      unlocked: 0,
      bestTotal: 0,
      records: {},
      achievements: [],
      daily: {},
      muted: false
    };

    try {
      const parsed = JSON.parse(window.localStorage.getItem(SAVE_KEY) || 'null');
      if (parsed && typeof parsed === 'object') {
        return {
          ...fallback,
          ...parsed,
          unlocked: clamp(safeNumber(parsed.unlocked), 0, scenes.length - 1),
          bestTotal: Math.max(0, safeNumber(parsed.bestTotal)),
          records: parsed.records && typeof parsed.records === 'object' ? parsed.records : {},
          achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
          daily: parsed.daily && typeof parsed.daily === 'object' ? parsed.daily : {},
          muted: Boolean(parsed.muted)
        };
      }
    } catch {}

    try {
      fallback.bestTotal = Math.max(0, safeNumber(window.localStorage.getItem(LEGACY_BEST_KEY)));
    } catch {}
    return fallback;
  }

  let save = loadSave();

  const state = {
    stageIndex: 0,
    mode: 'campaign',
    sessionScore: 0,
    stageScore: 0,
    timeLeft: scenes[0].time,
    totalTime: scenes[0].time,
    hints: 3,
    radar: 1,
    found: new Set(),
    combo: 1,
    maxCombo: 1,
    lastFoundAt: 0,
    mistakes: 0,
    hintsUsed: 0,
    radarUsed: 0,
    timerId: null,
    running: false,
    paused: false,
    finishing: false,
    muted: save.muted,
    audio: null,
    bgmId: null,
    mapReturn: 'start',
    nextAction: 'next',
    dailyDate: ''
  };

  function persistSave() {
    try {
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch {}
  }

  function recordFor(index) {
    const record = save.records[String(index)] || {};
    return {
      stars: clamp(safeNumber(record.stars), 0, 3),
      bestScore: Math.max(0, safeNumber(record.bestScore)),
      bestTime: Math.max(0, safeNumber(record.bestTime)),
      clears: Math.max(0, safeNumber(record.clears))
    };
  }

  function totalEarnedStars() {
    return scenes.reduce((sum, _stage, index) => sum + recordFor(index).stars, 0);
  }

  function unlockedCount() {
    return Math.min(scenes.length, save.unlocked + 1);
  }

  function firstIncompleteIndex() {
    for (let index = 0; index <= save.unlocked; index += 1) {
      if (recordFor(index).stars === 0) return index;
    }
    return save.unlocked;
  }

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function dailyStageIndex(dateKey) {
    let hash = 2166136261;
    for (const character of dateKey) {
      hash ^= character.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return Math.abs(hash >>> 0) % scenes.length;
  }

  function chapterFor(index) {
    return Math.min(worlds.length - 1, Math.floor(index / 6));
  }

  function formatStars(stars) {
    return `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
  }

  function renderStartStats() {
    const stars = totalEarnedStars();
    const continueIndex = firstIncompleteIndex();
    const today = localDateKey();
    const dailyIndex = dailyStageIndex(today);

    els.unlockedStat.textContent = `${unlockedCount()} / ${scenes.length}`;
    els.startStarStat.textContent = `${stars} / ${TOTAL_STARS}`;
    els.startBestStat.textContent = save.bestTotal.toLocaleString();
    els.continueBtn.textContent = recordFor(continueIndex).stars
      ? `${continueIndex + 1}번 사건 다시 도전`
      : `${continueIndex + 1}번 사건 이어하기`;
    els.dailyBtn.textContent = `📅 오늘의 사건 · ${scenes[dailyIndex].name}`;
  }

  function getMission(index = state.stageIndex) {
    const stage = scenes[index];
    const code = stage.missionCode || ['mistakes1', 'noHint', 'time35', 'combo5', 'noRadar', 'balanced'][index % 6];
    const textByCode = {
      mistakes1: '실수 1회 이하로 완료',
      noHint: '힌트를 사용하지 않고 완료',
      time35: '남은 시간 35% 이상',
      combo5: '최대 콤보 x5 이상',
      noRadar: '레이더를 사용하지 않고 완료',
      balanced: '실수 2회 이하 · 힌트 1회 이하',
      time45: '남은 시간 45초 이상',
      mistakes2Radar: '실수 2회 이하 · 레이더 미사용',
      hints1mistakes1: '힌트 1회 이하 · 실수 1회 이하',
      perfect: '실수 없이 완료',
      combo6: '최대 콤보 x6 달성',
      noRadarTime35: '레이더 미사용 · 남은 시간 35초 이상',
      noHintCombo5: '힌트 미사용 · 최대 콤보 x5 이상',
      mistakes1Time30: '실수 1회 이하 · 남은 시간 30초 이상',
      threeStar: '별 3개 조건으로 완료'
    };

    const passed = () => {
      switch (code) {
        case 'mistakes1': return state.mistakes <= 1;
        case 'noHint': return state.hintsUsed === 0;
        case 'time35': return state.timeLeft >= Math.ceil(state.totalTime * .35);
        case 'combo5': return state.maxCombo >= 5;
        case 'noRadar': return state.radarUsed === 0;
        case 'balanced': return state.mistakes <= 2 && state.hintsUsed <= 1;
        case 'time45': return state.timeLeft >= 45;
        case 'mistakes2Radar': return state.mistakes <= 2 && state.radarUsed === 0;
        case 'hints1mistakes1': return state.hintsUsed <= 1 && state.mistakes <= 1;
        case 'perfect': return state.mistakes === 0;
        case 'combo6': return state.maxCombo >= 6;
        case 'noRadarTime35': return state.radarUsed === 0 && state.timeLeft >= 35;
        case 'noHintCombo5': return state.hintsUsed === 0 && state.maxCombo >= 5;
        case 'mistakes1Time30': return state.mistakes <= 1 && state.timeLeft >= 30;
        case 'threeStar': return calculateStars() === 3;
        default: return false;
      }
    };

    return { code, text: stage.mission || textByCode[code] || '사건을 완벽하게 해결', passed };
  }

  function renderStage() {
    const stage = scenes[state.stageIndex];
    els.shell.querySelectorAll('.spark, .combo-float, .click-mark').forEach(element => element.remove());
    els.toast.classList.remove('show');

    state.totalTime = state.mode === 'daily'
      ? Math.max(55, Math.round(stage.time * .78))
      : stage.time;
    state.timeLeft = state.totalTime;
    state.hints = state.mode === 'daily' ? 1 : 3;
    state.radar = 1;
    state.found = new Set();
    state.combo = 1;
    state.maxCombo = 1;
    state.lastFoundAt = 0;
    state.mistakes = 0;
    state.hintsUsed = 0;
    state.radarUsed = 0;
    state.stageScore = 0;
    state.finishing = false;

    els.scene.innerHTML = stage.svg();
    els.stageName.textContent = stage.name;
    els.stageDesc.textContent = stage.desc;
    els.stageLabel.textContent = `${state.mode === 'daily' ? 'DAILY' : `STAGE ${String(state.stageIndex + 1).padStart(2, '0')}`} · ${stage.difficulty || '보통'} · ${worlds[chapterFor(state.stageIndex)].name.split(' · ')[0]}`;
    els.modeRibbon.textContent = state.mode === 'daily' ? '오늘의 사건 · 점수 1.5배' : `캠페인 · CH.${chapterFor(state.stageIndex) + 1}`;
    els.modeRibbon.classList.toggle('daily', state.mode === 'daily');
    els.targetList.innerHTML = stage.targets.map(target => `
      <li class="target" data-target-row="${target.id}">
        <span class="icon" aria-hidden="true">${target.icon}</span>
        <span>${target.name}</span>
      </li>`).join('');

    const mission = getMission();
    els.missionText.textContent = mission.text;
    els.missionCard.classList.remove('completed');
    updateHud();
    renderCaseRoute();
  }

  function renderCaseRoute() {
    els.caseRoute.innerHTML = scenes.map((stage, index) => {
      const record = recordFor(index);
      const unlocked = index <= save.unlocked;
      const current = index === state.stageIndex;
      const className = [
        'case-node',
        record.stars > 0 ? 'done' : '',
        current ? 'current' : ''
      ].filter(Boolean).join(' ');
      return `
        <button class="${className}" type="button" data-route-index="${index}" title="${index + 1}. ${stage.name}" ${unlocked ? '' : 'disabled'}>
          ${String(index + 1).padStart(2, '0')}
          ${record.stars ? `<span class="route-star">${'★'.repeat(record.stars)}</span>` : ''}
        </button>`;
    }).join('');
  }

  function renderWorldMap() {
    els.worldMap.innerHTML = worlds.map((world, worldIndex) => {
      const start = worldIndex * 6;
      const end = Math.min(start + 6, scenes.length);
      if (start >= scenes.length) return '';
      const indices = Array.from({ length: end - start }, (_, offset) => start + offset);
      const worldStars = indices.reduce((sum, index) => sum + recordFor(index).stars, 0);

      const cards = indices.map(index => {
        const stage = scenes[index];
        const record = recordFor(index);
        const unlocked = index <= save.unlocked;
        const classes = [
          'stage-card',
          record.stars ? 'complete' : '',
          index === state.stageIndex ? 'current' : ''
        ].filter(Boolean).join(' ');

        return `
          <button class="${classes}" type="button" data-map-index="${index}" ${unlocked ? '' : 'disabled'}>
            <span class="number">CASE ${String(index + 1).padStart(2, '0')} · ${stage.difficulty || '보통'}</span>
            <span class="name">${stage.name}</span>
            <span class="stars">${formatStars(record.stars)}</span>
            <span class="record">BEST ${record.bestScore.toLocaleString()}</span>
            ${unlocked ? '' : '<span class="lock" aria-hidden="true">🔒</span>'}
          </button>`;
      }).join('');

      return `
        <section class="world-section">
          <div class="world-head">
            <div><h3>${world.name}</h3><p>${world.desc}</p></div>
            <strong>${worldStars} / ${indices.length * 3} ★</strong>
          </div>
          <div class="world-grid">${cards}</div>
        </section>`;
    }).join('');
  }

  function openMap(returnTo = 'game') {
    state.mapReturn = returnTo;
    if (returnTo === 'game' && state.running) {
      state.paused = true;
      stopBgm();
    }
    els.startOverlay.hidden = true;
    els.resultOverlay.hidden = true;
    els.pauseOverlay.hidden = true;
    renderWorldMap();
    els.mapOverlay.hidden = false;
  }

  function closeMap() {
    els.mapOverlay.hidden = true;
    if (state.mapReturn === 'start') {
      renderStartStats();
      els.startOverlay.hidden = false;
    } else if (state.mapReturn === 'result') {
      els.resultOverlay.hidden = false;
    } else if (state.mapReturn === 'pause') {
      els.pauseOverlay.hidden = false;
    } else if (state.mapReturn === 'game' && state.running) {
      state.paused = false;
      startBgm();
    }
  }

  function startCase(index, options = {}) {
    const mode = options.mode || 'campaign';
    const resetSession = options.resetSession !== false;
    const safeIndex = clamp(safeNumber(index), 0, scenes.length - 1);

    if (mode === 'campaign' && safeIndex > save.unlocked) return;

    clearInterval(state.timerId);
    stopBgm();
    state.stageIndex = safeIndex;
    state.mode = mode;
    state.dailyDate = mode === 'daily' ? localDateKey() : '';
    if (resetSession) state.sessionScore = 0;
    state.running = true;
    state.paused = false;

    els.startOverlay.hidden = true;
    els.mapOverlay.hidden = true;
    els.resultOverlay.hidden = true;
    els.pauseOverlay.hidden = true;

    ensureAudio();
    renderStage();
    startTimer();
    startBgm();
    playSfx('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startDaily() {
    const date = localDateKey();
    const index = dailyStageIndex(date);
    startCase(index, { mode: 'daily', resetSession: true });
    showToast(`📅 ${date} 오늘의 사건: ${scenes[index].name}`);
  }

  function selectorEscape(value) {
    if (window.CSS?.escape) return window.CSS.escape(value);
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }

  function handleSceneClick(event) {
    if (!state.running || state.paused || state.finishing) return;
    const target = event.target.closest?.('[data-object]');
    if (target && !target.classList.contains('found')) {
      foundObject(target.dataset.object, target, event);
    } else {
      wrongClick(event);
    }
  }

  function foundObject(id, element, event) {
    if (state.found.has(id)) return;

    const now = performance.now();
    state.combo = state.lastFoundAt && now - state.lastFoundAt <= COMBO_WINDOW
      ? Math.min(MAX_COMBO, state.combo + 1)
      : 1;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.lastFoundAt = now;
    state.found.add(id);

    element.classList.remove('hinting', 'radar-pulse');
    element.classList.add('found');

    const base = state.mode === 'daily' ? 150 : 100;
    const gained = base * state.combo;
    state.stageScore += gained;
    state.sessionScore += gained;

    const row = els.targetList.querySelector(`[data-target-row="${selectorEscape(id)}"]`);
    if (row) row.classList.add('done');

    playSfx('found');
    showToast(state.combo > 1 ? `⚡ ${state.combo} 콤보! +${gained}` : `단서 발견! +${gained}`);
    createSparks(event);
    createComboFloat(event, `+${gained}${state.combo > 1 ? `  x${state.combo}` : ''}`);
    pulseCombo();
    updateHud();

    if (state.combo >= 6) queueAchievement('combo6', '번개 수사관 · 6콤보 달성');

    if (state.found.size === scenes[state.stageIndex].targets.length) {
      state.finishing = true;
      state.running = false;
      clearInterval(state.timerId);
      window.setTimeout(stageClear, 520);
    }
  }

  function wrongClick(event) {
    state.timeLeft = Math.max(0, state.timeLeft - WRONG_TIME_PENALTY);
    state.mistakes += 1;
    state.combo = 1;
    state.lastFoundAt = 0;
    state.stageScore = Math.max(0, state.stageScore - 25);
    state.sessionScore = Math.max(0, state.sessionScore - 25);

    playSfx('wrong');
    showToast(`여기는 아니에요! -${WRONG_TIME_PENALTY}초`);
    createWrongMark(event);
    updateHud();

    if (state.timeLeft <= 0) gameOver();
  }

  function createWrongMark(event) {
    const rect = els.shell.getBoundingClientRect();
    const mark = document.createElement('i');
    mark.className = 'click-mark';
    mark.style.left = `${event.clientX - rect.left}px`;
    mark.style.top = `${event.clientY - rect.top}px`;
    els.shell.appendChild(mark);
    mark.addEventListener('animationend', () => mark.remove(), { once: true });
  }

  function createSparks(event) {
    const rect = els.shell.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let index = 0; index < 8; index += 1) {
      const spark = document.createElement('i');
      const angle = Math.PI * 2 * index / 8;
      const distance = 30 + Math.random() * 28;
      spark.className = 'spark';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      spark.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
      els.shell.appendChild(spark);
      spark.addEventListener('animationend', () => spark.remove(), { once: true });
    }
  }

  function createComboFloat(event, text) {
    const rect = els.shell.getBoundingClientRect();
    const float = document.createElement('b');
    float.className = 'combo-float';
    float.textContent = text;
    float.style.left = `${event.clientX - rect.left}px`;
    float.style.top = `${event.clientY - rect.top - 8}px`;
    els.shell.appendChild(float);
    float.addEventListener('animationend', () => float.remove(), { once: true });
  }

  function pulseCombo() {
    els.comboChip.hidden = state.combo <= 1;
    els.comboChip.textContent = `COMBO x${state.combo}`;
    els.comboChip.classList.remove('hot');
    void els.comboChip.offsetWidth;
    els.comboChip.classList.add('hot');
  }

  function spendScore(amount) {
    state.stageScore = Math.max(0, state.stageScore - amount);
    state.sessionScore = Math.max(0, state.sessionScore - amount);
  }

  function useHint() {
    if (!state.running || state.paused || state.hints <= 0) return;
    const remaining = scenes[state.stageIndex].targets.filter(target => !state.found.has(target.id));
    if (!remaining.length) return;

    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    const element = els.scene.querySelector(`[data-object="${selectorEscape(pick.id)}"]`);
    state.hints -= 1;
    state.hintsUsed += 1;
    spendScore(75);

    if (element) {
      element.classList.add('hinting');
      window.setTimeout(() => element.classList.remove('hinting'), 2400);
    }

    playSfx('hint');
    showToast(`💡 “${pick.name}” 주변이 반짝입니다 · -75점`);
    updateHud();
  }

  function useRadar() {
    if (!state.running || state.paused || state.radar <= 0) return;
    const remaining = Array.from(els.scene.querySelectorAll('[data-object]')).filter(element => !element.classList.contains('found'));
    if (!remaining.length) return;

    state.radar -= 1;
    state.radarUsed += 1;
    spendScore(150);

    remaining.forEach((element, index) => {
      window.setTimeout(() => element.classList.add('radar-pulse'), index * 65);
      window.setTimeout(() => element.classList.remove('radar-pulse'), 2450 + index * 65);
    });

    playSfx('radar');
    showToast('📡 남은 단서의 신호를 포착했습니다 · -150점');
    updateHud();
  }

  function startTimer() {
    clearInterval(state.timerId);
    state.timerId = window.setInterval(() => {
      if (!state.running || state.paused) return;
      state.timeLeft -= 1;
      if (state.timeLeft <= 0) {
        state.timeLeft = 0;
        updateHud();
        gameOver();
        return;
      }
      if (state.timeLeft <= 10) playSfx('tick');
      updateHud();
    }, 1000);
  }

  function calculateStars() {
    if (state.found.size !== scenes[state.stageIndex].targets.length) return 0;
    const ratio = state.totalTime ? state.timeLeft / state.totalTime : 0;
    let stars = 1;
    if (ratio >= .2 && state.mistakes <= 3) stars = 2;
    if (ratio >= .4 && state.mistakes <= 1 && state.hintsUsed <= 1 && state.radarUsed === 0) stars = 3;
    return stars;
  }

  function queueAchievement(id, label) {
    if (save.achievements.includes(id)) return false;
    save.achievements.push(id);
    persistSave();
    showToast(`🏅 업적 달성: ${label}`);
    return true;
  }

  function collectClearAchievements(stars) {
    const unlocked = [];
    const award = (id, label, condition) => {
      if (condition && !save.achievements.includes(id)) {
        save.achievements.push(id);
        unlocked.push(label);
      }
    };

    award('firstClear', '첫 사건 해결', true);
    award('perfect', '무결점 수사', state.mistakes === 0);
    award('threeStar', '완벽한 추리', stars === 3);
    award('daily', '오늘의 탐정', state.mode === 'daily');
    award('star30', '베테랑 탐정', totalEarnedStars() >= 30);
    award('star60', '전설의 관찰자', totalEarnedStars() >= 60);
    award('allClear', '24개 사건 완전 해결', Object.keys(save.records).filter(key => recordFor(Number(key)).stars > 0).length >= scenes.length);
    return unlocked;
  }

  function stageClear() {
    clearInterval(state.timerId);
    stopBgm();
    state.finishing = false;

    const mission = getMission();
    const missionCompleted = mission.passed();
    const timeBonusValue = state.timeLeft * 10;
    const perfectBonus = state.mistakes === 0 ? 250 : 0;
    const missionBonus = missionCompleted ? 300 : 0;
    const addedBonus = timeBonusValue + perfectBonus + missionBonus;
    state.stageScore += addedBonus;
    state.sessionScore += addedBonus;
    const stars = calculateStars();

    let isNewRecord = false;
    if (state.mode === 'campaign') {
      const previous = recordFor(state.stageIndex);
      isNewRecord = state.stageScore > previous.bestScore || stars > previous.stars;
      save.records[String(state.stageIndex)] = {
        stars: Math.max(previous.stars, stars),
        bestScore: Math.max(previous.bestScore, state.stageScore),
        bestTime: Math.max(previous.bestTime, state.timeLeft),
        clears: previous.clears + 1
      };
      save.unlocked = Math.max(save.unlocked, Math.min(scenes.length - 1, state.stageIndex + 1));
      save.bestTotal = Math.max(save.bestTotal, state.sessionScore);
    } else {
      const previousDaily = save.daily[state.dailyDate] || {};
      isNewRecord = state.stageScore > safeNumber(previousDaily.bestScore);
      save.daily[state.dailyDate] = {
        stageIndex: state.stageIndex,
        bestScore: Math.max(safeNumber(previousDaily.bestScore), state.stageScore),
        stars: Math.max(safeNumber(previousDaily.stars), stars),
        clears: safeNumber(previousDaily.clears) + 1
      };
      save.bestTotal = Math.max(save.bestTotal, state.sessionScore);
    }

    const achievements = collectClearAchievements(stars);
    persistSave();
    renderStartStats();
    renderCaseRoute();
    updateHud();
    playSfx('clear');

    const isFinal = state.mode === 'campaign' && state.stageIndex === scenes.length - 1;
    els.resultIcon.textContent = isFinal ? '🏆' : state.mode === 'daily' ? '📅' : '✨';
    els.resultEyebrow.textContent = state.mode === 'daily' ? 'DAILY CASE CLOSED' : isFinal ? 'LEGEND COMPLETE' : 'CASE CLOSED';
    els.resultTitle.textContent = isFinal ? '모든 사건 해결!' : state.mode === 'daily' ? '오늘의 사건 완료!' : '스테이지 완료!';
    els.resultStars.innerHTML = [0, 1, 2].map(index => `<span class="${index < stars ? 'earned' : ''}">${index < stars ? '★' : '☆'}</span>`).join('');

    const bonusParts = [
      missionCompleted ? '보너스 임무 +300점' : '보너스 임무는 다음 도전에',
      state.mistakes === 0 ? '무실수 +250점' : `${state.mistakes}회 실수`
    ];
    if (achievements.length) bonusParts.push(`새 업적: ${achievements.join(', ')}`);
    els.resultMessage.textContent = isFinal
      ? `24개의 픽셀 사건을 모두 해결했습니다. ${bonusParts.join(' · ')}`
      : `${scenes[state.stageIndex].name} 해결 완료. ${bonusParts.join(' · ')}`;

    els.resultScore.textContent = state.stageScore.toLocaleString();
    els.timeBonus.textContent = `+${timeBonusValue.toLocaleString()}`;
    els.maxCombo.textContent = `x${state.maxCombo}`;
    els.resultMistakes.textContent = String(state.mistakes);
    els.recordBanner.hidden = !isNewRecord;
    els.recordBanner.textContent = state.mode === 'daily' ? '오늘의 사건 최고 기록 갱신!' : '새로운 스테이지 최고 기록!';

    if (state.mode === 'daily') {
      state.nextAction = 'home';
      els.nextBtn.textContent = '캠페인으로 돌아가기';
    } else if (isFinal) {
      state.nextAction = 'map';
      els.nextBtn.textContent = '완성된 사건 지도';
    } else {
      state.nextAction = 'next';
      els.nextBtn.textContent = '다음 스테이지';
    }

    els.resultOverlay.hidden = false;
  }

  function gameOver() {
    if (!state.running && !state.finishing) return;
    state.running = false;
    state.finishing = false;
    clearInterval(state.timerId);
    stopBgm();
    save.bestTotal = Math.max(save.bestTotal, state.sessionScore);
    persistSave();
    playSfx('gameover');

    els.resultIcon.textContent = '⏰';
    els.resultEyebrow.textContent = 'CASE STILL OPEN';
    els.resultTitle.textContent = '시간 종료!';
    els.resultStars.innerHTML = '<span>☆</span><span>☆</span><span>☆</span>';
    els.resultMessage.textContent = `이번 현장에서 ${state.found.size}개를 찾았습니다. 색보다 윤곽과 주변 패턴을 비교해 다시 도전해 보세요.`;
    els.resultScore.textContent = state.stageScore.toLocaleString();
    els.timeBonus.textContent = '+0';
    els.maxCombo.textContent = `x${state.maxCombo}`;
    els.resultMistakes.textContent = String(state.mistakes);
    els.recordBanner.hidden = true;
    state.nextAction = 'retry';
    els.nextBtn.textContent = '현재 사건 재도전';
    els.resultOverlay.hidden = false;
    updateHud();
  }

  function handleNextAction() {
    if (state.nextAction === 'retry') {
      startCase(state.stageIndex, { mode: state.mode, resetSession: true });
    } else if (state.nextAction === 'home') {
      showStartOverlay();
    } else if (state.nextAction === 'map') {
      openMap('result');
    } else {
      startCase(state.stageIndex + 1, { mode: 'campaign', resetSession: false });
    }
  }

  function showStartOverlay() {
    state.running = false;
    state.paused = false;
    state.finishing = false;
    clearInterval(state.timerId);
    stopBgm();
    els.resultOverlay.hidden = true;
    els.mapOverlay.hidden = true;
    els.pauseOverlay.hidden = true;
    renderStartStats();
    els.startOverlay.hidden = false;
  }

  function pauseGame() {
    if (!state.running || state.paused || state.finishing) return;
    state.paused = true;
    stopBgm();
    els.pauseOverlay.hidden = false;
  }

  function resumeGame() {
    if (!state.running) return;
    state.paused = false;
    els.pauseOverlay.hidden = true;
    startBgm();
  }

  function updateMissionStatus() {
    const mission = getMission();
    const passed = mission.passed();
    els.missionCard.classList.toggle('completed', passed);
  }

  function updateHud() {
    const stage = scenes[state.stageIndex];
    const total = stage.targets.length;
    const count = state.found.size;
    const stars = totalEarnedStars();

    els.stageHud.textContent = state.mode === 'daily' ? `D · ${state.stageIndex + 1}` : `${state.stageIndex + 1} / ${scenes.length}`;
    els.timerHud.textContent = state.timeLeft;
    els.scoreHud.textContent = state.sessionScore.toLocaleString();
    els.starHud.textContent = `${stars} / ${TOTAL_STARS}`;
    els.bestHud.textContent = save.bestTotal.toLocaleString();
    els.foundCount.textContent = `${count} / ${total}`;
    els.hintCount.textContent = state.hints;
    els.radarCount.textContent = state.radar;
    els.comboHud.textContent = `x${state.combo}`;
    els.mistakeHud.textContent = String(state.mistakes);
    els.hintUsedHud.textContent = String(state.hintsUsed);
    els.hintBtn.disabled = state.hints <= 0 || !state.running || state.paused;
    els.radarBtn.disabled = state.radar <= 0 || !state.running || state.paused;
    els.pauseBtn.disabled = !state.running || state.finishing;
    els.progressBar.style.width = `${total ? count / total * 100 : 0}%`;
    els.timerCard.classList.toggle('danger', state.timeLeft <= 10 && state.running && !state.paused);
    els.comboChip.hidden = state.combo <= 1;
    if (state.combo > 1) els.comboChip.textContent = `COMBO x${state.combo}`;
    updateMissionStatus();
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.remove('show');
    void els.toast.offsetWidth;
    els.toast.classList.add('show');
  }

  function ensureAudio() {
    if (state.audio) return state.audio;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    state.audio = new AudioContextClass();
    return state.audio;
  }

  function beep(frequency, duration = .08, type = 'square', volume = .035, delay = 0) {
    if (state.muted) return;
    const context = ensureAudio();
    if (!context) return;
    if (context.state === 'suspended') context.resume();

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .01);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .03);
  }

  function playSfx(name) {
    if (state.muted) return;
    const sounds = {
      start: () => [262, 330, 392, 523].forEach((frequency, index) => beep(frequency, .09, 'square', .035, index * .065)),
      found: () => [523, 659, 784].forEach((frequency, index) => beep(frequency, .075, 'square', .032, index * .045)),
      wrong: () => { beep(180, .16, 'sawtooth', .028); beep(120, .18, 'square', .023, .07); },
      hint: () => [660, 880, 990].forEach((frequency, index) => beep(frequency, .12, 'sine', .026, index * .08)),
      radar: () => [240, 420, 680, 920].forEach((frequency, index) => beep(frequency, .07, 'sine', .022, index * .075)),
      tick: () => beep(480, .035, 'square', .016),
      clear: () => [392, 523, 659, 784, 1047].forEach((frequency, index) => beep(frequency, .13, 'square', .036, index * .085)),
      gameover: () => [330, 277, 220, 165].forEach((frequency, index) => beep(frequency, .18, 'sawtooth', .023, index * .12))
    };
    sounds[name]?.();
  }

  function startBgm() {
    stopBgm();
    if (state.muted || !state.running || state.paused) return;
    ensureAudio();

    const roots = [261.63, 220, 196, 293.66, 164.81, 349.23, 146.83, 246.94];
    const root = roots[state.stageIndex % roots.length];
    const intervalSets = [
      [1, 1.25, 1.5, 2, 1.5, 1.25, 1.125, 1.5],
      [1, 1.2, 1.5, 1.8, 1.5, 1.2, 1.1, 1.35],
      [1, 1.333, 1.6, 2, 1.6, 1.333, 1.125, 1.5],
      [1, 1.5, 1.25, 1.75, 1.5, 1.25, 1.125, 1.333]
    ];
    const intervals = intervalSets[chapterFor(state.stageIndex) % intervalSets.length];
    let step = 0;

    const playStep = () => {
      if (!state.running || state.paused || state.muted) return;
      const frequency = root * intervals[step % intervals.length];
      beep(frequency, .11, 'square', .0075);
      if (step % 4 === 0) beep(root / 2, .18, 'triangle', .0055);
      step += 1;
    };

    playStep();
    state.bgmId = window.setInterval(playStep, state.mode === 'daily' ? 290 : 330);
  }

  function stopBgm() {
    clearInterval(state.bgmId);
    state.bgmId = null;
  }

  function toggleSound() {
    state.muted = !state.muted;
    save.muted = state.muted;
    persistSave();
    els.soundBtn.textContent = state.muted ? '🔇' : '🔊';
    els.soundBtn.setAttribute('aria-label', state.muted ? '소리 켜기' : '소리 끄기');
    if (state.muted) stopBgm();
    else {
      playSfx('hint');
      startBgm();
    }
  }

  els.scene.addEventListener('click', handleSceneClick);
  els.hintBtn.addEventListener('click', useHint);
  els.radarBtn.addEventListener('click', useRadar);
  els.pauseBtn.addEventListener('click', pauseGame);
  els.soundBtn.addEventListener('click', toggleSound);
  els.continueBtn.addEventListener('click', () => startCase(firstIncompleteIndex(), { mode: 'campaign', resetSession: true }));
  els.newGameBtn.addEventListener('click', () => startCase(0, { mode: 'campaign', resetSession: true }));
  els.dailyBtn.addEventListener('click', startDaily);
  els.startMapBtn.addEventListener('click', () => openMap('start'));
  els.mapBtn.addEventListener('click', () => openMap(state.running ? 'game' : 'start'));
  els.closeMapBtn.addEventListener('click', closeMap);
  els.nextBtn.addEventListener('click', handleNextAction);
  els.replayBtn.addEventListener('click', () => startCase(state.stageIndex, { mode: state.mode, resetSession: true }));
  els.resultMapBtn.addEventListener('click', () => openMap('result'));
  els.resumeBtn.addEventListener('click', resumeGame);
  els.pauseMapBtn.addEventListener('click', () => openMap('pause'));

  els.caseRoute.addEventListener('click', event => {
    const button = event.target.closest('[data-route-index]');
    if (!button || button.disabled) return;
    startCase(Number(button.dataset.routeIndex), { mode: 'campaign', resetSession: true });
  });

  els.worldMap.addEventListener('click', event => {
    const button = event.target.closest('[data-map-index]');
    if (!button || button.disabled) return;
    startCase(Number(button.dataset.mapIndex), { mode: 'campaign', resetSession: true });
  });

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key === 'h') useHint();
    if (key === 'r') useRadar();
    if (key === 'm') toggleSound();
    if (key === 'p' || event.key === 'Escape') {
      if (!els.mapOverlay.hidden) closeMap();
      else if (!els.pauseOverlay.hidden) resumeGame();
      else if (state.running) pauseGame();
    }
    if (event.key === 'Enter' && !els.startOverlay.hidden) {
      startCase(firstIncompleteIndex(), { mode: 'campaign', resetSession: true });
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.running && !state.paused && els.resultOverlay.hidden && els.mapOverlay.hidden) {
      pauseGame();
    }
  });

  state.stageIndex = firstIncompleteIndex();
  renderStage();
  renderStartStats();
  els.soundBtn.textContent = state.muted ? '🔇' : '🔊';
  els.soundBtn.setAttribute('aria-label', state.muted ? '소리 켜기' : '소리 끄기');

  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }

  window.__PIXEL_DETECTIVE__ = {
    scenes,
    get save() { return save; },
    get state() { return state; },
    startCase,
    startDaily
  };
})();
