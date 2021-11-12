import React, { useContext } from "react";
import { shorten } from "../../../helpers/function";
import { cartContext } from "../../../context/CardContextProvider";
import styles from "./Card.module.css"
const Card = (props) => {
  const {dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div className={styles.cardWrapper}>
      <img className={styles.image} src={image} alt={`${title} Pic`} />
      <div>
        <h4 className={styles.title}>{shorten(title)}</h4>
        <span className={styles.price}>{price}$</span>
      </div>
      <span className={styles.quantity}>{quantity}</span>
      <div>
        <button
        className={styles.button}
          onClick={() =>
            dispatch({ type: "INCREASE_ITEM", payload: props.data })
          }
        >
          +
        </button>
        {quantity === 1 ? (
          <button
        className={styles.buttonRemove}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        ) : (
          <button
        className={styles.button}

            onClick={() =>
              dispatch({ type: "DECREASE_ITEM", payload: props.data })
            }
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
