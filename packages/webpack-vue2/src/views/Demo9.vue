<template>
  <div id="demo9">
    <h1>Demo9 ——案例 表格数据操作</h1>
    <table class="table" v-if="show">
      <tr>
        <th>姓名</th>
        <th>外号</th>
        <th>技能</th>
        <th>操作</th>
      </tr>
      <tr v-for="(user, index) of userList" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.nickName }}</td>
        <td>
          <span v-for="(skill, skillIndex) of user.skill" :key="skillIndex">{{ skill }}</span>
        </td>
        <td>
          <a href="javascript:;" @click="editUser(user, index)">编辑</a>
          |
          <a href="javascript:;" @click="deleteUser(index)">删除</a>
        </td>
      </tr>
    </table>

    <div class="model" v-show="isShow">
      <form action class="form">
        <label for class="form-item">
          <span class="label-text">姓名：</span>
          <input type="text" class="form-input" v-model="modelData.name" />
        </label>
        <br />
        <label for class="form-item">
          <span class="label-text">姓名：</span>
          <input type="text" class="form-input" v-model="modelData.nickName" />
        </label>
        <br />
        <label for class="form-item">
          <span class="label-text">姓名：</span>
          <textarea name id cols="30" rows="4" v-model="modelData.skill" placeholder="多个技能之间用回车隔开"></textarea>
        </label>
        <button @click.prevent="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo9",
  data: function () {
    return {
      show: true,
      isShow: false,
      modelData: {},
      userList: [
        {
          id: 1562431234,
          name: "欧阳锋",
          nickName: "老毒物",
          skill: ["蛤蟆功", "灵蛇杖"]
        },
        {
          id: 1321231212,
          name: "洪七公",
          nickName: "老叫花",
          skill: ["降龙十八掌", "打狗棒法"]
        },
        {
          id: 5656554613,
          name: "黄药师",
          nickName: "黄老邪",
          skill: ["弹指神通", "碧海潮生曲"]
        },
        {
          id: 79646579414,
          name: "周伯通",
          nickName: "老顽童",
          skill: ["左右互博", "全真剑法"]
        }
      ],
      index: 0
    };
  },
  computed: {},
  methods: {
    cancel() { },
    editUser(user, index) {
      this.isShow = true;
      this.modelData = { ...user }; // 深拷贝
      this.index = index;
    },
    submit() {
      this.userList[this.index] = this.modelData;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    deleteUser(index) {
      if (window.confirm("是否确定删除")) {
        this.userList.splice(index, 1);
      }
    }
  },
  mounted: function () { }
};
</script>
<style scoped>
table {
  width: 400px;
  margin: 0 auto;
}
</style>
