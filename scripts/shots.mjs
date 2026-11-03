// Takes full-page screenshots of every page at desktop and phone width.
import { chromium } from 'playwright';
import fs from 'node:fs';
const out = process.argv[2] || 'shots';
const only = process.argv[3];
fs.mkdirSync(out, { recursive: true });
const pages = ['/', '/projects', '/projects/hybrid-restaurant-recommender', '/projects/norman-pd-incident-pipeline', '/projects/censor-tool', '/experience', '/writing', '/writing/incident-datasheet', '/resume', '/contact', '/404'];
const b = await chromium.launch();
for (const [name, viewport] of [['d', { width: 1440, height: 900 }], ['m', { width: 390, height: 844 }]]) {
  const ctx = await b.newContext({ viewport, reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  for (const path of pages) {
    if (only && path !== only) continue;
    await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 0) console.log('OVERFLOW', name, path, overflow);
    await p.screenshot({ path: `${out}/${name}${path.replace(/\//g, '_') || '_'}.png`, fullPage: true });
  }
  await ctx.close();
}
await b.close();
