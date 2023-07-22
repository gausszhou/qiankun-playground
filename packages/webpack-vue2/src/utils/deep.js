import $store from "../store/index";

var deep = {
  flag: true,
  timer: null,
  init() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      $store.commit("changeFlag", { flag: Math.random() });
    }, 1000);
  }
};

export default deep;
