<template>
  <div>
    <iframe loading="lazy" :src="pdfLink" width="800" height="600" frameborder="0"></iframe>
  </div>
</template>

<script>
console.log(window.__webpack_public_path__);
const publicPath = window.__webpack_public_path__;
export default {
  data() {
    return {
      pdfLink: publicPath + "/test.pdf"
    };
  }
};
</script>

<style></style>
