import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="bg-[url('src/assets/bms-bg.png')] bg-cover bg-center h-96">
      <App />
      {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
    </div>
  </BrowserRouter>
);
