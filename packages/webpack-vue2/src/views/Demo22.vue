<template>
  <div>
    <h1>Demo22 —— Vuex Watch</h1>
    <p v-for="(item, index) in list" :key="index">{{ item }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isTimer: null,
      obj: { a: { b: { c: 50 } } },
      test1: "",
      form: {}
    };
  },
  computed: {
    test() {
      return this.$store.state.testObj.a.b.c;
    }
  },
  watch: {
    test: {
      handler(newV, oldV) {
        console.log("watch", newV, oldV);
        this.list.push(["watch", newV, oldV]);
      },
      deep: true
    }
  },
  mounted() {
    this.isTimer = setInterval(() => {
      console.log("change");
      this.obj.a.b.c = Math.floor(Math.random() * 100);
      this.$store.commit("changeState", this.obj);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.isTimer);
    this.isTimer = null;
  }
};
</script>

<style></style>
