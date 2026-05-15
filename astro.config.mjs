import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scd.com.gt',
  output: 'static',
  build: {
    format: 'file'
  }
});
