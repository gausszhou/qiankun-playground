<template>
  <div id="demo7">
    <h1>Demo7 —— 计算和侦听属性</h1>
    <h3>
      表达式太复杂的话会导致模板难以维护，而且如果多个地方使用该表达式的话会导致重复
    </h3>
    <div>{{ type + ":" + msg }}</div>
    <hr />
    <h3>
      使用computed计算属性,计算属性可以缓存，数据会优先调用之前的结果，而不是再次计算
    </h3>
    <div>{{ type_msg }}</div>
    <div>{{ firstName }}</div>
    <div>{{ lastName }}</div>
    <div>{{ fullName }}</div>
    <button @click="modifyFirstName">修改FirstName</button>
    <button @click="modifyLastName">修改LastName</button>
    <button @click="modifyFullName">修改FullName</button>
    <hr />
    <h3>
      通过函数方式达到计算属性的效果，每次都会重新计算，性能更低，不推荐使用
    </h3>
    <div>{{ getFullName() }}</div>

    <hr />
    <h3>
      computed使用场景：某个数据跟多个数据相关时，或者需要对其他数据进行处理时
    </h3>
    <h3>watch使用场景：一个数据的变化影响多个数据时，或者需要执行异步操作</h3>

    <hr />
    <div>语言： {{ language }}</div>
    <button @click="switchLang('ch')">中文</button>
    <button @click="switchLang('en')">英文</button>
    <div>{{ zhangsan }}</div>
    <div>{{ lisi }}</div>
  </div>
</template>

<script>
export default {
  name: "demo7",
  data() {
    return {
      msg: "demo7",
      type: "news",
      firstName: "张",
      lastName: "无忌",
      fullName: "张 无忌",
      language: "ch",
      zhangsan: "",
      lisi: ""
    };
  },
  mounted: function() {},
  computed: {
    type_msg() {
      return this.type + ":" + this.msg;
    }
  },
  watch: {
    // 侦听器  传参——变化后的值
    firstName(newVal) {
      this.fullName = newVal + " " + this.lastName;
    },
    lastName(newVal) {
      this.fullName = this.firstName + " " + newVal;
    },
    fullName(newVal) {
      const arr = newVal.split(" ");
      this.firstName = arr[0];
      this.lastName = arr[1];
      this.fullName = newVal;
    },
    language: {
      // 属性，绑定事件 = 侦听器
      handler(newVal) {
        if (newVal === "ch") {
          this.zhangsan = "张三";
          this.lisi = "李四";
        }
        if (newVal === "en") {
          this.zhangsan = "zhangsan";
          this.lisi = "lisi";
        }
      },
      // 立即执行
      immediate: true
    }
  },
  methods: {
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    modifyFullName() {
      this.fullName = "Mickel Jordan";
    },
    modifyFirstName() {
      this.firstName = "司马";
    },
    modifyLastName() {
      this.lastName = "孔明";
    },
    switchLang(val) {
      this.language = val;
    }
  }
};
</script>
<style></style>
