import React from "react";
// icon
import { BsThreeDots } from "react-icons/bs";
// assets
import expenseLogo1 from "../assets/expenseLogo1.png";
import expenseLogo2 from "../assets/expenseLogo2.png";
import expenseLogo3 from "../assets/expenseLogo3.png";
import expenseLogo4 from "../assets/expenseLogo4.png";
import expenseLogo5 from "../assets/expenseLogo5.png";
import expenseLogo6 from "../assets/expenseLogo6.png";
import expenseLogo7 from "../assets/expenseLogo7.png";

const Expenses = () => {
  const expensData = [
    {
      logo: expenseLogo1,
      name: "Amazon",
      price: "-$5k",
    },
    {
      logo: expenseLogo2,
      name: "Spotify",
      price: "-$50",
    },
    {
      logo: expenseLogo3,
      name: "Netflix",
      price: "-$200",
    },
    {
      logo: expenseLogo4,
      name: "Adobe",
      price: "-$20k",
    },
    {
      logo: expenseLogo5,
      name: "Apple",
      price: "-$30k",
    },
    {
      logo: expenseLogo6,
      name: "AirBNB",
      price: "-$7k",
    },
    {
      logo: expenseLogo7,
      name: "Google",
      price: "-$70",
    },
  ];
  return (
    <div className="expenses">
      <div className="expenses__info">
        <h4>Expenses</h4>
        <BsThreeDots />
      </div>
      <div className="expenses__container">
        {expensData.map((expense) => {
          return (
            <div className="expense">
              <img src={expense.logo} alt="" />
              <h4 className="expense__title">{expense.name}</h4>
              <h6 className="expense__price">{expense.price}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;
