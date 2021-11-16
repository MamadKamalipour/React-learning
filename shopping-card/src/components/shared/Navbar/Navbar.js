import React, { useContext } from "react";
import { Link } from "react-router-dom";
// context
import { cartContext } from "../../../context/CardContextProvider";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const { state } = useContext(cartContext);

  return (
    <header>
      <div className={styles.navbar}>
        <Link to="/products">Products</Link>
        <input className={styles.input} type="text" placeholder="Search Products" value={props.search} onChange={props.searchHandler}/>
        <div className={styles.shopcard}>
          <Link to="/card">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          {state.itemsCounter > 0 && (
            <span className={styles.counter}>{state.itemsCounter}</span>
          )}
        </div>
      </div>
            
    </header>
  );
};

export default Navbar;
