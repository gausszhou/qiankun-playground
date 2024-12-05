export function createRoutes(base = "") {
  return [
    {
      path: base + "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: base +"/test",
      name: "Test",
      component: () => import("@/views/Test.vue"),
    },
    {
      path: base +"/el-collapse",
      name: "ElCollapse",
      component: () => import("@/views/ElCollapse.vue"),
    },
    {
      path: base +"/el-dropdown",
      name: "ElDropdown",
      component: () => import("@/views/ElDropdown.vue"),
    },
    {
      path: base +"/el-menu",
      name: "ElMenu",
      component: () => import("@/views/ElMenu.vue"),
    },
  ];
}

