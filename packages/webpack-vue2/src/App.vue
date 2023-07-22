<template>
  <div id="app">
    <div id="menu">
      <el-menu :default-active="active()">
        <el-menu-item>
          <h1>Vue Startup</h1>
        </el-menu-item>
        <el-menu-item
          v-for="(val, key) in list"
          :key="key"
          :index="key + 1 + ''"
          @click="goto(key + 1)"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">Demo{{ key + 1 }} {{ val }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 路由视图 -->
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        "1数据绑定",
        "2样式绑定",
        "3条件判断",
        "4循环遍历",
        "5事件绑定",
        "6事件修饰符",
        "7计算和侦听属性",
        "8双向数据绑定",
        "9表格数据操作",
        "10过滤器",
        "11自定义指令",
        "12组件化",
        "13父子组件通信",
        "14组件案例",
        "15组件插槽slot",
        "16动态组件",
        "17路由的生命周期",
        "18组件的生命周期",
        "19状态管理(全局变量) ",
        "20Vuex 简单案例 ",
        "21Driver.js 引导 ",
        "22Vuex Watch 监听",
        "23EL Upload 上传",
        "24Markdown IT 解析",
        "25Time Zone 时区",
        "26国际化",
        "27ELTree动态更新",
        "28PDF",
        "29CSS scoped"
      ]
    };
  },
  created() {
    console.log(this.$bbb.$store === this.$store);
  },
  methods: {
    active() {
      if (this.$route.name) {
        return this.$route.name.charAt(this.$route.name.length - 1);
      }
    },
    goto(val) {
      console.log(val)
      let str = "demo" + val;
      if (this.$route.name != str) {
        this.$router.push({
          name: "demo" + val
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: row;
  #menu {
    width: 225px;
    max-width: 225px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    .el-menu {
      .el-menu-item {
        padding-left: 5px !important;
      }
    }
  }
  #view {
    flex: 1;
    min-width: 500px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
