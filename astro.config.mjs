import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rushang01.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
});
