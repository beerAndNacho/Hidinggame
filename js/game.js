(() => {
  'use strict';

  const scenes = window.HiddenGame?.scenes || [];
  if (!scenes.length) throw new Error('스테이지 데이터가 로드되지 않았습니다.');

  const $ = (selector) => document.querySelector(selector);
  const sceneEl = $('#scene');
  const shellEl = $('#sceneShell');
  const toastEl = $('#toast');
  const targetListEl = $('#targetList');
  const stageHud = $('#stageHud');
  const timerHud = $('#timerHud');
  const scoreHud = $('#scoreHud');
  const bestHud = $('#bestHud');
  const stageLabel = $('#stageLabel');
  const stageName = $('#stageName');
  const stageDesc = $('#stageDesc');
  const foundCount = $('#foundCount');
  const progressBar = $('#progressBar');
  const caseRoute = $('#caseRoute');
  const hintBtn = $('#hintBtn');
  const hintCount = $('#hintCount');
  const soundBtn = $('#soundBtn');
  const startOverlay = $('#startOverlay');
  const resultOverlay = $('#resultOverlay');
  const startBtn = $('#startBtn');
  const nextBtn = $('#nextBtn');
  const restartBtn = $('#restartBtn');

  function readStoredBest() {
    try { return Number(window.localStorage.getItem('pixelHiddenBest') || 0); }
    catch { return 0; }
  }

  const state = {
    stageIndex: 0, score: 0, timeLeft: scenes[0].time, hints: 4,
    found: new Set(), combo: 1, maxCombo: 1, lastFoundAt: 0,
    timerId: null, running: false, muted: false, audio: null,
    bgmId: null, best: readStoredBest(), clearedStages: new Set()
  };

  function renderStage() {
    const stage = scenes[state.stageIndex];
    shellEl.querySelectorAll('.spark, .combo-float, .click-mark').forEach(el => el.remove());
    toastEl.classList.remove('show');
    state.timeLeft = stage.time;
    state.found = new Set();
    state.combo = 1;
    state.maxCombo = 1;
    state.lastFoundAt = 0;
    sceneEl.innerHTML = stage.svg();
    stageHud.textContent = `${state.stageIndex + 1} / ${scenes.length}`;
    stageLabel.textContent = `STAGE ${String(state.stageIndex + 1).padStart(2,'0')} · ${stage.difficulty || (state.stageIndex < 3 ? '쉬움' : '보통')}`;
    stageName.textContent = stage.name;
    stageDesc.textContent = stage.desc;
    targetListEl.innerHTML = stage.targets.map(t => `<li class="target" data-target-row="${t.id}"><span class="icon" aria-hidden="true">${t.icon}</span><span>${t.name}</span></li>`).join('');
    updateHud();
    renderCaseRoute();
    bindSceneEvents();
  }

  function renderCaseRoute() {
    caseRoute.innerHTML = scenes.map((stage, index) => {
      const status = index === state.stageIndex ? 'current' : state.clearedStages.has(index) ? 'done' : '';
      const icon = state.clearedStages.has(index) ? '✓' : String(index + 1).padStart(2, '0');
      return `<span class="case-node ${status}" title="${index + 1}. ${stage.name}" aria-label="${stage.name}${status === 'done' ? ' 완료' : status === 'current' ? ' 진행 중' : ''}">${icon}</span>`;
    }).join('');
  }

  function bindSceneEvents() {
    sceneEl.onclick = event => {
      if (!state.running) return;
      const target = event.target.closest('[data-object]');
      if (target && !target.classList.contains('found')) foundObject(target.dataset.object, target, event);
      else wrongClick(event);
    };
  }

  function foundObject(id, element, event) {
    if (state.found.has(id)) return;
    const now = performance.now();
    state.combo = state.lastFoundAt && now - state.lastFoundAt <= 5000 ? Math.min(5, state.combo + 1) : 1;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.lastFoundAt = now;
    state.found.add(id);
    element.classList.remove('hinting');
    element.classList.add('found');
    const gained = 100 * state.combo;
    state.score += gained;
    const row = targetListEl.querySelector(`[data-target-row="${CSS.escape(id)}"]`);
    if (row) row.classList.add('done');
    playSfx('found');
    showToast(state.combo > 1 ? `⚡ ${state.combo} 콤보! +${gained}` : `찾았다! +${gained}`);
    createSparks(event);
    createComboFloat(event, `+${gained}${state.combo > 1 ? `  x${state.combo}` : ''}`);
    updateHud();
    if (state.found.size === scenes[state.stageIndex].targets.length) window.setTimeout(stageClear, 650);
  }

  function wrongClick(event) {
    state.timeLeft = Math.max(0, state.timeLeft - 3);
    state.combo = 1;
    state.lastFoundAt = 0;
    playSfx('wrong');
    showToast('아앗, 여기는 아니에요! -3초');
    const rect = shellEl.getBoundingClientRect();
    const mark = document.createElement('i');
    mark.className = 'click-mark';
    mark.style.left = `${event.clientX - rect.left}px`;
    mark.style.top = `${event.clientY - rect.top}px`;
    shellEl.appendChild(mark);
    mark.addEventListener('animationend', () => mark.remove());
    updateHud();
    if (state.timeLeft <= 0) gameOver();
  }

  function createSparks(event) {
    const rect = shellEl.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    for (let i = 0; i < 8; i++) {
      const spark = document.createElement('i');
      spark.className = 'spark';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      const angle = Math.PI * 2 * i / 8;
      const distance = 30 + Math.random() * 28;
      spark.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      spark.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
      shellEl.appendChild(spark);
      spark.addEventListener('animationend', () => spark.remove());
    }
  }

  function createComboFloat(event, text) {
    const rect = shellEl.getBoundingClientRect();
    const float = document.createElement('b');
    float.className = 'combo-float';
    float.textContent = text;
    float.style.left = `${event.clientX - rect.left}px`;
    float.style.top = `${event.clientY - rect.top - 8}px`;
    shellEl.appendChild(float);
    float.addEventListener('animationend', () => float.remove());
  }

  function useHint() {
    if (!state.running || state.hints <= 0) return;
    const remaining = scenes[state.stageIndex].targets.filter(t => !state.found.has(t.id));
    if (!remaining.length) return;
    state.hints -= 1;
    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    const element = sceneEl.querySelector(`[data-object="${CSS.escape(pick.id)}"]`);
    if (element) {
      element.classList.add('hinting');
      window.setTimeout(() => element.classList.remove('hinting'), 2200);
    }
    playSfx('hint');
    showToast(`💡 “${pick.name}” 주변이 반짝여요`);
    updateHud();
  }

  function startTimer() {
    clearInterval(state.timerId);
    state.timerId = setInterval(() => {
      if (!state.running) return;
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

  function stageClear() {
    if (!state.running) return;
    state.running = false;
    clearInterval(state.timerId);
    const bonus = state.timeLeft * 10;
    state.score += bonus;
    state.clearedStages.add(state.stageIndex);
    renderCaseRoute();
    saveBest();
    playSfx('clear');
    $('#resultIcon').textContent = state.stageIndex === scenes.length - 1 ? '🏆' : '✨';
    $('#resultTitle').textContent = state.stageIndex === scenes.length - 1 ? '모든 사건 해결!' : '스테이지 완료!';
    $('#resultMessage').textContent = state.stageIndex === scenes.length - 1 ? '열두 개의 픽셀 사건을 모두 해결했습니다. 진정한 전설의 픽셀 탐정이에요!' : `좋은 관찰력이에요. 다음 사건은 ${scenes[state.stageIndex + 1].name}입니다.`;
    $('#resultScore').textContent = state.score.toLocaleString();
    $('#timeBonus').textContent = `+${bonus.toLocaleString()}`;
    $('#maxCombo').textContent = `x${state.maxCombo}`;
    nextBtn.textContent = state.stageIndex === scenes.length - 1 ? '한 번 더 도전' : '다음 스테이지';
    resultOverlay.hidden = false;
    updateHud();
  }

  function gameOver() {
    if (!state.running) return;
    state.running = false;
    clearInterval(state.timerId);
    playSfx('gameover');
    saveBest();
    $('#resultIcon').textContent = '⏰';
    $('#resultTitle').textContent = '시간 종료!';
    $('#resultMessage').textContent = `이번 장소에서 ${state.found.size}개를 찾았습니다. 물건의 색과 주변 윤곽을 비교하면 더 빠르게 찾을 수 있어요.`;
    $('#resultScore').textContent = state.score.toLocaleString();
    $('#timeBonus').textContent = '+0';
    $('#maxCombo').textContent = `x${state.maxCombo}`;
    nextBtn.textContent = '현재 스테이지 재도전';
    nextBtn.dataset.retry = 'true';
    resultOverlay.hidden = false;
    updateHud();
  }

  function nextStage() {
    const retry = nextBtn.dataset.retry === 'true';
    nextBtn.dataset.retry = 'false';
    resultOverlay.hidden = true;
    if (retry) renderStage();
    else if (state.stageIndex < scenes.length - 1) {
      state.stageIndex += 1;
      state.hints = Math.min(5, state.hints + 1);
      renderStage();
    } else resetGame();
    state.running = true;
    updateHud();
    startTimer();
    startBgm();
  }

  function resetGame() {
    clearInterval(state.timerId);
    state.stageIndex = 0;
    state.score = 0;
    state.hints = 4;
    state.found = new Set();
    state.combo = 1;
    state.maxCombo = 1;
    state.clearedStages = new Set();
    renderStage();
    resultOverlay.hidden = true;
    updateHud();
  }

  function startGame() {
    ensureAudio();
    startOverlay.hidden = true;
    resetGame();
    state.running = true;
    updateHud();
    startTimer();
    startBgm();
    playSfx('start');
  }

  function updateHud() {
    const total = scenes[state.stageIndex].targets.length;
    const count = state.found.size;
    timerHud.textContent = state.timeLeft;
    scoreHud.textContent = state.score.toLocaleString();
    bestHud.textContent = state.best.toLocaleString();
    foundCount.textContent = `${count} / ${total}`;
    hintCount.textContent = state.hints;
    hintBtn.disabled = state.hints <= 0 || !state.running;
    progressBar.style.width = `${count / total * 100}%`;
    timerHud.closest('.hud-card').classList.toggle('danger', state.timeLeft <= 10 && state.running);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.remove('show');
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
  }

  function saveBest() {
    if (state.score > state.best) {
      state.best = state.score;
      try { window.localStorage.setItem('pixelHiddenBest', String(state.best)); } catch {}
    }
  }

  function ensureAudio() {
    if (state.audio) return state.audio;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    state.audio = new AudioContext();
    return state.audio;
  }

  function beep(freq, duration=.08, type='square', volume=.035, delay=0) {
    if (state.muted) return;
    const ctx = ensureAudio();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + .01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + duration + .03);
  }

  function playSfx(name) {
    if (state.muted) return;
    const sounds = {
      start: () => [262,330,392,523].forEach((f,i)=>beep(f,.09,'square',.04,i*.07)),
      found: () => [523,659,784].forEach((f,i)=>beep(f,.075,'square',.035,i*.045)),
      wrong: () => { beep(180,.16,'sawtooth',.03); beep(120,.18,'square',.025,.07); },
      hint: () => [660,880,990].forEach((f,i)=>beep(f,.12,'sine',.028,i*.08)),
      tick: () => beep(480,.035,'square',.018),
      clear: () => [392,523,659,784,1047].forEach((f,i)=>beep(f,.13,'square',.04,i*.09)),
      gameover: () => [330,277,220,165].forEach((f,i)=>beep(f,.18,'sawtooth',.025,i*.12))
    };
    sounds[name]?.();
  }

  function startBgm() {
    clearInterval(state.bgmId);
    if (state.muted || !state.running) return;
    ensureAudio();
    const patterns = [
      [261.63,329.63,392,523.25,392,329.63,293.66,392],
      [220,277.18,329.63,440,329.63,277.18,246.94,329.63],
      [196,246.94,293.66,392,293.66,246.94,220,293.66],
      [293.66,369.99,440,587.33,440,369.99,329.63,440],
      [164.81,246.94,329.63,392,329.63,246.94,196,293.66],
      [349.23,440,523.25,698.46,523.25,440,392,523.25],
      [146.83,220,293.66,349.23,293.66,220,174.61,261.63],
      [261.63,369.99,493.88,659.25,493.88,369.99,293.66,440],
      [220,261.63,329.63,415.3,329.63,261.63,233.08,311.13],
      [329.63,392,523.25,659.25,523.25,392,349.23,493.88],
      [164.81,246.94,311.13,415.3,311.13,246.94,196,293.66],
      [123.47,185,246.94,311.13,246.94,185,146.83,220]
    ];
    let step = 0;
    const playStep = () => {
      if (!state.running || state.muted) return;
      const notes = patterns[state.stageIndex % patterns.length];
      beep(notes[step % notes.length], .11, 'square', .008);
      if (step % 4 === 0) beep(notes[0] / 2, .18, 'triangle', .006);
      step += 1;
    };
    playStep();
    state.bgmId = setInterval(playStep, 330);
  }

  function toggleSound() {
    state.muted = !state.muted;
    soundBtn.textContent = state.muted ? '🔇' : '🔊';
    soundBtn.setAttribute('aria-label', state.muted ? '소리 켜기' : '소리 끄기');
    if (state.muted) clearInterval(state.bgmId);
    else { playSfx('hint'); startBgm(); }
  }

  startBtn.addEventListener('click', startGame);
  hintBtn.addEventListener('click', useHint);
  soundBtn.addEventListener('click', toggleSound);
  nextBtn.addEventListener('click', nextStage);
  restartBtn.addEventListener('click', () => {
    nextBtn.dataset.retry = 'false';
    resultOverlay.hidden = true;
    resetGame();
    state.running = true;
    updateHud();
    startTimer();
    startBgm();
  });
  document.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'h') useHint();
    if (event.key.toLowerCase() === 'm') toggleSound();
    if (event.key === 'Enter' && !startOverlay.hidden) startGame();
  });
  renderStage();
  bestHud.textContent = state.best.toLocaleString();
})();
