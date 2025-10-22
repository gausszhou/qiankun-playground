import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import Vue from "vue";
import VueRouter from "vue-router";
import packageJson from "../package.json";
import App from "./App.vue";
import About from "./views/About.vue";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

function createRoutes(base = "") {
  return [
    { path: base + "/home", name: "Home", component: Home },
    { path: base + "/about", name: "About", component: About }
  ];
}

function createRouter(base) {
  const routes = createRoutes(base);
  const router = new VueRouter({
    mode: "hash",
    routes: routes
  });
  return router;
}

let app = null;
let router = null;

const render = (props = {}) => {
  const { container, base, progress } = props;
  router = createRouter(base);
  router.beforeEach((to, from, next) => {
    progress?.start();
    console.log("vite-es-vue2 beforeEach");
    next();
  });
  router.afterEach(() => {
    progress?.done();
    console.log("vite-es-vue2 afterEach");
  });
  app = new Vue({
    router,
    render: h => h(App)
  });
  app.$mount(container?.querySelector("#app") ?? "#app");
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({
    bootstrap(props) {
      console.log("[qiankun] bootstrap", packageJson.name);
    },
    mount(props) {
      console.log("[qiankun] mount", packageJson.name, props);
      console.log("[qiankun] window", window);
      render(props);
    },
    unmount(props) {
      console.log("[qiankn] unmount", packageJson.name);
      app = null;
      router = null;
      console.log("[qiankn] unmount router", router);
    }
  });
} else {
  render({});
}
