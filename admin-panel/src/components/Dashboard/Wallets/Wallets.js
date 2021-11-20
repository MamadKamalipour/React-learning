import React, { useContext } from "react";

// icons
import { BsThreeDots } from "react-icons/bs";
// import Context
import { userContext } from "../../../context/UserContextProvider";
const Wallets = () => {
  const userdata = useContext(userContext);
  const wallets = userdata.user.wallets;
  return (
    <div className="wallets">
      <div className="wallets__info">
        <h4>Wallets</h4>
        <BsThreeDots />
      </div>
      <div className="wallets__container">
        {wallets.map((wallet) => {
          return (
            <div key={wallet.name} className="wallet">
              <img src={wallet.image} alt="" />
              <div className="wallet__info">
                <h3 className="wallet__info__title">{wallet.name}</h3>
                <div className="wallet__info__balance">
                  <h4>Balance:</h4>
                  <h3>{wallet.balance.toLocaleString()}</h3>
                </div>
                <div className="wallet__info__price">
                  <h4>USD:</h4>
                  <h3>${wallet.usd.toLocaleString()}</h3>
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
