import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// components
import Sidebar from "./components/shared/Sidebar/Sidebar";
import DashboardApp from "./components/Dashboard/DashboardApp";
import Setting from "./components/Setting/Setting";
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
            <Switch>
              <Route path="/account" component={Account} />
              <Route path="/news/:id" component={BlogDetail} />
              <Route path="/news" component={News} />
              <Route path="/sendmoney" component={SendMoney} />
              <Route path="/setting" component={Setting} />
              <Route path="/dashboard" component={DashboardApp} />
              <Redirect to="/dashboard" />
            </Switch>
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
