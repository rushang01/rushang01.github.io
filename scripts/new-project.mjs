// Usage: npm run new:project my-project-slug
import fs from 'node:fs';
const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new:project my-project-slug (lowercase letters, numbers and hyphens)');
  process.exit(1);
}
const target = `src/content/projects/${slug}.mdx`;
if (fs.existsSync(target)) { console.error(`${target} already exists.`); process.exit(1); }
fs.copyFileSync('src/content/projects/_template.mdx', target);
console.log(`Created ${target}. Fill it in, then set draft: false.`);
