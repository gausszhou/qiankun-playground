import { start } from 'qiankun';
import { createApp } from 'vue';
import App from './App.vue';
import { registerQiankun } from './micro-app';
import router from './router';
import './main.css';

const appInstance = createApp(App)

appInstance.use(router);
appInstance.mount('#app')

registerQiankun();

start({
  sandbox: {
    // strictStyleIsolation: true,
    experimentalStyleIsolation: true
  }
})
