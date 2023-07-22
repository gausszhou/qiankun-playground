export default {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {},
  mutations: {
    increment(state, payload = 1) {
      state.count += payload;
    }
  },
  actions: {}
};
