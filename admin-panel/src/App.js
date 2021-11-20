import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// components
import Sidebar from "./components/shared/Sidebar/Sidebar";
import DashboardApp from "./components/Dashboard/DashboardApp";
import SendMoney from "./components/SendMoney/SendMoney";
import News from "./components/News/News";
import BlogDetail from "./components/News/BlogDetail/BlogDetail";
import Account from "./components/Account/Account";

// context
import BlogContextProvider from "./context/BlogContextProvider";
import UserContextProvider from "./context/UserContextProvider";

// styles
import "./scss/style.scss";
const App = () => {
  return (
    <UserContextProvider>
      <BlogContextProvider>
        <div className="dashboard">
          <Sidebar />
          <div className="app">
            <Routes>
              <Route path="/account" element={<Account />} />
              <Route path="/news/:id" element={<BlogDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/sendmoney" element={<SendMoney />} />
              <Route path="/dashboard" element={<DashboardApp />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
        <div className="shapes__1"></div>
        <div className="shapes__2"></div>
        <div className="shapes__3"></div>
      </BlogContextProvider>
    </UserContextProvider>
  );
};

export default App;
