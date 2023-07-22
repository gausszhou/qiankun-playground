<template>
  <div id="demo8">
    <h1>Demo8 —— v-model 双向数据绑定</h1>
    <h3>绑定input和textarea</h3>
    <input type="text" v-model="text" />
    <div>{{ text }}</div>
    <textarea cols="30" rows="2" v-model="content"></textarea>
    <div>{{ content }}</div>
    <hr />
    <h3>绑定select</h3>
    <select v-model="cityCode">
      <option value>请选择</option>
      <option v-for="city in citys" :value="city.code" :key="city.code">
        {{ city.name }}
      </option>
    </select>
    <div>{{ cityCode }}</div>
    <div>{{ cityName }}</div>
    <hr />
    <h3>绑定radio</h3>
    <input name="sex" type="radio" value="male" v-model="sex" />男
    <input name="sex" type="radio" value="female" v-model="sex" />女
    <div>{{ sex }}</div>
    <hr />
    <h3>多选按钮</h3>
    <input type="checkbox" v-model="remember" />记住密码
    <div>{{ remember }}</div>
    <input
      type="checkbox"
      true-value="Y"
      false-value="N"
      v-model="remember2"
    />记住密码
    <div>{{ remember2 }}</div>
    <hr />
    <input type="checkbox" name="hobby" value="eat" v-model="hobby" />吃饭
    <input type="checkbox" name="hobby" value="sleep" v-model="hobby" />睡觉
    <input
      type="checkbox"
      name="hobby"
      value="fall guy"
      v-model="hobby"
    />糖豆人
    <div>{{ hobby.join("、") }}</div>
    <hr />
    <h3>
      v-model的修饰符 lazy失去焦点时更新数据、number转成数字、trim去除前后空格
    </h3>
    <input type="text" v-model.lazy="text" />
    <div>{{ text }}</div>
    <input type="text" v-model.lazy="number" />
    <div>{{ number }}</div>
    <input type="text" v-model.trim="str" />
    <div>{{ str }}</div>
  </div>
</template>

<script>
export default {
  name: "demo8",
  data() {
    return {
      text: "text",
      content: "这就是双向数据绑定，修改我",
      cityCode: "",
      citys: [
        {
          name: "北京",
          code: "bj"
        },
        {
          name: "上海",
          code: "sh"
        },
        {
          name: "广州",
          code: "gz"
        },
        {
          name: "深圳",
          code: "sz"
        }
      ],
      sex: "",
      remember: false,
      remember2: false,
      hobby: [],
      number: 123,
      str: "你好"
    };
  },
  mounted: function() {},
  computed: {
    cityName() {
      const _city = this.citys.find(city => city.code === this.cityCode);
      return _city ? _city.name : "";
    }
  }
};
</script>
<style></style>
