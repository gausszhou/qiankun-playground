import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Empty from "../views/Empty.vue";

const routes = [
  {
    path: "",
    redirect: { name: "Main" }
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "about",
        name: "About",
        component: About
      }
    ]
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Empty",
    component: Empty
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
