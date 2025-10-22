<template>
  <div class="container">
    <h1>Vite + Vue3</h1>
    <div style="margin-bottom: 20px">
      <router-link :to="{name: 'Home'}">Go to Home</router-link>
      <router-link style="margin-left: 20px" :to="{name: 'About'}">Go to About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
.container {
  text-align: center;
  color: #42b883;
  border: 1px solid #42b883;
}
</style>