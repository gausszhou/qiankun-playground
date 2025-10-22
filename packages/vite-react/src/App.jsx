import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Vite + React + Legacy</h1>
      <div style={{ marginBottom: "20px" }}>
        <Link to={"/vite-react/home"}>Go to Home</Link>
        <Link style={{ marginLeft: "20px" }} to={"/vite-react/about"}>
          Go to About
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
