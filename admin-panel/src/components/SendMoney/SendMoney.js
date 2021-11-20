import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Wallets from "../Dashboard/Wallets/Wallets";
import QuickTransaction from "./QuickTransaction/QuickTransaction"; 
import UserContextProvider from "../../context/UserContextProvider";
const SendMoney = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <div className="sendmoney">
        <Wallets />
        <QuickTransaction />
      </div>
    </UserContextProvider>
  );
};

export default SendMoney;
