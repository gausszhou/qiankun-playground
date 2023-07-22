<template>
  <div id="demo17">
    <h1>Demo17 —— vue-router 路由</h1>
    <div>{{ $route.fullPath }}</div>

    <button @click="change">通过js切换路由detail</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "demo17",
  data() {
    return {
      txt: "abc"
    };
  },
  mounted: function() {
    console.log(this.$route);
  },
  methods: {
    change() {
      // 通过name切换路由
      // this.$router.push({
      //   name: "demo17",
      //   params: {
      //     id: 1366,
      //     type: "pushname"
      //   },
      //   query: {
      //     key: "add"
      //   },
      //   hash: "#app"
      // });
      // 通过path切换路由;
      this.$router.push({
        path: "/demo17/detail/pushpath",
        query: {
          key: "add"
        },
        hash: "#app"
      });
      // replace切换路由 不能通过history返回
      // this.$router.replace({
      //   path: "/demo17/1333/replace",
      //   query: {
      //     key: "add"
      //   },
      //   hash: "#app"
      // });
    },

    // 在组件中编写路由钩子函数

    // 进入路由组件之前
    beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter: 即将进入demo17");
      // 在进入路由之前是获取不到路由组件demo17的this
      // console.log(this.txt);

      // 利用next中的回调函数的参数可以获取，此时参数vm就是路由组件dmeo17
      next(vm => {
        console.log(vm.txt);
      });
    },
    // 在路由更新之前
    beforeRouteUpdate(to, from, next) {
      console.log("beforeRouteUpdate: 即将更新demo17");
      next(vm => {
        console.log(vm.txt);
      });
    },
    // 离开此路由组件
    beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave: 即将离开demo17");
      next(vm => {
        console.log(vm.txt);
      });
    }
  }
};
</script>

<style lang=""></style>
