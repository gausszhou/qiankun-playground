// utils/directives.js
// 定义全局的自定义指令
let directive = {};
directive.install = Vue => {
  Vue.directive("test", {
    bind(el, binding) {
      // el为绑定的元素，binding为绑定给指令的对象
      console.log(el, binding);
    },
    unbind(el) {
      console.log(el);
    }
  });
  Vue.directive("resize", {
    bind(el, binding) {
      // el为绑定的元素，binding为绑定给指令的对象
      let width = "",
        height = "";

      function isReize() {
        const style = document.defaultView.getComputedStyle(el);
        if (width !== style.width || height !== style.height) {
          binding.value(); // 关键
        }
        width = style.width;
        height = style.height;
      }
      el.__vueSetInterval__ = setInterval(isReize, 300);
    },
    unbind(el) {
      clearInterval(el.__vueSetInterval__);
    }
  });
};
export default directive;

// main.js
// resize 实时监听元素变化
// 引入自定义指令
// import directives from "@/utils/directives.js";
// Vue.use(directives);
