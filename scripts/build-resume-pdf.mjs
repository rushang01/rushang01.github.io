// Prints the /resume page to public/rushang-chiplunkar-resume.pdf.
// Start the site first with: npm run build && npm run preview
import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:4321/resume';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: 'public/rushang-chiplunkar-resume.pdf', format: 'Letter', printBackground: false, preferCSSPageSize: true });
await browser.close();
console.log('Wrote public/rushang-chiplunkar-resume.pdf');
