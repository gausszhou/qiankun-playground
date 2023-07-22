<template>
  <div>
    {{ a }}
    <button @click="add">提交</button>
  </div>
</template>

<script>
import bus from "@/utils/bus.js";
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {
    add() {
      const that = this;
      bus.$emit("inc", function() {
        return [that.a, that.a++, ++that.a];
      });
    }
  }
};
</script>

<style></style>
