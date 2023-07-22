import Vue from "vue";
import VueRouter from "vue-router";
import HashContaianer from "@/Hash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: { name: "demo1" }
  },
  {
    path: "demo1",
    name: "demo1",
    component: () => import("../views/Demo1.vue")
  },
  {
    path: "demo2",
    name: "demo2",
    component: () => import("../views/Demo2.vue")
  },
  {
    path: "demo3",
    name: "demo3",
    component: () => import("../views/Demo3.vue")
  },
  {
    path: "demo4",
    name: "demo4",
    component: () => import("../views/Demo4.vue")
  },
  {
    path: "demo5",
    name: "demo5",
    component: () => import("../views/Demo5.vue")
  },
  {
    path: "demo6",
    name: "demo6",
    component: () => import("../views/Demo6.vue")
  },
  {
    path: "demo7",
    name: "demo7",
    component: () => import("../views/Demo7.vue")
  },
  {
    path: "demo8",
    name: "demo8",
    component: () => import("../views/Demo8.vue")
  },
  {
    path: "demo9",
    name: "demo9",
    component: () => import("../views/Demo9.vue")
  },
  {
    path: "demo10",
    name: "demo10",
    component: () => import("../views/Demo10.vue")
  },
  {
    path: "demo11",
    name: "demo11",
    component: () => import("../views/Demo11.vue")
  },
  {
    path: "demo12",
    name: "demo12",
    component: () => import("../views/Demo12.vue")
  },
  {
    path: "demo13",
    name: "demo13",
    component: () => import("../views/Demo13.vue")
  },
  {
    path: "demo14",
    name: "demo14",
    component: () => import("../views/Demo14.vue")
  },
  {
    path: "demo15",
    name: "demo15",
    component: () => import("../views/Demo15.vue")
  },
  {
    path: "demo16",
    name: "demo16",
    component: () => import("../views/Demo16.vue")
  },
  {
    path: "demo17/:id(\\d+)?/:type?",
    meta: {
      title: "demo17"
    },
    name: "demo17",
    component: () => import("../views/Demo17.vue"),
    children: [
      {
        path: ":detail",
        name: "detail",
        component: () => import("../components/Detail.vue")
      }
    ]
  },

  {
    name: "demo18",
    path: "demo18",
    component: () => import("../views/Demo18.vue")
  },
  {
    name: "demo19",
    path: "demo19",
    component: () => import("../views/Demo19.vue")
  },
  {
    path: "demo20",
    name: "demo20",
    component: () => import("../views/Demo20.vue")
  },
  {
    name: "demo21",
    path: "demo21",
    component: () => import("../views/Demo21.vue")
  },
  {
    name: "demo22",
    path: "demo22",
    component: () => import("../views/Demo22.vue")
  },
  {
    name: "demo23",
    path: "demo23",
    component: () => import("../views/Demo23.vue")
  },
  {
    name: "demo24",
    path: "demo24",
    component: () => import("../views/Demo24.vue")
  },
  {
    name: "demo25",
    path: "demo25",
    component: () => import("../views/Demo25.vue")
  },
  {
    name: "demo26",
    path: "demo26",
    component: () => import("../views/Demo26.vue")
  },
  {
    name: "demo27",
    path: "demo27",
    component: () => import("../views/Demo27.vue")
  },
  {
    name: "demo28",
    path: "demo28",
    component: () => import("../views/Demo28.vue")
  },
  {
    name: "demo29",
    path: "demo29",
    component: () => import("../views/Demo29.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../components/404.vue")
  }
];

function getHashRoutes(base = "") {
  return [
    {
      path: base,
      name: "HashContaianer",
      component: HashContaianer,
      children: routes
    }
  ];
}

// 路径自动获取函数
function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf("/") + 1);
}

export function createRouter(base) {
  console.log(base)
  const hashRoutes = getHashRoutes(base) ;
  console.log(hashRoutes)
  // 最后创建路由对象，设置切换方式，设置路由得base，导入路由表
  const router = new VueRouter({
    mode: "hash", // 使用什么方式切换路由 // history  hash
    base: getAbsolutePath(), // vue-router里提供了一个base的属性，代表应用的基目录
    routes: hashRoutes
  });
  console.log(router)
  return router;
}
