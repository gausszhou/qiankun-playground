<template>  
  <main>  
    <router-view></router-view>  
  </main>  
</template>  

<script>  
export default {  
  name: 'MainContent',  
}  
</script>  

<style scoped>  
main {
  background-color: #fff;
  overflow-y: auto;
  padding: 1em;
}  
</style>