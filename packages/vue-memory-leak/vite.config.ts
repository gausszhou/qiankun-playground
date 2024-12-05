import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { base } from '../config.json'
import packageJson from './package.json';
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base: base ? `${base}${packageJson.name}/` : '/',
    build: {
      outDir: '../../dist/qiankun-playground/' + packageJson.name
    },
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
    plugins: [
      vue(),
      qiankun(packageJson.name),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  };
});
