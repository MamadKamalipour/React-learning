import React from "react";
import Chart from "../../shared/Chart/Chart";
const data = [
  {
    Sell: 2000,
    Buy: 2400,
  },
  {
    Sell: 4000,
    Buy: 1398,
  },
  {
    Sell: 5000,
    Buy: 12400,
  },
  {
    Sell: 52000,
    Buy: 16400,
  },
  {
    Sell: 4500,
    Buy: 400,
  },
  {
    Sell: 12000,
    Buy: 12400,
  },
  {
    Sell: 15000,
    Buy: 13000,
  },  {
    Sell: 2000,
    Buy: 2400,
  },
  {
    Sell: 4000,
    Buy: 1398,
  },
  {
    Sell: 5000,
    Buy: 12400,
  },
  {
    Sell: 2000,
    Buy: 16400,
  },
  {
    Sell: 4500,
    Buy: 400,
  },
  {
    Sell: 12000,
    Buy: 12400,
  },
  {
    Sell: 15000,
    Buy: 13000,
  },
];
const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions__info">
        <h3>Transactions</h3>
        <div className="transactions__info__detailed">
          <div>
            <h5>You Bought:</h5>
            <h4>$1,324,521.32</h4>
          </div>
          <div>
            <h5>You Sold:</h5>
            <h4>$3,154,451.62</h4>
          </div>
        </div>
      </div>
      <div className="transactions__graph">
      <Chart data={data} tooltip={true}/>

      </div>
    </div>
  );
};

export default Transactions;
