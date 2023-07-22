import Vue from "vue";
import Vuex from "vuex";

// 拆分
import state from "./state";

import mutations from "./mutations";
import actions from "./actions";
// 子模块
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";
import products from "./modules/products";
import cart from "./modules/cart";

// 注册Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  // 存放全局变量数据
  state,
  // 类似计算属性，相当于全局的computed
  mutations,
  // 现在可以异步了
  actions,
  // 模块化
  modules: {
    moduleA,
    moduleB,
    products,
    cart
  }
});
