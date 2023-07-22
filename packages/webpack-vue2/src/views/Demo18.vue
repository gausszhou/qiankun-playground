<template>
  <div id="demo18">
    <h1>Demo18 —— 组件的生命周期</h1>
    <div id="msg">{{ msg }}</div>
    <button @click="modify">modify执行一个异步任务</button>
  </div>
</template>

<script>
export default {
  name: "demo18",
  data() {
    return {
      msg: "AMD YES",
      timer: ""
    };
  },
  methods: {
    show() {
      console.log("执行了show方法");
    },
    modify() {
      // 异步任务
      this.timer = setTimeout(() => {
        this.msg = Date.now();
        console.log("modify执行完毕");
      }, 3000);
    }
  },
  beforeCreate() {
    // 组件实例化之前
    // data和methods里面的属性和方法都是读取不到的
    console.log("beforeCreate\t", "this.msg=", this.msg); // undefined
  },
  created() {
    // 组件实例化之后
    // data和methods都已经初始化完成
    // 但是模板还没有编译
    console.log("created\t\t\t", "this.msg=", this.msg); // AMD YES
    // this.show()
  },
  beforeMount() {
    // vue实例挂载之前
    // 模板已经编译，但是页面还没有渲染
    console.log("beforeMount\t\t", "DOM", document.getElementById("msg")); // null
  },
  mounted() {
    // 组件渲染完成，此时我们可以看到最终的页面效果
    console.log("mounted\t\t\t", "DOM", document.getElementById("msg")); //  <div id="msg">AMD YES</div>
  },
  beforeUpdate() {
    // 组件更新之前
    // 此时data里的属性更新了，但是页面显示的内容还没有更新
    console.log(
      "beforeUpdate\t",
      this.msg,
      document.getElementById("msg").innerHTML
    );
    // beforeUpdate 1599972975785 AMD YES
  },
  updated() {
    // 组件更新后
    // 此时data和页面的内容都是最新的
    console.log(
      "updated\t\t\t",
      this.msg,
      document.getElementById("msg").innerHTML
    );
    // beforeUpdate 1599973140817 1599973140817
  },
  beforeDestroy() {
    // 准备销毁
    console.log("beforeDestroy");
    clearTimeout(this.timer);
  },
  destroyed() {
    // 销毁完成
    console.log("destroyed");
  }
};
</script>
<style></style>
