import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
import { base } from '../config'
import packageJson from './package.json';

export default {
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/' + packageJson.name
  },
  server: {
    open: false,
    port: 9527
  },
  plugins: [
    vue(),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    legacyQiankun({
      name: 'vite_vue2',
      devSandbox: true
    })
  ]
}