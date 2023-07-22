export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    filterList(state) {
      return state.list.map(item => {
        item.sexName = item.sex === "male" ? "男" : "女";
        return item;
      });
    }
  },
  mutations: {
    updateList(state, payload) {
      state.list = payload;
    }
  },
  actions: {
    async getList(context, payload) {
      // commit 触发 muations
      await context.commit("updateList", payload);
      await context.commit("increment", 4, { root: true });
    }
  }
};
