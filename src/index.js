import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AnimCursor from "./components/animatedCursor/AnimCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimCursor />
    <App />
  </React.StrictMode>
);
