<template>
  <div id="demo2">
    <h1>Demo2 —— 样式绑定</h1>

    <h2>绑定一个class</h2>
    <div :class="classA">:class="classA"</div>
    <hr />

    <h2>通过数组的方式绑定多个class</h2>
    <div :class="[classA, classB, classC]">
      :class="[classA, classB,classC]"
    </div>
    <hr />

    <h2>通过对象的方式来绑定class</h2>
    <div :class="classObj">:class="classObj"</div>
    <div :class="{ current: isCurrent, focus: isFocus }">
      :class="{ current: isCurrent, focus: isFocus }"
    </div>
    <hr />

    <h2>直接绑定style</h2>
    <div :style="styleObj">:style="styleObj"</div>
    <div :style="{ color: color, fontSize: '20px', fontWeight: fontWeight }">
      :style="{ color: color, fontSize: '20px', fontWeight: fontWeight }"
    </div>
    <hr />
    <pre v-pre>
  data() {
    return {
      classA: "current",
      classB: "focus",
      classC: "visited",
      classObj: {
        current: false,
        focus: false,
        visited: true
      },
      isCurrent: true,
      isFocus: true,
      color: "skyblue",
      fontWeight: "bold",
      styleObj: {
        color: "#ccc",
        fontSize: "50px"
      }
    };
  }
    </pre>
  </div>
</template>

<script>
export default {
  name: "demo2",
  data() {
    return {
      classA: "current",
      classB: "focus",
      classC: "visited",
      classObj: {
        current: false,
        focus: false,
        visited: true
      },
      isCurrent: true,
      isFocus: true,
      color: "skyblue",
      fontWeight: "bold",
      styleObj: {
        color: "#ccc",
        fontSize: "50px"
      }
    };
  },
  computed: {
    flag() {
      return this.$store.state.flagObject;
    }
  },
  watch: {
    flag: {
      handler() {
        console.log("监听");
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.current {
  color: blue;
}
.focus {
  color: red;
}
.visited {
  color: green;
}
</style>
