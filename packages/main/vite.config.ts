import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { base } from '../config.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: base ? base : '/',
  build: {
    outDir: '../../dist/qiankun-playground'
  },
  plugins: [vue()],
})
