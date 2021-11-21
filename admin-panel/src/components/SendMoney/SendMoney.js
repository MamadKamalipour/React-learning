import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Wallets from "../Dashboard/Wallets/Wallets";
import QuickTransaction from "./QuickTransaction/QuickTransaction"; 
const SendMoney = () => {
  return (
   <>
        <Navbar />
      <div className="sendmoney">
        <Wallets />
        <QuickTransaction />
      </div>
   </>
  );
};

export default SendMoney;
