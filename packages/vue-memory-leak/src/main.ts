import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createRoutes }  from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHashHistory } from "vue-router";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import packageJson from '../package.json';

let app: any = null;
let router: any = null;

const render = (props: any) => {
  const { container, base, progress } = props;
  router = createRouter({
    history: createWebHashHistory(),
    routes: createRoutes(base)
  });
  router.beforeEach((to: any, from: any, next: any) => {
    console.log(from, to);
    progress.start();
    console.log("vite-vue3 beforeEach");
    next();
  });
  router.afterEach(() => {
    progress.done();
    console.log("vite-vue3 afterEach");
  });
  app = createApp(App);
  app.mixin({
    data() {
      return {
        appendTo: '#app-mem'
      }
    }
  })
  app.use(ElementPlus)
  app.use(router);
  app.mount(container?.querySelector("#app") ?? document.querySelector("#app"));
  console.log("[qiankun] render router", router);
};


if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({
    async bootstrap() {
      console.log("[qiankun] bootstrap", packageJson.name);
    },
    async mount(props) {
      console.log("[qiankun] mount", packageJson.name, props);
      console.log("[qiankun] window", window);
      render(props);
    },
    async unmount() {
      console.log("[qiankun] unmount", packageJson.name);
      router.listening = false;
      app = null;
      router = null;
      console.log("[qiankun] unmount router", router);
    },
    async update() {

    }
  });
} else {
  render({});
}

