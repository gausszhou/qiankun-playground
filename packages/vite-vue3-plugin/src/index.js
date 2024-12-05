import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import packageJson from "../package.json";
import Home from "./views/Home.vue";
import About from "./views/About.vue";


function createRoutes(base = "") {
  return [
    { path: base + "/home", name: "Home", component: Home },
    { path: base + "/about", name: "About", component: About }
  ];
}

let app = null;
let router = null;

const render = props => {
  const { container, base, progress } = props;
  router = createRouter({
    history: createWebHashHistory(),
    routes: createRoutes(base)
  });
  router.beforeEach((to, from, next) => {
    progress.start();
    console.log("vite-vue3 beforeEach");
    next();
  });
  router.afterEach(() => {
    progress.done();
    console.log("vite-vue3 afterEach");
  });
  app = createApp(App);
  app.use(router);
  app.mount(container?.querySelector("#app") ?? document.querySelector("#app"));
  console.log("[qiankun] render router", router);
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({
    async bootstrap(props) {
      console.log("[qiankun] bootstrap", packageJson.name);
    },
    async mount(props) {
      console.log("[qiankun] mount", packageJson.name, props);
      console.log("[qiankun] window", window);
      render(props);
    },
    async unmount(props) {
      console.log("[qiankun] unmount", packageJson.name);
      router.listening = false;
      console.log("[qiankun] unmount router", router);
    }
  });
} else {
  render({});
}
