<template>
  <div id="demo1">
    <h1>Demo1 —— 数据绑定</h1>
    <div>{{ html }}</div>
    <div v-html="html"></div>
    <h2>{{}}插值表达式和v-text指令</h2>
    <hr />
    <pre v-pre>{{ msg1 }} {{ msg2 }}</pre>
    <p>{{ msg1 }} {{ msg2 }}</p>
    <pre v-pre>v-text="msg1 +' '+ msg2"</pre>
    <p v-text="msg1 + ' ' + msg2"></p>
    <hr />
    <h2>v-bind绑定属性值</h2>
    <pre v-pre>v-bind:title="title"</pre>
    <el-button type="primary" class="pointer" v-bind:title="title"
      >鼠标放在上面显示title信息</el-button
    >
    <hr />

    <h3>不仅属性值能绑定 属性本身也能被动态绑定</h3>
    <el-input :[arrtName]="text" />
    <hr />
    <pre v-pre>
  data: function() {
    return {
      msg1: "Hello",
      msg2: "World",
      man: { age: 20 },
      title: "这是一个title",
      arrtName: "placeholder",
      text: "现在我是placeholder"
    };
  },
  mounted() {
    setTimeout(() => {
      this.arrtName = "value";
      this.text = "三秒钟后我是value";
    }, 3000);
  }
   </pre
    >
    {{ $store.state.flagObject.flag }}
  </div>
</template>

<script>
export default {
  name: "demo1",
  data: function() {
    return {
      msg1: "Hello",
      msg2: "World",
      man: { age: 20 },
      title: "这是一个title",
      arrtName: "placeholder",
      text: "现在我是placeholder",
      timer: null,
      html: `<h2>这里是H2</h2>`
    };
  },
  mounted() {
    setTimeout(() => {
      this.arrtName = "value";
      this.text = "三秒钟后我是value";
    }, 3000);
  },
  methods: {}
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
