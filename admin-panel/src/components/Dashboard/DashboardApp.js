import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Wallets from "./Wallets/Wallets";
import Expenses from "./Expenses/Expenses";
import Transactions from "./Transactions/Transactions";
import Overview from "./Overview/Overview";
import ActivityLog from "./ActivityLog/ActivityLog";
// import context
import UserContextProvider from "../../context/UserContextProvider";
const DashboardApp = () => {
  return (
      <UserContextProvider>
        <Navbar />
        <div className="app__grid">
          <div className="app__grid__1">
            <Wallets />
            <Expenses />
            <Transactions />
          </div>
          <div className="app__grid__2">
            <Overview />
            <ActivityLog />
          </div>
        </div>
      </UserContextProvider>
 
  );
};

export default DashboardApp;
