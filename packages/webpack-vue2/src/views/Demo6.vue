<template>
  <div id="demo6">
    <h1>Demo6 ——事件修饰符</h1>
    <div @click="fatherClick">
      fatherClick————父级
      <div @click="sonClick1">sonClick1————子级1</div>
      <hr />
      使用了stop修饰符，sonClick2触发子级2事件
      <div @click.stop="sonClick2">sonClick2————子级2</div>
    </div>

    <hr />
    prevent修饰符，阻止默认事件
    <div @click.right.prevent="rightClick">点击右键</div>

    <hr />
    <div @click.self="fatherClick">
      fatherClick————父级
      <hr />
      父级使用了self修饰符，冒泡但不触发
      <div @click="sonClick1">sonClick1————子级1</div>
    </div>
    <hr />
    <input type="text" @keydown.ctrl="ctrlEvent" />
    <hr />
    <input type="text" @keydown.enter="submit" />
    <hr />
    <input type="text" @keydown.delete="deleteEvent" />
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    fatherClick() {
      console.log("父级事件");
    },
    sonClick1() {
      console.log("子级1事件");
    },
    sonClick2() {
      console.log("子级2事件");
    },
    rightClick() {
      console.log("点击了右键");
    },
    ctrlEvent() {
      console.log("按下了ctrl键");
    },
    submit() {
      console.log("按下了enter键");
    },
    deleteEvent() {
      console.log("按下了delete键");
    }
  }
};
</script>
<style>
div {
  user-select: none;
}
</style>
