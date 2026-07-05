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
