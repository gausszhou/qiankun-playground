<template>  
  <div class="app">  
    <Header />
    <div class="app-body">
      <MainMenu class="menu" />  
      <MainContent class="content" />  
    </div>
    <Footer />  
  </div>  
</template>  

<script>  
import Header from './components/Header.vue';  
import Footer from './components/Footer.vue';  
import MainMenu from './components/MainMenu.vue';  
import MainContent from './components/MainContent.vue';  

export default {  
  name: 'App',  
  components: {  
    Header,  
    Footer,  
    MainMenu,
    MainContent,  
  },  
}  
</script>  

<style>  
.app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  text-align: center;  
  color: #2c3e50;  
}  
.app-body {
  height: calc(100vh - 150px);
  display: flex;
}
.app-body .menu {
  width: 200px;
  border-right: 1px solid #f8f9fa;
}
.app-body .content {
  flex: 1;
}
</style>