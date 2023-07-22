<template>
  <div id="ComponentSon">
    <p>
      Son 简单数据类型
      <input type="text" v-model="val" @keydown.enter="submitSimple" />
    </p>
    <p>
      Son 复杂数据类型
      <input type="text" v-model="form1.a" />
      <input type="text" v-model="form1.b" />
    </p>
    <p>
      Son 复杂数据类型
      <input type="text" v-model="form2.c" @keydown.enter="submitComplex" />
      <input type="text" v-model="form2.d" @keydown.enter="submitComplex" />
    </p>
  </div>
</template>

<script>
export default {
  name: "ComponentSon",
  props: {
    model1: {
      default: "我就要这样写"
    },
    model2: {
      default: "hello"
    },
    model3: {
      default: "world"
    }
  },
  data() {
    return {
      val: this.model1,
      form1: this.model2,
      form2: this.model3
    };
  },
  created() {
    console.log(this.model1, "created");
    console.log(this.val, "created");
  },
  methods: {
    submitSimple() {
      this.$emit("simple-callback", this.val);
    },
    submitComplex() {
      this.$emit("complex-callback", Object.assign({}, this.form2));
    }
  }
};
</script>

<style>
#ComponentSon {
  border: 1px solid;
  margin: 10px;
  padding: 10px;
}
</style>
