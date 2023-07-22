<template>
  <div>
    <button @click="grandson()">grandson</button>
  </div>
</template>

<script>
export default {
  methods: {
    grandson() {
      this.$emit("grandson", "hello");
    }
  }
};
</script>

<style></style>
