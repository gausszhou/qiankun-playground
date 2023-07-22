<template>
  <div>{{ b }}</div>
</template>

<script>
import bus from "@/utils/bus.js";

export default {
  data() {
    return {
      b: "",
      c: ""
    };
  },
  beforeMount() {
    bus.$on("inc", data => {
      this.b = data();
    });
  }
};
</script>

<style></style>
