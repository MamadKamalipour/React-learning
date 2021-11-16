import React, { useContext } from "react";
import Card from "../shared/Card/Card";
import styles from "./Shopcard.module.css"
// context
import { cartContext } from "../../context/CardContextProvider";
import { Link } from "react-router-dom";
const Shopcard = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.shopcardWrapper}>
      <div className={styles.cards}>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 &&
       <div className={styles.checkoutWrapper}>
        <div className={styles.info}>
        <p className={styles.numbers}><span  className={styles.title} >Total Items: </span>  {state.itemsCounter}</p>
        <p className={styles.numbers}><span className={styles.title} >Total Price: </span>  {state.total}$</p>
        </div>
            <div className={styles.buttonsWrapper}>
                <button className={styles.buttonRemove} onClick={()=>{dispatch({type: 'CLEAR'})}}>Clear</button>
                <button className={styles.button}  onClick={()=>{dispatch({type: 'CHECKOUT'})}}>Check Out</button>
            </div>
       </div>
       }
       {
           state.checkout &&
            <div className={styles.notifWrapper}>
            <h3 className={styles.title}>Checked Out <span>Successfully</span></h3>
            <Link to="/products">Buy More</Link>
           </div>
       }
       {
           !state.checkout && state.itemsCounter === 0 &&
            <div className={styles.notifWrapper}>
            <h3  className={styles.title}>You have Nothing in your Card</h3>
            <Link to="/products">Want To Add Some Items?</Link>
           </div>
       }
    </div>
  );
};

export default Shopcard;
