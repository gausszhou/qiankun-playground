<template>
  <div class="demo27">
    <h1>Demo27 - Tree</h1>
    <el-tree
      :data="data"
      :props="defaultProps"
      node-key="id"
      :default-expand-all="true"
      @node-click="handleNodeClick"
    ></el-tree>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 2,
              label: "二级 1-1",
              children: [
                {
                  id: 3,
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
              children: [
                {
                  id: 6,
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              id: 7,
              label: "二级 2-2",
              children: [
                {
                  id: 8,
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          id: 9,
          label: "一级 3",
          children: [
            {
              id: 10,
              label: "二级 3-1",
              children: [
                {
                  id: 11,
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              id: 12,
              label: "二级 3-2",
              children: [
                {
                  id: 13,
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.changeData();
    }, 2000);
  },
  methods: {
    changeData() {
      let data = this.randomData();
      console.log(data.length);
    },
    randomData() {
      let arr = [];
      let num = 1;
      let ran1 = Math.ceil(Math.random() * 3) + 1;
      let ran2 = Math.ceil(Math.random() * 3) + 1;
      console.log(ran1, ran2);
      for (let i = 1; i <= ran1; i++) {
        let parent = {
          id: num++,
          label: "一级 " + i,
          children: []
        };
        for (let j = 1; j <= ran2; j++) {
          parent.children.push({
            id: num++,
            label: "二级 " + i + "-" + j
          });
        }
        arr.push(parent);
      }
      console.log("update");
      return arr;
    },
    handleNodeClick(data, node, ref) {
      console.log(data);
      console.log(node);
      console.log(ref);
    }
  },

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>
