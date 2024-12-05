<template>
  <div>
    <h2 style="text-align: left;">Test</h2>
    <div style="text-align: left;">
      <ul>
      <li v-for="(item, index) in longList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLongList } from '@/composables/useLongList'
const { longList } = useLongList(1000);
</script>
