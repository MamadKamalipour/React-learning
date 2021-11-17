import React from "react";
import Navbar from "./Navbar";
import Wallets from "./Wallets";
import Expenses from "./Expenses"
import Transactions from "./Transactions"
import Overview from "./Overview";
import ActivityLog from "./ActivityLog";
const DashboardApp = () => {
  return <div className="app">
    <Navbar />
    <div className="app__grid">
      <div className="app__grid__1">
        <Wallets/>
        <Expenses />
        <Transactions />
      </div>
      <div className="app__grid__2">
        <Overview/>
        <ActivityLog />
      </div>
    </div>
  </div>;
};

export default DashboardApp;
