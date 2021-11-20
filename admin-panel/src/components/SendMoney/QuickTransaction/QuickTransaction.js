import React, { useContext } from "react";
import { userContext } from "../../../context/UserContextProvider";
import Select from "react-select";
import { VscArrowSwap } from "react-icons/vsc";

const QuickTransaction = () => {
  const userdata = useContext(userContext);
  // eslint-disable-next-line no-unused-vars
  const wallets = userdata.user.wallets;

  const selectOptions = wallets.map((wallet) => {
    return { value: wallet.name, label: wallet.name };
  });
  



  return (
    <div className="sendmoney__wrapper">
      <h2>Select Your Wallet</h2>
      <Select options={selectOptions} />
      <div className="sendmoney__wrapper__inputs">
        <div className="input">
          <label >Amount</label>
          <input id="amount" type="text" />
        </div>
        <div className="input">
          <label >Receiver Address</label>
          <input type="text" id="address" />
        </div>
      </div>
      <div className="quick">
        <button>
          <VscArrowSwap />
          Quick Transition
        </button>
      </div>
    </div>
  );
};

export default QuickTransaction;
