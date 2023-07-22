<template>
  <div id="demo19">
    <h1>Demo19 —— Vuex 状态管理(全局变量)</h1>
    <p>{{ test }}---{{ $store.state.test }}</p>
    <button @click="inctest">inc</button>
    <hr />
    state/getters
    <p>{{ $store.state.rootCount }} $store.state.rootCount</p>
    <p>{{ rootCount }} $store.state.rootCount 映射</p>
    <p>{{ count1 }} $store.state.moduleA.count return写法</p>
    <p>{{ count2 }} $store.state.moduleA.count 映射写法</p>
    <p>{{ count }} $store.state.moduleA.count 直接映射</p>

    <hr />
    mutations
    <button @click="inc(1)">+1</button>
    <button @click="add2(2)">+2</button>
    <button @click="increment(10)">+10</button>
    <hr />
    actions
    <button @click="getList()">更新列表</button>
    <hr />
    <ul>
      <!-- <li v-for="item in filterList" :key="item.id">{{ item.id }} -- {{ item.name }} -- {{ item.sexName }}</li> -->
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "demo19",
  data() {
    return {
      test: this.$store.state.test
    };
  },
  created() {
    this.$store.dispatch("moduleB/getList");
  },
  mounted: function() {},
  computed: {
    // 映射定义在store的state到同名变量
    ...mapState(["rootCount"]),

    // 传统写法，返回定义在moduleA的state
    count1() {
      return this.$store.state.moduleA.count;
    },
    // 剩余参数，利用剩余参数可以让mapState映射多个state
    ...mapState("moduleA", {
      count2: state => state.count + 1
    }),
    // 进一步简写，直接映射到同名变量，(最容易掌握)
    ...mapState("moduleA", ["count"])
  },
  methods: {
    inctest() {
      this.$store.commit("inctest");
    },
    //  mutations和actions映射到methods

    // 传统写法 commit调用mutations
    inc(val) {
      this.$store.commit("moduleA/increment", val);
    },
    // 映射别名 add2() = increment()
    ...mapMutations("moduleA", {
      add2: "increment"
    }),
    // 映射同名
    ...mapMutations("moduleA", ["increment"]),

    // 传统写法 dispatch 调用 actions
    getData(val) {
      this.$store.dispatch("moduleB/getList", val);
    },
    // 映射别名
    ...mapActions("moduleB", {
      getdata2: "getList"
    }),
    // 映射同步
    ...mapActions("moduleB", ["getList"])
  }
};
</script>
<style></style>
