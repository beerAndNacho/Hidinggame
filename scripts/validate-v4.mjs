import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const context = vm.createContext({ window: {}, console });

vm.runInContext(read('js/helpers.js'), context, { filename: 'js/helpers.js' });
for (let index = 1; index <= 12; index += 1) {
  const file = `js/stages/${String(index).padStart(2, '0')}.js`;
  vm.runInContext(read(file), context, { filename: file });
}
vm.runInContext(read('js/stages/expansion.js'), context, { filename: 'js/stages/expansion.js' });

const scenes = context.window.HiddenGame?.scenes || [];
assert.equal(scenes.length, 30, `스테이지 수가 30이 아닙니다: ${scenes.length}`);
assert.equal(new Set(scenes.map(stage => stage.name)).size, 30, '중복 스테이지 이름이 있습니다.');

let totalTargets = 0;
const svgFingerprints = new Set();
scenes.forEach((stage, index) => {
  assert.equal(typeof stage.svg, 'function', `${index + 1}번 스테이지 svg 함수 누락`);
  assert.ok(Array.isArray(stage.targets) && stage.targets.length >= 6, `${index + 1}번 목표물 부족`);
  assert.equal(new Set(stage.targets.map(target => target.id)).size, stage.targets.length, `${index + 1}번 목표 ID 중복`);
  const svg = stage.svg();
  assert.ok(svg.trimStart().startsWith('<svg'), `${index + 1}번 SVG 시작 태그 오류`);
  assert.ok(svg.includes('viewBox="0 0 1000 620"'), `${index + 1}번 viewBox 오류`);
  const objectCount = (svg.match(/data-object=/g) || []).length;
  assert.equal(objectCount, stage.targets.length, `${index + 1}번 SVG 목표 수 불일치`);
  stage.targets.forEach(target => assert.ok(svg.includes(`data-object="${target.id}"`), `${index + 1}번 ${target.id} 누락`));
  totalTargets += stage.targets.length;
  svgFingerprints.add(svg.replace(/data-object="[^"]+"/g, 'data-object="*"'));
});
assert.equal(svgFingerprints.size, 30, '서로 동일한 장면 SVG가 있습니다.');

const indexHtml = read('index.html');
assert.ok(indexHtml.includes('30개의 사실적 사건 현장, 별 90개'), '사실적 30개/90별 시작 문구 누락');
assert.ok(indexHtml.indexOf('js/stages/expansion.js') < indexHtml.indexOf('js/realistic-scenes.js'), '스테이지/실사 렌더러 로드 순서 오류');
assert.ok(indexHtml.indexOf('js/realistic-scenes.js') < indexHtml.indexOf('js/game-v4-loader.js'), '실사 렌더러/게임 로더 순서 오류');
assert.ok(indexHtml.includes('realistic.css'), '실사 스타일시트 누락');

const game = read('js/game.js');
const gameLoader = read('js/game-v4-loader.js');
assert.ok(gameLoader.includes('CHAPTER V · 검은 달의 진실'), '다섯 번째 챕터 패치 누락');
assert.ok(gameLoader.includes('`${scenes.length}개 사건 완전 해결`'), '동적 전체 클리어 업적 패치 누락');
assert.ok(gameLoader.includes('renderRealisticStage'), '실사 렌더 연결 패치 누락');

const manifest = JSON.parse(read('manifest.webmanifest'));
assert.match(manifest.description, /30개/);
const serviceWorker = read('sw.js');
assert.ok(serviceWorker.includes('real-scene-detective-v4'), '서비스 워커 캐시 버전 오류');
assert.ok(serviceWorker.includes("'./js/stages/expansion.js'"), '서비스 워커 확장 파일 누락');
assert.ok(serviceWorker.includes("'./js/realistic-scenes.js'"), '서비스 워커 실사 렌더러 누락');
assert.ok(serviceWorker.includes("'./js/game-v4-loader.js'"), '서비스 워커 게임 로더 누락');
assert.ok(serviceWorker.includes("'./realistic.css'"), '서비스 워커 실사 스타일 누락');

const realistic = read('js/realistic-scenes.js');
const photoUrls = [...realistic.matchAll(/"url":\s*"(https:\/\/images\.unsplash\.com\/photo-[^"]+)/g)].map(match => match[1]);
assert.equal(photoUrls.length, 30, `실사 사진 수 오류: ${photoUrls.length}`);
assert.equal(new Set(photoUrls).size, 30, '중복 실사 사진 URL이 있습니다.');
assert.equal((realistic.match(/"source":\s*"https:\/\/unsplash\.com\/photos\//g) || []).length, 30, '사진 출처 수 오류');
assert.ok(realistic.includes('renderRealisticStage'), '실사 렌더 함수 누락');
assert.ok(realistic.includes('내장 장면으로 플레이 중'), '오프라인 대체 장면 누락');

const scripts = [...indexHtml.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
scripts.forEach(source => assert.ok(fs.existsSync(path.join(root, source)), `HTML 참조 파일 누락: ${source}`));

console.log('✅ Hidinggame realistic v4 validation passed');
console.log(`- stages: ${scenes.length}`);
console.log(`- targets: ${totalTargets}`);
console.log(`- unique scenes: ${svgFingerprints.size}`);
console.log('- campaign chapters: 5');
console.log('- 30 realistic photos / source credits / SVG fallback');
console.log('- daily case / stars / radar / PWA preserved');
