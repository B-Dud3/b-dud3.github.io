import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const home = () => readFileSync('dist/index.html', 'utf8');

test('build produces a home page with Brandon name', () => {
  assert.ok(existsSync('dist/index.html'), 'dist/index.html missing — run npm run build first');
  assert.match(home(), /Brandon LiWang/);
});
