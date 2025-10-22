import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { legacyQiankun } from 'vite-plugin-legacy-qiankun';
import { base } from '../config';
import packageJson from './package.json';

export default defineConfig({
  base: base ? `${base}${packageJson.name}/` : '/',
  build: {
    outDir: '../../dist/qiankun-playground/' + packageJson.name
  },
  server: {
    open: false,
    port: 8001,
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
      name: 'vite-react',
      devSandbox: true
    })
  ]
})
