import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import { createLifecyle, getMicroApp } from "vite-plugin-legacy-qiankun";
import App from "./App";
import packageJson from "../package.json";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";

const microApp = getMicroApp(packageJson.name);

console.log('[once] microApp', microApp)

function createRoutes(base = '') {
  return [
    {
      path: base + "/",
      element: <App></App>,
      children: [
        {
          path: "home",
          element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    }
  ];
}

let router = null;
const render = (props = {}) => {
  const { container, base} = props;
  const routes = createRoutes(base)
  router = createHashRouter(routes);  
  ReactDOM.createRoot(container?.querySelector("#root") ?? document.querySelector("#root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

if (microApp.__POWERED_BY_QIANKUN__) {
  createLifecyle(packageJson.name, {
    bootstrap() {
      console.log("[qiankun] bootstrap", packageJson.name);
      
    },
    mount(props) {
      console.log("[qiankun] mount", packageJson.name);
      console.log("[qiankun] window", window);
      render(props);
    },
    unmount() {
      console.log("[qiankun] unmount", packageJson.name);
      router.dispose();
      router = null;
    }
  });
} else {
  render();
}
