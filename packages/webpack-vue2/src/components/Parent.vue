<template>
  <div class="parent">
    <div class="example">hi</div>
    <ParentChild class="child" />
  </div>
</template>

<script>
import ParentChild from "./ParentChild";
export default {
  components: {
    ParentChild
  }
};
</script>

<style scoped>
::v-deep .example {
  color: red;
}
</style>
