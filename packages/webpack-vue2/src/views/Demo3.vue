<template>
  <div id="demo3">
    <h1>Demo3 —— 条件判断</h1>

    <h2>v-if —— 控制DOM的存在</h2>
    <el-button
      :type="isShow1 ? 'primary' : 'warning'"
      @click="isShow1 = !isShow1"
      >toggle {{ isShow1 }}</el-button
    >
    <div class="box"><span v-if="isShow1">v-if="isShow1"</span></div>

    <hr />
    <h2>v-show —— 操作css的display属性</h2>
    <el-button
      :type="isShow2 ? 'primary' : 'warning'"
      @click="isShow2 = !isShow2"
      >toggle {{ isShow2 }}
    </el-button>
    <div class="box"><span v-show="isShow2">v-show="isShow2"</span></div>

    <hr />
    <h2>template元素自身不会被渲染到DOM中</h2>
    <div class="box">
      这里有个DIV盒子，是一个DOM节点
      <div>第一行</div>
      <div>第二行</div>
    </div>
    <hr />
    <template class="box">
      这里没有template，是一个文本节点
      <div>第一行</div>
      <div>第二行</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "demo3",
  data() {
    return {
      isShow1: true,
      isShow2: true
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.isShow = false;
      setTimeout(() => {
        this.isElse = false;
      }, 3000);
    }, 3000);
  }
};
</script>
<style scoped lang="scss">
.box {
  border: 1px solid;
  margin-top: 10px;
  padding: 5px;
  div {
    height: 30px;
    border: 1px solid;
  }
}
</style>
