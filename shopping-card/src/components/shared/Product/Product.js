import React, { useContext } from "react";
import { shorten, isInCart, quantityCount } from "../../../helpers/function";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
// context
import { cartContext } from "../../../context/CardContextProvider";
const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <img src={productData.image} alt="" className={styles.image} />
      <h3 className={styles.title}>{shorten(productData.title)}</h3>
      <p className={styles.price}>{productData.price}$</p>
      <div className={styles.buttonsWrapper}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>

          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE_ITEM", payload: productData })
              }
              className={styles.button}

            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
              className={styles.button}
            >
              Add To Cart
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.buttonRemove}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          )}
          {
            quantityCount(state, productData.id) > 1 && <span>{quantityCount(state, productData.id)}</span>
          }
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.button}
              onClick={() =>
                dispatch({ type: "DECREASE_ITEM", payload: productData })
              }
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
