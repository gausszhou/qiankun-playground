import test from "./test.vue";
// import store from '../store'
let obj = {};
obj.install = Vue => {
  let a = Vue.extend(test);
  // console.log(a.prototype == Vue.prototype); //false
  // Vue.prototype.$aaa = a
  a.prototype = Vue.prototype;
  // let b = new a({ store })
  let b = new a();
  Vue.prototype.$bbb = b;
  // console.log(b.__proto__.$store);
  // console.log(a.prototype == b.__proto__); //true
};
export default obj;
