<template>
  <div id="demo15">
    <h1>Demo15 —— 组件插槽slot</h1>
    <slot-demo title="这是标题">
      <h1>这是插槽里的内容</h1>
      <template v-slot:btns>
        <button>button</button>
        这里替换 name="btns"
      </template>
      <template v-slot:footer>
        <footer>footer</footer>
      </template>
      <template v-slot:sidebar>
        <sidebar>sidebar</sidebar>
      </template>
    </slot-demo>
  </div>
</template>

<script>
import slotDemo from "../components/SlotDemo";
export default {
  components: {
    slotDemo
  },
  name: "demo15",
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {}
};
</script>

<style></style>
