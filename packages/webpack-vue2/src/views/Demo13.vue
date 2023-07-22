<template>
  <div>
    <h1>Demo13 —— 父子组件通信</h1>
    <div id="demo13">
      <p>
        Father 简单数据类型 <span class="color_blue">{{ content }}</span> 值赋值
      </p>
      <p>
        Father 复杂数据类型 <span class="color_red">{{ form1 }}</span> 浅拷贝
      </p>
      <p>
        Father 复杂数据类型 <span class="color_red">{{ form2 }}</span> 深拷贝
      </p>
      <ComponentSon
        :model1="content"
        :model2="form1"
        :model3="form3"
        @simple-callback="getSimpleData"
        @complex-callback="getComplexData"
      ></ComponentSon>
    </div>
  </div>
</template>

<script>
import ComponentSon from "../components/ComponentSon";
export default {
  name: "demo13",
  components: {
    ComponentSon
  },
  data() {
    return {
      content: "随便写点什么",
      form1: {
        a: "hello",
        b: "world"
      },
      form2: {
        c: "HELLO",
        d: "WORLD"
      }
    };
  },
  created() {
    this.form3 = Object.assign({}, this.form2);
  },
  methods: {
    getSimpleData(item) {
      this.content = item;
    },
    getComplexData(item) {
      this.form2 = item;
    }
  }
};
</script>
<style scoped>
#demo13 {
  border: 1px solid;
  padding: 10px;
}
.color_blue {
  color: blue;
}
.color_red {
  color: red;
}
</style>
