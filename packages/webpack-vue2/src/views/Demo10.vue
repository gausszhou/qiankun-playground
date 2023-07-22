<template>
  <div id="demo10">
    <h1>Demo10 ——filter 过滤器</h1>
    <div>{{ content.toUpperCase() }}</div>
    <div>{{ content | uppercase }}</div>
    <div>{{ cont }}</div>

    <div>{{ content | transform("capitalize") }}</div>
    <div>{{ content | uppercase | join("~") }}</div>
  </div>
</template>

<script>
export default {
  name: "demo10",
  data() {
    return {
      content: "exciting"
    };
  },
  // 为什么要使用过滤器，可以定义全局过滤器
  // 过滤器可以传参，
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
    transform(value, type) {
      switch (type) {
        case "uppercase":
          return value.toUpperCase();

        case "lowercase":
          return value.toLowerCase();

        case "capitalize":
          return value.charAt(0).toUpperCase() + value.substr(1);

        default:
          break;
      }
    },
    join(value, str) {
      return value.split("").join(str);
    }
  },
  computed: {
    cont() {
      return this.content.toUpperCase();
    }
  }
};
</script>
<style></style>
