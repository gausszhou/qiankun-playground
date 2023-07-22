import ajaxFun from "@/api/ajax";

export default {
  namespaced: true,
  state: {
    products: [
      { id: 1, title: "iPhone X", price: 9999.9, sku: 100 },
      { id: 2, title: "MacBook Pro", price: 8888.88, sku: 200 },
      { id: 3, title: "iPad Pro", price: 6666.66, sku: 300 }
    ]
  },
  getters: {},
  mutations: {
    updateProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    async getProducts({ commit }, payload) {
      const data = await ajaxFun(payload);
      console.log(data);
      commit("updateProducts", data);
    }
  }
};
