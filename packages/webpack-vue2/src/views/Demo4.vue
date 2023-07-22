<template>
  <div id="demo4">
    <h1>Demo4 —— v-for遍历</h1>

    <pre v-pre>v-for="item in arr" :key="item"</pre>
    <span v-for="item in arr" :key="item">{{ item }} </span>

    <hr />
    <h2>num in arr</h2>
    <span v-for="num in arr" :key="num + 10">{{ num + 1 }}</span>
    <hr />

    <h2>遍历数组(item,index) in arr</h2>
    <span v-for="(item, index) in arr" :key="index + 20"
      >{{ index }}--{{ item }}</span
    >
    <hr />

    <h2>为v-for元素绑定一个独一无二的key</h2>
    <span :key="index + 100" v-for="(item, index) in arr"
      >{{ index }}--{{ item }}</span
    >
    <hr />

    <h2>遍历对象(value,key,index) in obj</h2>
    <span v-for="(item, key, index) in obj" :key="index + 1000"
      >{{ index }}--{{ key }}--{{ item }}</span
    >

    <h2>遍历对象(value,key,index) of obj</h2>
    <span v-for="(item, key, index) of obj" :key="index + 100000"
      >{{ index }}--{{ key }}--{{ item }}</span
    >

    <hr />
    <h2>遍历一个新闻列表对象，一个数组，数组元素是对象</h2>
    <ul>
      <li v-for="news in newsList" :key="news.id">{{ news.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo4",
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      obj: {
        name: "张三",
        sex: "男",
        age: 18
      },
      newsList: [
        {
          id: 1,
          title: "美政府允许美企在中国使用微信"
        },
        {
          id: 2,
          title: "四川通报五通桥刺激性气雾问题"
        },
        {
          id: 3,
          title: "旅美大熊猫“美香”产下幼崽热议"
        },
        {
          id: 4,
          title: "17省份今举行公务员省考笔试"
        }
      ]
    };
  },
  mounted: function() {}
};
</script>
<style></style>
