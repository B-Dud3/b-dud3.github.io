import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b-dud3.github.io',
  integrations: [sitemap({ filter: (page) => page !== 'https://b-dud3.github.io' })],
});
