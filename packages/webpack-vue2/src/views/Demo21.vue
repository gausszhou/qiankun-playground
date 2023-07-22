<template>
  <div class="container">
    <h1>Demo21 —— Driver</h1>
    <a href="https://github.com/kamranahmedse/driver.js"
      >插件仓库地址:https://github.com/kamranahmedse/driver.js</a
    >
    <div>
      <div id="first">first</div>
      <div id="second"><input type="text" value="second" /></div>
      <div id="third">third</div>
      <div id="fourth">fourth</div>
      <div id="fifth">fifth</div>
    </div>
    <Driver ref="driver"></Driver>
  </div>
</template>

<script>
import Driver from "../components/Driver";
export default {
  components: {
    Driver
  },
  mounted() {
    console.log("1");
    this.$nextTick(() => {
      console.log("2");
      this.$refs.driver.start();
    });
    console.log("3");
  }
};
</script>

<style lang="scss">
.container {
  div {
    width: 200px;
    height: 200px;
    background-color: #666;
    margin-bottom: 10px;
  }
}
</style>
