import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
import { base } from '../config';
import packageJson from './package.json';

export default {
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/qiankun-playground/' + packageJson.name
  },
  server: {
    open: false,
    port: 7003
  },
  plugins: [
    vue(),
    qiankun(packageJson.name)
  ]
}