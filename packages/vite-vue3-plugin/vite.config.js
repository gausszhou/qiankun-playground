import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import { base } from '../config'
import packageJson from './package.json';

export default {
  // / + vite_vue3p + / => /vite_vue3p/
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/' + packageJson.name
  },
  server: {
    open: false,
    port: 9529
  },
  plugins: [
    vue(),
    qiankun(packageJson.name)
  ]
}