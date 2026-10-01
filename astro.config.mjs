import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://strideguide.example.com',
  integrations: [mdx()],
  output: 'static'
});
