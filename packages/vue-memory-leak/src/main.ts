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
  const { container, base } = props;
  router = createRouter({
    history: createWebHashHistory(),
    routes: createRoutes(base)
  });
  app = createApp(App);
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
      console.log("[qiankun] unmount router", router);
    },
    async update() {

    }
  });
} else {
  render({});
}

