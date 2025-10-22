import './public-path';
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import About from "./views/About.vue";
import Home from "./views/Home.vue";

function createRoutes(base = "") {
  return [
    { path: base + "/home", name: "Home", component: Home },
    { path: base + "/about", name: "About", component: About },
  ];
}

let app = null;
let router = null;

const render = props => {
  const { container, base, progress } = props;
  router = createRouter({
    history: createWebHashHistory(),
    routes: createRoutes(base),
  });
  router.beforeEach((to, from, next) => {
    progress?.start();
    console.log("vite-vue3 beforeEach");
    next();
  });
  router.afterEach(() => {
    progress?.done();
    console.log("vite-vue3 afterEach");
  });
  app = createApp(App);
  app.use(router);
  app.mount(container?.querySelector("#app") ?? document.querySelector("#app"));
  console.log("[qiankun] render router", router);
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[app] vue app bootstrap");
}
export async function mount(props) {
  console.log("[app] vue app mount");
  render(props);
}

export async function unmount() {
  console.log("[app] vue app unmount");
  router.listening = false;
  app = null;
  router = null;
}
