import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b-dud3.github.io',
  base: '/Personal-Website',
  integrations: [sitemap()],
});
