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

test('home page lists the three published projects only', () => {
  const h = home();
  assert.match(h, /Methane-Seeking Unmanned Ground Vehicle/);
  assert.match(h, /Handheld Rolling Sensor Platform/);
  assert.match(h, /Machine Learning High-Five Counter/);
  assert.doesNotMatch(h, /3D Printed Bow Quiver/);
  assert.equal(h.split('card-link').length - 1, 3);
});

test('project cards link through the base path', () => {
  assert.match(home(), /href="\/Personal-Website\/projects\/ugv-methane\/"/);
});

test('published projects have pages; draft does not', () => {
  for (const slug of ['ugv-methane', 'rolling-sensor-platform', 'high-five-counter']) {
    assert.ok(existsSync(`dist/projects/${slug}/index.html`), `missing ${slug}`);
  }
  assert.ok(!existsSync('dist/projects/bow-quiver/index.html'), 'draft bow-quiver was built');
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

test('persistent header nav on home and project pages', () => {
  for (const html of [home(), readFileSync('dist/projects/ugv-methane/index.html', 'utf8')]) {
    assert.match(html, /href="\/Personal-Website\/#projects"/);
    assert.match(html, /href="\/Personal-Website\/#experience"/);
    assert.match(html, /href="\/Personal-Website\/#skills"/);
    assert.match(html, /href="\/Personal-Website\/resume\.pdf"/);
  }
});

test('home sections are ordered Projects, Experience, Skills', () => {
  const h = home();
  assert.ok(h.indexOf('id="projects"') < h.indexOf('id="experience"'), 'projects before experience');
  assert.ok(h.indexOf('id="experience"') < h.indexOf('id="skills"'), 'experience before skills');
});

test('/projects/ index page lists the three published projects', () => {
  assert.ok(existsSync('dist/projects/index.html'));
  const h = readFileSync('dist/projects/index.html', 'utf8');
  assert.equal(h.split('card-link').length - 1, 3);
});

test('prev/next links follow grid order without wraparound', () => {
  const ugv = readFileSync('dist/projects/ugv-methane/index.html', 'utf8');
  const mid = readFileSync('dist/projects/rolling-sensor-platform/index.html', 'utf8');
  const last = readFileSync('dist/projects/high-five-counter/index.html', 'utf8');
  assert.match(ugv, /href="\/Personal-Website\/projects\/rolling-sensor-platform\/"/);
  assert.doesNotMatch(ugv, /href="\/Personal-Website\/projects\/high-five-counter\/"/);
  assert.match(mid, /href="\/Personal-Website\/projects\/ugv-methane\/"/);
  assert.match(mid, /href="\/Personal-Website\/projects\/high-five-counter\/"/);
  assert.match(last, /href="\/Personal-Website\/projects\/rolling-sensor-platform\/"/);
  assert.doesNotMatch(last, /href="\/Personal-Website\/projects\/ugv-methane\/"/);
});

test('project dates render on cards and case-study pages', () => {
  const h = home();
  for (const d of ['Aug 2025', 'Mar 2025', 'Dec 2024']) assert.match(h, new RegExp(d));
  assert.match(readFileSync('dist/projects/ugv-methane/index.html', 'utf8'), /Aug 2025/);
});

test('UGV page shows the My role callout', () => {
  assert.match(readFileSync('dist/projects/ugv-methane/index.html', 'utf8'), /My role:/);
});

test('publication is a highlighted callout inside experience', () => {
  const h = home();
  const exp = h.slice(h.indexOf('id="experience"'), h.indexOf('id="skills"'));
  assert.match(exp, /class="pub[" ]/);
  assert.match(exp, /Accepted \(in press\)/);
});

test('OG and twitter tags with correct images', () => {
  const h = home();
  assert.match(h, /property="og:image" content="https:\/\/b-dud3\.github\.io\/Personal-Website\/og-default\.jpg"/);
  assert.match(h, /name="twitter:card" content="summary_large_image"/);
  const ugv = readFileSync('dist/projects/ugv-methane/index.html', 'utf8');
  assert.match(ugv, /property="og:image" content="https:\/\/b-dud3\.github\.io\/Personal-Website\/_astro\//);
});

test('canonical URLs are absolute', () => {
  assert.match(home(), /rel="canonical" href="https:\/\/b-dud3\.github\.io\/Personal-Website\/"/);
  assert.match(
    readFileSync('dist/projects/ugv-methane/index.html', 'utf8'),
    /rel="canonical" href="https:\/\/b-dud3\.github\.io\/Personal-Website\/projects\/ugv-methane\/"/
  );
});

test('home title targets robotics search', () => {
  assert.match(home(), /<title>Brandon LiWang — Mechanical Engineer, Robotics &amp; Autonomous Systems<\/title>/);
});

test('JSON-LD Person schema on home', () => {
  const h = home();
  assert.match(h, /application\/ld\+json/);
  assert.match(h, /"@type":"Person"/);
  assert.match(h, /"name":"Brandon LiWang"/);
});

test('robots.txt and sitemap are published', () => {
  assert.ok(existsSync('dist/robots.txt'));
  assert.match(readFileSync('dist/robots.txt', 'utf8'), /Sitemap: https:\/\/b-dud3\.github\.io\/Personal-Website\/sitemap-index\.xml/);
  assert.ok(existsSync('dist/sitemap-index.xml'));
});
