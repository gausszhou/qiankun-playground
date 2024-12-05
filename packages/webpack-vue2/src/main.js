import './public-path';
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

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
    progress.start();
    console.log("[app] webpack-vue2 beforeEach");
    next();
  });
  router.afterEach(() => {
    progress.done();
    console.log("[app] webpack-vue2 afterEach");
  });
  app = new Vue({
    router,
    render: h => h(App)
  });
  app.$mount(container?.querySelector("#app") ?? "#app");
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
  app = null;
  router = null;
}
