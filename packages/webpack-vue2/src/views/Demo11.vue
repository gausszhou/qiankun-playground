<template>
  <div id="demo11">
    <h1>Demo11 —— 自定义指令</h1>

    <input type="text" v-focus.enter="123456" />

    <div class="drag" v-drag>这个DIV可以拖拽</div>
  </div>
</template>

<script>
export default {
  name: "demo11",
  data() {
    return {};
  },
  directives: {
    focus: {
      inserted: (el, binding, vnode) => {
        console.log(el, binding, vnode);
        el.focus();
      }
    },
    drag: {
      inserted: el => {
        const fnDown = ev => {
          console.log(ev);
          // 获取偏移和按下时的坐标
          const currentX = el.offsetLeft;
          const currentY = el.offsetTop;
          const downX = ev.clientX;
          const downY = ev.clientY;
          const fnMove = ev => {
            // 获取终点=差值+起点
            const nowX = ev.clientX - downX + currentX;
            const nowY = ev.clientY - downY + currentY;

            // 赋值
            el.style.left = nowX + "px";
            el.style.top = nowY + "px";
          };
          const fnUp = ev => {
            console.log(ev);
            document.removeEventListener("mousemove", fnMove, false);
            document.removeEventListener("mouseup", fnUp, false);
          };
          document.addEventListener("mousemove", fnMove, false);
          document.addEventListener("mouseup", fnUp, false);
          return false;
        };

        el.addEventListener("mousedown", fnDown, false);
      }
    }
  },
  methods: {}
};
</script>

<style>
.drag {
  position: absolute;
  width: 400px;
  height: 300px;
  background-color: red;
  user-select: none;
}
</style>
