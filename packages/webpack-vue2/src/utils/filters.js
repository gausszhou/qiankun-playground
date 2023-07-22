// utils/filter.js
// 定义全局的过滤器
let filters = {};
filters.install = Vue => {
  Vue.filter("uppercase", value => value.toUpperCase());
  Vue.filter("addZeroOne", value => {
    value = Math.round(parseFloat(value) * 100) / 100;
    let arr = value.toString().split(".");
    if (arr.length === 1) {
      return value.toString() + ".0";
    } else {
      if (arr[1].length === 1) {
        return value.toString() + "0";
      }
    }
  });
  Vue.filter("addZeroTwo", value => {
    value = Math.round(parseFloat(value) * 100) / 100;
    let arr = value.toString().split(".");
    if (arr.length === 1) {
      return value.toString() + ".00";
    } else {
      if (arr[1].length === 1) {
        return value.toString() + "0";
      }
    }
  });
};

export default filters;

// main.js
// 引入全局过滤器
// import filters from "./utils/filters";
// Vue.use(filters)
