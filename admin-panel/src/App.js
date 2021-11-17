import React from "react";
// components
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

// styles
import "./scss/style.scss";

const App = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__1"></div>
      <div className="shapes__2"></div>
      <div className="shapes__3"></div>
    </>
  );
};

export default App;
