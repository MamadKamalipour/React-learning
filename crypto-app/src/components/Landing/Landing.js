import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import searchIcone from "../../imgs/iconmonstr-search-thin.svg";
//components
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
//api
import { getCoin } from "../../services/api";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search , setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }
const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <div className={styles.search_container}>
        <img src={searchIcone} alt="Search icone" />
        <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
      </div>

      {coins.length === 0 ? (
        <Loader />
      ) : (
        <div className={styles.coinsWrapper}>
          {searchedCoin.map((coin) => (
            <Card
              key={coin.id}
              image={coin.image}
              title={coin.name}
              change24h={coin.price_change_percentage_24h}
              price={coin.high_24h}
              marketCap={coin.market_cap}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Landing;
