import React, { useContext, useState } from "react";
import { userContext } from "../../../context/UserContextProvider";
import Select from "react-select";
import { VscArrowSwap } from "react-icons/vsc";

const QuickTransaction = () => {
  const userdata = useContext(userContext);
  // eslint-disable-next-line no-unused-vars
  const wallets = userdata.user.wallets;
  const setContextValue = userdata.setUser;

  const [selectedOption, setSelectedOption] = useState({
    label: "Ethereum",
    value: "Ethereum",
  });
  const [form, setForm] = useState({ amount: "", address: "" });
  // const [errors , setErrors] =useState({name:"" , massage:""})

  const selectOptions = wallets.map((wallet) => {
    return { value: wallet.name, label: wallet.name };
  });

  const walletChangeHandler = (e) => {
    setSelectedOption(e);
  };

  const inputhandler = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      wallet: selectedOption,
    };
    const balanceSetter = wallets.find((wallet) => {
      return wallet.name === data.wallet.value;
    });
    balanceSetter.usd = balanceSetter.usd - data.amount;
    setContextValue((prev) => {
      return { ...prev,
        
        wallets:[
          ...prev.wallets.filter(wallet =>{
            return wallet.name !== data.wallet.value;
          }),
          balanceSetter
          
      ]
      };
    });

    // let errors = {}
    // try {
    //   if(data.amount.length <= 0){
    //     throw new Error({name: "amount", massage:"amount is requaire"})
    //   }

    // } catch (error) {
    //   setErrors(error)
    // }
  };

  return (
    <div className="sendmoney__wrapper">
      <form onSubmit={formHandler} style={{ display: "block", width: "100%" }}>
        <h2>Select Your Wallet</h2>
        <Select
          options={selectOptions}
          defaultValue={selectedOption}
          onChange={walletChangeHandler}
          value={selectedOption}
        />
        <div className="sendmoney__wrapper__inputs">
          <div className="input">
            <label>Amount</label>
            <input
              id="amount"
              type="text"
              name="amount"
              value={form.amount}
              onChange={inputhandler}
            />
          </div>
          <div className="input">
            <label>Receiver Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={inputhandler}
            />
          </div>
        </div>
        <div className="quick">
          <button type="submit">
            <VscArrowSwap />
            Quick Transition
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickTransaction;
