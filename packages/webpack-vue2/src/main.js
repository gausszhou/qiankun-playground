import './public-path';
import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import store from "./store";

// 引入全局样式
import "./common/common.scss";

// 引入Element UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入i18n
import i18n from "./lang/index.js";

Vue.use(ElementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value)
});

// 引入axios
import axios from "axios";
Vue.prototype.$axios = axios;

// 引入自封装的ajax
import ajax from "@/api/ajax";
Vue.prototype.$ajax = ajax;

// 引入接口管理 http
import http from "@/api/http";
Vue.prototype.$http = http;

// import socket from "@/api/socket";
// Vue.prototype.$socket = socket;

// 引入全局过滤器
import filters from "./utils/filters";
Vue.use(filters);

// 引入自定义指令
import directives from "@/utils/directives.js";
Vue.use(directives);

// 表单验证插件
import Validation from "@/plugins/validation";
Vue.use(Validation);

// 测试插件
import newTest from "@/plugins/newTest.js";
Vue.use(newTest);

// 全局配置
Vue.config.productionTip = false;

let instance = null;
let router = null;
// new Vue 配置路由,状态,渲染组件,挂载组件
function render(props = {}) {
  const { container, base } = props;
  router = createRouter(base);
  instance = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  });
  instance.$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework");
  render(props);
}

export async function unmount() {
  console.log("[vue] vue app unmount");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
