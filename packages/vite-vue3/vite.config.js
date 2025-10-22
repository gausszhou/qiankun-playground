import legacy from '@vitejs/plugin-legacy'; // need this
import vue from '@vitejs/plugin-vue';
import { legacyQiankun } from 'vite-plugin-legacy-qiankun';
import { base } from '../config';
import packageJson from './package.json';

export default {
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/qiankun-playground/' + packageJson.name
  },
  server: {
    open: false,
    port: 8003
  },
  plugins: [
    vue(),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    legacyQiankun({ 
      name: 'vite-vue3',
      devSandbox: true
    }),
  ]
}