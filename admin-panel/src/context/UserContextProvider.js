import React, { useState, useEffect } from "react";
// assets
import wallet1 from "../assets/wallet1.png";
import wallet2 from "../assets/wallet2.png";

export const userContext = React.createContext();
const UserContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars

  const [user, setUser] = useState(() => {
    let defaultData = {
      name: "Mohammad",
      fname: "KamaliPour",
      email: "mohammad.kp8093@gmail.com",
      avatar: "../assets/profile.png",
      password: "123456",
      status: "online",
      totalbalance: 12345752.1,
      revenue: 14000,
      wallets: [
        {
          name: "Bitcoin",
          balance: "1,712.10",
          usd: 9241123.54,
          image: wallet1,
        },
        {
          name: "Ethereum",
          balance: "1,014.10",
          usd: 54272.54,
          image: wallet2,
        },
      ],
    };
    const ls = localStorage.getItem("user");
    
    if (ls) {
      defaultData = JSON.parse(ls)
      
    }
    return defaultData
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
