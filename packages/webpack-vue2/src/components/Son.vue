<template>
  <div>
    son<input type="text" v-model="test" />
    <button @click="sip">提交</button>
    <br />
    grandson
    <grandson @grandson="son"></grandson>
  </div>
</template>

<script>
import grandson from "./Grandson";
export default {
  components: {
    grandson
  },
  props: {
    test: { default: "" }
  },
  methods: {
    sip() {
      this.$emit("sip", this.test);
    },
    son(data) {
      // console.log(data)
      this.$emit("son", data);
    }
  }
};
</script>

<style></style>
