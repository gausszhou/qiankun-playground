const tools = {
  // 防抖方法 debounce
  debounce() {
    var timer;
    return function(fn, delay = 200) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        timer = null;
        fn.apply(this, arguments);
      }, delay);
    };
  },
  // 节流方法 throttle
  throttle() {
    let previous = 0;
    return function(fn, wait) {
      let now = new Date();
      if (now - previous > wait) {
        fn.apply(this, arguments);
        previous = now;
      }
    };
  },
  // 深度拷贝 deepCopy
  deepCopy(oldObj) {
    // 如果是null 返回null
    if (oldObj === null) return null;
    // 如果不是是对象，是简单类型或者方法，那么直接返回
    if (typeof oldObj !== "object") return oldObj;
    // 如果是正则或者时间对象，则new一个新对象，传入相同参数
    if (oldObj.constructor === Date) return new Date(oldObj);
    if (oldObj.constructor === RegExp) return new RegExp(oldObj);
    // 数组拷贝
    if (typeof oldObj == "object" && oldObj instanceof Array) {
      let array = new Array();
      for (let i = 0; i < oldObj.length; i++) {
        (function(index) {
          array.push(oldObj[index]);
        })(i);
      }
      return array;
    }
    // 对象拷贝
    var newObj = new oldObj.constructor(); //保持原型链的继承
    for (var key in oldObj) {
      if (Object.prototype.hasOwnProperty.apply(oldObj, key)) {
        //只遍历对象自身的属性
        var val = oldObj[key];
        newObj[key] = typeof val === "object" ? this.deepCopy(val) : val;
      }
    }
    return newObj;
  }
};

export default tools;

// main.js
// import tools from "./utils/tools.js";
// Vue.prototype.$tools = tools;
