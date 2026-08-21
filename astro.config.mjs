// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebastianl1.github.io',
  base: '/souphra-releases',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
