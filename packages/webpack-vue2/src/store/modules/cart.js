export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        title: "iPhone X",
        price: 9999.99,
        nums: 3,
        max: 100
      },
      {
        id: 2,
        title: "MacBook Pro",
        price: 8888.88,
        nums: 2,
        max: 200
      }
    ]
  },
  getters: {
    total(state) {
      return state.products.reduce((total, product) => {
        return total + product.price * product.nums;
      }, 0);
    }
  },
  mutations: {},
  actions: {}
};
