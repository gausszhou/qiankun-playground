<template>
  <div id="demo16">
    <h1>Demo16 —— 动态组件</h1>
    <button @click="currentComponent = 'DynamicDemo1'">组件1</button>
    <button @click="currentComponent = 'DynamicDemo2'">组件2</button>
    <hr />
    <div>keep-alive保持组件状态</div>
    <div>:is="动态组件变量"</div>
    <hr />
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import DynamicDemo1 from "../components/DynamicDemo1.vue";
import DynamicDemo2 from "../components/DynamicDemo2.vue";
export default {
  name: "demo16",
  data: function() {
    return {
      currentComponent: "DynamicDemo1"
    };
  },
  mounted: function() {},
  methods: {},
  components: {
    DynamicDemo1,
    DynamicDemo2
  }
};
</script>
<style></style>
