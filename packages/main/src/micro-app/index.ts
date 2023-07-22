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
    name: "vite_react",
    entry: base ? `${base}vite_react/` : "//localhost:9526"
  },
  {
    name: "vite_vue2",
    entry: base ? `${base}vite_vue2/` : "//localhost:9527"
  },
  {
    name: "vite_vue3",
    entry: base ? `${base}vite_vue3/` : "//localhost:9528"
  },
  {
    name: "webpack_vue2",
    entry: base ? `${base}webpack_vue2/` : "//localhost:9529"
  }
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
        progress: NProgress
      }
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
  }
};

export function registerQiankun() {
  const microApps = getMicroApps(apps);
  console.log("[once] microApps", microApps);
  registerMicroApps(microApps, hooks);
}
