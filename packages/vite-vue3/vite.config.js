import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
import { base } from '../config'
import packageJson from './package.json';

export default {
  // / + vite_vue3 + / => /vite_vue3/
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/qiankun-playground/' + packageJson.name
  },
  server: {
    open: false,
    port: 9528
  },
  plugins: [
    vue(),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    legacyQiankun({ 
      name: 'vite_vue3',
      devSandbox: true
    }),
  ]
}