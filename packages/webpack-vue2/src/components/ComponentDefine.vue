<template>
  <div>
    <div>随便写点什么</div>
    <hr />
    <button @click="modify">修改</button>
    <p>{{ txt }}--{{ typeof txt }}</p>
    <p>{{ number }}--{{ typeof number }}</p>
    <p>{{ flag }}</p>
    <p>{{ obj.a }}--{{ obj.b }}</p>
    <p>{{ arr.join("-") }}</p>
  </div>
</template>

<script>
export default {
  name: "ComponentDefine",
  props: ["text", "num", "obj", "arr", "bool"],
  data() {
    return {
      txt: this.text
    };
  },
  computed: {
    number() {
      return this.num + 1;
    },
    flag() {
      return this.bool ? "yes" : "no";
    }
  },
  methods: {
    modify() {
      this.txt = "修改一下";
    }
  }
};
</script>
