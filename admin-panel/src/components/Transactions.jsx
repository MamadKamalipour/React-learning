import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

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
      <div className="transactions__details">
        <div>
          <h4>Statistics</h4>
          <h4>Up by 50%</h4>
        </div>
        <div>
          <button>Year</button>
          <button>Month</button>
        </div>
      </div>
      <div className="transactions__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data} margin={{ top: 10 }}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ff4d6d" stopOpacity="0.4"/>
                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="Sell" stroke="#ee3b3b" fill="url(#colorview)" />
            <Area type="monotone" dataKey="Buy" stroke="#ee3b3b" fill="url(#colorview)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Transactions;
