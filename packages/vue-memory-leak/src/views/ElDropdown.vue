<template>
  <div>
    <ul>
      <li style="margin-bottom: 4px; text-align: left;" v-for="(item, index) in longList" :key="index" :title="item">
        <el-dropdown>
          <el-button type="primary">
            Dropdown List<el-icon class="el-icon--right"
              ><arrow-down
            /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useLongList } from "@/composables/useLongList";
const { longList } = useLongList(50);
</script>
