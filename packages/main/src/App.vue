<template>
  <div>
    <div class="header">
      <ul class="menu">
        <li class="menu-item" ><router-link style="color: #646cff;" to="/main">main</router-link></li>
        <!-- <li class="menu-item" ><router-link style="color: #087ea4" to="/vite-es-react">vite-es-react</router-link></li> -->
        <li class="menu-item" ><router-link style="color: #34495e" to="/vite-es-vue2">vite-es-vue2</router-link></li>
        <li class="menu-item" ><router-link style="color: #42b883" to="/vite-es-vue3">vite-es-vue3</router-link></li>
        <li class="menu-item" ><router-link style="color: #087ea4" to="/vite-react">vite-react</router-link></li>
        <li class="menu-item" ><router-link style="color: #34495e" to="/vite-vue2">vite-vue2</router-link></li>
        <li class="menu-item" ><router-link style="color: #42b883" to="/vite-vue3">vite-vue3</router-link></li>
        <!-- <li class="menu-item" ><router-link style="color: #34495e" to="/webpack-react">webapck-react</router-link></li> -->
        <li class="menu-item" ><router-link style="color: #34495e" to="/webpack-vue2">webapck-vue2</router-link></li>
        <li class="menu-item" ><router-link style="color: #42b883" to="/webpack-vue3">webapck-vue3</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="micro-app-container"></div>
  </div>
</template>

<style scoped>
.header {
  height: 56px;
  display: flex;
  justify-content: center;
}

.header .menu {
  display: flex;
}

.header .menu .menu-item {
  list-style: none;
  text-decoration: none;
  padding: 0 16px;
  font-size: 20px;
  cursor: pointer;
}

.header .menu .menu-item:hover {
  color: #409eff;
}
</style>
