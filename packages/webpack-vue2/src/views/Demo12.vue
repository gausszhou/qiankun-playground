<template>
  <div id="demo12">
    <h1>Demo12 —— 自定义组件</h1>
    <hr />
    <!-- number boolean object array 类型的数据传参记得使用动态绑定，不然传递的就是字符串了 -->
    <ComponentDefine
      :text="msg"
      :num="number"
      :obj="obj"
      :arr="list"
    ></ComponentDefine>
  </div>
</template>

<script>
import ComponentDefine from "../components/ComponentDefine";
export default {
  name: "demo12",
  components: {
    ComponentDefine
  },
  data() {
    return {
      msg: "Hello World",
      number: 123,
      obj: {
        a: 1,
        b: 2
      },
      list: [1, 3, 5, 7, 9],
      bool: false
    };
  }
};
</script>

<style>
.current {
  color: blue;
}
.focus {
  color: red;
}
.visited {
  color: green;
}
</style>
