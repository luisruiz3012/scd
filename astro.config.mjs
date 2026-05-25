import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://scd.com.gt',
  adapter: vercel(),
  output: 'static',
  build: {
    format: 'file'
  }
});
