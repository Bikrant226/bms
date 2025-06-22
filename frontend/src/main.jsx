import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div className="bg-[url('src/assets/bms-bg.png')] bg-cover bg-center h-96">
    <App />
  </div>
);
