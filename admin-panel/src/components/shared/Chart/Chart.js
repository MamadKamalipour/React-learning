import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const Chart = (props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={props.data} margin={{ top: 10 }}>
          <defs>
            <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#ff4d6d" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#ff4d6d11" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {
            props.tooltip && <Tooltip /> 
          }
          <Area
            type="monotone"
            dataKey="Sell"
            stroke="#ee3b3b"
            fill="url(#colorview)"
          />
          <Area
            type="monotone"
            dataKey="Buy"
            stroke="#ee3b3b"
            fill="url(#colorview)"
          />
        </AreaChart>
      </ResponsiveContainer>

    );
};

export default Chart;