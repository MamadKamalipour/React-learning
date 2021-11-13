import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css"
import Navbar from "../shared/Navbar/Navbar";
// context
import { ProductContext } from "../../context/ProductContextProvider";

const ProductDetail = (props) => {
  const id = props.match.params.id;
  const [product, setProduct] = useState("");

  const data = useContext(ProductContext);
  useEffect(() => {
    if (data.length > 0) {
      setProduct(data[id - 1]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const {  title, description, price, category } = product;

  return product ? (
    <div className={styles.wrapper}>
        <Navbar />
        <img src={product.image} alt={`${title} Pic`} className={styles.image}/>
        <div className={styles.cardWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.categorytitle}>
          Category:
            <span className={styles.category}>{category} </span>
            
          </p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{price}$</span>
            <Link to="/products">Go Back Shopping</Link>
          </div>
        </div>
      </div>

  ) : (
    <h1>Loading...</h1>
  );
};

export default ProductDetail;
