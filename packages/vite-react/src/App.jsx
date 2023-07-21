import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [microName, setMicroName] = useState("vite_react");
  window.microName = "vite_react";
  const outPut = e => {
    setMicroName((window.microName = e.target.value));
  };

  return (
    <div className="container">
      <h1>Vite + React</h1>
      <div style={{ marginBottom: "20px" }}>
        <Link to={"/vite_react/home"}>Go to Home</Link>
        <Link style={{ marginLeft: "20px" }} to={"/vite_react/about"}>
          Go to About
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
