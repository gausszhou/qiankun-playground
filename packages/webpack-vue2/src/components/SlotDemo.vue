<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <slot></slot>
    <slot name="btns"></slot>
    <slot name="footer"></slot>
    <slot name="sidebar"></slot>
  </div>
</template>

<script>
export default {
  naem: "slotDemo",
  props: ["title"]
};
</script>

<style></style>
