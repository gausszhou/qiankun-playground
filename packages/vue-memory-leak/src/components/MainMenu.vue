<template>
  <aisde>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </aisde>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = router.getRoutes();
</script>

<script lang="ts">
export default {
  name: "MainMenu",
};
</script>

<style scoped>
ul {
  padding: 12px 4px;
}
li {
  text-align: left;
  padding-left: 4px;
  margin-bottom: 8px;
  cursor: pointer;
}
li:hover {
  color: #42b883;
}
</style>
