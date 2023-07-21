import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { base } from '../config';

// https://vitejs.dev/config/
export default defineConfig({
  base: base ? base : '/',
  build: {
    outDir: '../../dist'
  },
  plugins: [vue()],
})
