import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
import legacy from '@vitejs/plugin-legacy'
import { base } from '../config';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/qiankun-playground/' + packageJson.name
  },
  server: {
    open: false,
    port: 9526,
  },
  plugins: [
    react({
      fastRefresh: false
    }),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    legacyQiankun({
      name: 'vite_react',
      devSandbox: true
    })
  ]
})
