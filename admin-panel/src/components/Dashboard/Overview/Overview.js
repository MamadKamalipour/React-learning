import React from "react";
import Chart from "../../shared/Chart/Chart"
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
const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__title">
        <h3>Overview</h3>
        <div className="title__buttons">
          <button>Month</button>
          <button>Year</button>
        </div>
      </div>
      <div className="overview__info">
        <div className="outer">
          <div className="info__out">
            <h4>Total Balance:</h4>
          </div>
          <div className="info__in">
            <h4>USD</h4>
            <h3>17.3M</h3>
          </div>
        </div>
        <div className="outer">
            <div className="info__out">
              <h4>Revenue</h4>
            </div>
            <div className="info__in">
              <h4>USD</h4>
              <h3>14k</h3>
            </div>
          </div>
      </div>
      <div className="overview__graph">
      <Chart data={data}/>
      </div>
      <div className="overview__insights">
        <div className="insight">
          <h4>Invoices</h4>
          <div>
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="insight">
          <h4>Transactions</h4>
          <div>
            <h3>254</h3>
            <h4>Completed</h4>
          </div>
        </div>
      </div>
      <div className="overview__expand">
        <button>Exopand Chart</button>
      </div>
    </div>
  );
};

export default Overview;
