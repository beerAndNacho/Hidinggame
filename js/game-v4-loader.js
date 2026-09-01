(() => {
  'use strict';

  const replacements = [
  [
    "    { name: 'CHAPTER III · 바람과 얼음', desc: '빗속 플랫폼, 정글 신전, 비행선과 얼음 궁전을 가로지르는 확장 수사' },\n    { name: 'CHAPTER IV · 최후의 기록', desc: '용의 동굴부터 달빛 탐정 본부까지, 전설을 완성하는 마지막 사건' }\n",
    "    { name: 'CHAPTER III · 바람과 얼음', desc: '빗속 플랫폼, 정글 신전, 비행선과 얼음 궁전을 가로지르는 확장 수사' },\n    { name: 'CHAPTER IV · 최후의 기록', desc: '용왕의 동굴부터 사탕 연구실까지 이어지는 여섯 개의 고난도 사건' },\n    { name: 'CHAPTER V · 검은 달의 진실', desc: '공룡 협곡에서 리얼 탐정단 본부까지 이어지는 마지막 여섯 사건' }\n"
  ],
  [
    "    els.scene.innerHTML = stage.svg();\n    els.stageName.textContent = stage.name;\n    els.stageDesc.textContent = stage.desc;\n",
    "    const realisticRenderer = window.HiddenGame?.renderRealisticStage;\n    els.scene.innerHTML = typeof realisticRenderer === 'function'\n      ? realisticRenderer(stage, state.stageIndex)\n      : stage.svg();\n    window.HiddenGame?.hydrateRealisticStage?.(els.scene, state.stageIndex);\n    els.stageName.textContent = stage.name;\n    els.stageDesc.textContent = `${stage.desc} 사진 속 빛, 재질, 원근과 겹침을 자세히 살펴보세요.`;\n"
  ],
  [
    "  function handleSceneClick(event) {\n    if (!state.running || state.paused || state.finishing) return;\n    const target = event.target.closest?.('[data-object]');\n",
    "  function handleSceneClick(event) {\n    if (!state.running || state.paused || state.finishing) return;\n    if (event.target.closest?.('[data-scene-ui]')) return;\n    const target = event.target.closest?.('[data-object]');\n"
  ],
  [
    "award('allClear', '24개 사건 완전 해결', Object.keys(save.records).filter(key => recordFor(Number(key)).stars > 0).length >= scenes.length);",
    "award('allClear', `${scenes.length}개 사건 완전 해결`, Object.keys(save.records).filter(key => recordFor(Number(key)).stars > 0).length >= scenes.length);"
  ],
  [
    "? `24개의 픽셀 사건을 모두 해결했습니다. ${bonusParts.join(' · ')}`",
    "? `${scenes.length}개의 사실적 사건을 모두 해결했습니다. ${bonusParts.join(' · ')}`"
  ],
  [
    "  window.__PIXEL_DETECTIVE__ = {\n    scenes,\n    get save() { return save; },\n    get state() { return state; },\n    startCase,\n    startDaily\n  };\n})();\n",
    "  window.__PIXEL_DETECTIVE__ = {\n    scenes,\n    realisticScenes: window.HiddenGame?.realisticScenes || [],\n    get save() { return save; },\n    get state() { return state; },\n    startCase,\n    startDaily,\n    renderStage\n  };\n  window.__REAL_SCENE_DETECTIVE__ = window.__PIXEL_DETECTIVE__;\n})();\n"
  ]
];

  function patchSource(source) {
    let patched = source;
    for (const [find, replacement] of replacements) {
      const count = patched.split(find).length - 1;
      if (count !== 1) throw new Error(`게임 패치 대상 수 오류: ${count}`);
      patched = patched.replace(find, replacement);
    }
    return patched;
  }

  async function boot() {
    const response = await fetch('./js/game.js', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`game.js 로드 실패: ${response.status}`);
    const source = patchSource(await response.text());
    (0, eval)(`${source}
//# sourceURL=js/game-v4-runtime.js`);
  }

  boot().catch(error => {
    console.error(error);
    document.body.insertAdjacentHTML('beforeend', '<div class="boot-error" role="alert">게임을 불러오지 못했습니다. 페이지를 새로고침해 주세요.</div>');
  });
})();
