<template>
  <div id="demo5">
    <h1>Demo5 ——v-on事件绑定</h1>

    <div>{{ number }}</div>
    <button v-on:click="add">喜加1</button>
    <button @click="reduce">惨减1</button>
    <button @click="reduce(2, $event)">惨减2</button>
    <hr />

    <div v-if="isShow">isShow为true</div>
    <div v-else>isShow为false</div>
    <button @click="toggle">toggle.isShow</button>
    <hr />
    <button @click="addNews">添加新闻</button>
    <button @click="removeNews">删除新闻</button>
    <button @click="updateNews">修改第一个新闻标题</button>
    <ul>
      <li v-for="news in newsList" :key="news.id">{{ news.title }}</li>
    </ul>

    <hr />
    <div v-for="(value, key, index) in obj" :key="key">
      {{ index }}--{{ key }}--{{ value }}
    </div>

    <button @click="addAttr">添加属性</button>
    <button @click="removeAttr">删除属性</button>
    <button @click="updateAttr">修改属性</button>
  </div>
</template>

<script>
export default {
  name: "demo5",
  data: function() {
    return {
      number: 1,
      isShow: true,
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
      ],
      obj: {
        name: "张三",
        age: 18,
        sex: "男",
        job: "写bug的"
      }
    };
  },
  mounted: function() {},
  methods: {
    add: function(event) {
      console.log(event);
      this.number++;
    },
    reduce(val, event) {
      console.log(val, event);
      // MouseEvent undefined
      // 2 MouseEvent
      // val缺省时，传递的是默认的event事件对象
      if (typeof val === "number") {
        this.number -= val;
      } else {
        this.number--;
      }
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    addNews() {
      this.newsList.push({
        id: Date.now(),
        title: "添加了一条新的新闻"
      });
    },
    removeNews() {
      this.newsList.shift();
    },
    updateNews() {
      // 直接修改索引是无效的
      // this.newsList[0] = {
      //   id: Date.now(),
      //   title: '修改了第一条新闻的标题'
      // }

      // 通过$set
      // this.$set(this.newsList, 0, {
      //   id: Date.now(),
      //   title: '修改了第一条新闻的标题'
      // })

      // 先删除后添加
      this.newsList.splice(0, 1, {
        id: Date.now(),
        title: "修改了第一条新闻的标题"
      });
    },
    addAttr() {
      // 此方法无效 为什么？？？
      // this.obj.hobby = "吃饭、睡觉、打豆豆"
      // 使用$set
      this.$set(this.obj, "hobby", "吃饭、睡觉、打豆豆");
      // 或者这样
      this.obj = {
        ...this.obj,
        hobby: "吃饭、睡觉、打豆豆"
      };
    },
    removeAttr() {
      // 此方法无效
      // delete this.obj.age
      const _obj = { ...this.obj }; // 深拷贝
      delete _obj.age;
      this.obj = { ..._obj };
    },
    updateAttr() {
      this.obj.age = 30;
    }
  }
};
</script>
<style></style>
