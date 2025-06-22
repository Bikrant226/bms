import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <div className="w-[20vw]">
          <Sidebar />
        </div>
        <div className="w-[78vw]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
