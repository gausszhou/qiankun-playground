<template>
  <div>
    <div class="modal" v-show="isShow">
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
          <textarea
            name
            id
            cols="30"
            rows="4"
            v-model="modelData.skill"
            placeholder="多个技能之间用回车隔开"
          ></textarea>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css"></style>
