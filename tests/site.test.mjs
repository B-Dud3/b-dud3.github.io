import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const home = () => readFileSync('dist/index.html', 'utf8');

test('build produces a home page with Brandon name', () => {
  assert.ok(existsSync('dist/index.html'), 'dist/index.html missing — run npm run build first');
  assert.match(home(), /Brandon LiWang/);
});

test('home page has hero contact links and tagline', () => {
  const h = home();
  assert.match(h, /liwang\.brandon@gmail\.com/);
  assert.match(h, /github\.com\/B-Dud3/);
  assert.match(h, /linkedin\.com\/in\/brandon-liwang/);
});

test('home page has skills and experience content', () => {
  const h = home();
  assert.match(h, /MESA Lab/);
  assert.match(h, /SolidWorks/);
  assert.match(h, /University of California, Berkeley/);
});

test('resume PDF is published and linked', () => {
  assert.ok(existsSync('dist/resume.pdf'), 'dist/resume.pdf missing');
  assert.match(home(), /\/Personal-Website\/resume\.pdf/);
});

test('home page lists all four projects', () => {
  const h = home();
  assert.match(h, /Methane-Seeking Unmanned Ground Vehicle/);
  assert.match(h, /Handheld Rolling Sensor Platform/);
  assert.match(h, /Machine Learning High-Five Counter/);
  assert.match(h, /3D Printed Bow Quiver/);
});

test('project cards link through the base path', () => {
  assert.match(home(), /href="\/Personal-Website\/projects\/ugv-methane\/"/);
});

test('every project has a case-study page', () => {
  for (const slug of ['ugv-methane', 'rolling-sensor-platform', 'high-five-counter', 'bow-quiver']) {
    assert.ok(
      existsSync(`dist/projects/${slug}/index.html`),
      `missing dist/projects/${slug}/index.html`
    );
  }
});

test('UGV case study includes the publication and a home link', () => {
  const h = readFileSync('dist/projects/ugv-methane/index.html', 'utf8');
  assert.match(h, /empirical observability Gramian/);
  assert.match(h, /href="\/Personal-Website\/"/);
});

test('404 page exists', () => {
  assert.ok(existsSync('dist/404.html'));
});

test('paper is described as accepted, not published', () => {
  const h = home();
  assert.match(h, /accepted for publication in IEEE/);
  assert.match(h, /Accepted \(in press\)/);
  assert.doesNotMatch(h, /published in IEEE/i);
});

test('rolling sensor platform is framed solo', () => {
  const h = readFileSync('dist/projects/rolling-sensor-platform/index.html', 'utf8');
  assert.match(h, /I needed a low-cost/);
  assert.doesNotMatch(h, /We needed/);
});
