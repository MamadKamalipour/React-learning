import React, { useContext } from "react";
// components
import Product from "../shared/Product/Product";
// Context
import { ProductContext } from "../../context/ProductContextProvider";
// styles
import styles from "./Store.module.css"
const Store = () => {
  const products = useContext(ProductContext);
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
