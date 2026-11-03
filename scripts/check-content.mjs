// Runs before every build. Fails if a project file is incomplete, still has
// template text, or contains a phone number.
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/content/projects';
const required = ['Problem', 'My role', 'Architecture', 'Key decisions and trade-offs', 'Results', 'Failures and limits'];
const placeholders = ['Replace with', 'What was broken', 'What you personally did', 'Project name', 'One sentence, under'];
const blocked = [/\b\d{3}[-. ]\d{3}[-. ]\d{4}\b/];
const stock = ['leverag', 'utiliz', 'robust', 'seamless', 'cutting-edge', 'delve', 'pivotal', 'showcas', 'spearhead', 'not just', 'not only'];
let errors = 0;
const fail = (file, msg) => { console.error(`✗ ${file}: ${msg}`); errors += 1; };

const featured = [];
for (const name of fs.readdirSync(dir)) {
  if (name.startsWith('_') || !/\.mdx?$/.test(name)) continue;
  const text = fs.readFileSync(path.join(dir, name), 'utf8');
  const front = text.split('---')[1] ?? '';
  const flag = (key) => new RegExp(`^${key}:\\s*true`, 'm').test(front);
  if (flag('draft')) continue;
  for (const re of blocked) if (re.test(text)) fail(name, `contains a phone number`);
  for (const w of stock) if (text.toLowerCase().includes(w)) fail(name, `stock phrase: "${w}" (see WRITING.md)`);
  if (flag('featured')) featured.push(name);
  if (flag('archive')) continue;
  for (const h of required) {
    if (!new RegExp(`^## ${h}\\s*$`, 'm').test(text)) fail(name, `missing section "## ${h}"`);
  }
  for (const p of placeholders) if (text.includes(p)) fail(name, `still has template text: "${p}"`);
}
if (featured.length === 0) fail('projects', 'no project has featured: true, so the homepage would be empty');
if (errors) { console.error(`\n${errors} problem(s) found.`); process.exit(1); }
console.log(`✓ Content check passed. Featured projects: ${featured.length}.`);
