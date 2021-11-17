import React from "react";

// icons
import { BsThreeDots } from "react-icons/bs";
// assets
import wallet1 from "../assets/wallet1.png";
import wallet2 from "../assets/wallet2.png";
const Wallets = () => {
  const wallets = [
    {
      name: "BTC (Bitcoin)",
      balance: "1,712.10",
      usd: "$9,241,123.54",
      image: wallet1,
    },
    {
      name: "ETH (Ethereum)",
      balance: "1,014.10",
      usd: "$54,272.54",
      image: wallet2,
    },
  ];
  return (
    <div className="wallets">
      <div className="wallets__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div>
      <div className="wallets__container">
        {wallets.map((wallet) => {
          return (
            <div className="wallet">
              <img src={wallet.image} alt="" />
              <div className="wallet__info">
                <h3 className="wallet__info__title">{wallet.name}</h3>
                <div className="wallet__info__balance">
                  <h4>Balance:</h4>
                  <h3>{wallet.balance}</h3>
                </div>
                <div className="wallet__info__price">
                  <h4>USD:</h4>
                  <h3>{wallet.usd}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wallets;
