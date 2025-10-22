import { registerMicroApps } from "qiankun";
import { base as base_ } from "../../../config.json";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const getActiveRule = (hash: string) => (location: Location) => {
  const flag = location.hash.startsWith(hash);
  return flag;
};

const base: string = (process as any).env.NODE_ENV === "development" ? "" : base_;

console.log("[once] base", base);

const apps = [
  {
    name: "vite-es-vue2",
    entry: base ? `${base}vite-es-vue2/` : "//localhost:7001",
  },
  {
    name: "vite-es-vue3",
    entry: base ? `${base}vite-es-vue3/` : "//localhost:7002",
  },
  {
    name: "vite-react",
    entry: base ? `${base}vite-react/` : "//localhost:8001",
  },
  {
    name: "vite-vue2",
    entry: base ? `${base}vite-vue2/` : "//localhost:8004",
  },
  {
    name: "vite-vue3",
    entry: base ? `${base}vite-vue3/` : "//localhost:8005",
  },
  {
    name: "webpack-react",
    entry: base ? `${base}webpack-react/` : "//localhost:9001",
  },
  {
    name: "webpack-vue2",
    entry: base ? `${base}webpack-vue2/` : "//localhost:9002",
  },
  {
    name: "webpack-vue3",
    entry: base ? `${base}webpack-vue3/` : "//localhost:9003",
  },
];

function getMicroApps(apps: any[]) {
  return apps.map(app => {
    return {
      name: app.name,
      entry: app.entry,
      container: "#micro-app-container",
      activeRule: getActiveRule("#/" + app.name),
      props: {
        base: "/" + app.name,
        progress: NProgress,
      },
    };
  });
}

const hooks = {
  beforeLoad: async (app: any) => {
    NProgress.start();
    console.log("[hook] beforeLoad", app.name);
  },
  afterMount: async (app: any) => {
    NProgress.done();
    console.log("[hook] afterMount", app.name);
  },
  beforeUnmount: async (app: any) => {
    NProgress.start();
    console.log("[hook] beforeUnmount", app.name);
  },
  afterUnmount: async (app: any) => {
    NProgress.done();
    console.log("[hook] afterUnmount ", app.name);
  },
};

export function registerQiankun() {
  const microApps = getMicroApps(apps);
  console.log("[once] microApps", microApps);
  registerMicroApps(microApps, hooks);
}
