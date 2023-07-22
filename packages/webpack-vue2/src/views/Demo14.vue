<template>
  <div id="demo14">
    <h1>Demo14 —— 组件案例</h1>
    <table class="table">
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
          <span v-for="(skill, skillIndex) of user.skill" :key="skillIndex">
            {{ skill }}
          </span>
        </td>
        <td>
          <a href="javascript:;" @click="editUser(user)">编辑</a>
          |
          <a href="javascript:;" @click="deleteUser(index)">删除</a>
        </td>
      </tr>
    </table>

    <edit-modal></edit-modal>
  </div>
</template>

<script>
import editModal from "../components/Modal";
export default {
  componentss: {
    editModal
  },
  name: "demo14",
  data: function() {
    return {
      isShow: false,
      modelData: [],
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
      ]
    };
  },
  computed: {},
  methods: {
    submit() {},
    cancel() {},
    editUser(user) {
      this.isShow = true;
      this.modelData = { ...user }; // 深拷贝
    },
    deleteUser(index) {
      if (window.confirm("是否确定删除")) {
        this.userList.splice(index, 1);
      }
    }
  },
  mounted: function() {}
};
</script>
<style></style>
