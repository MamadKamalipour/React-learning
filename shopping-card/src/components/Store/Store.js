import React, { useContext,useState } from "react";
// components
import Product from "../shared/Product/Product";
import Navbar from "../shared/Navbar/Navbar";
import Loader from "../Loader/Loader";
// Context
import { ProductContext } from "../../context/ProductContextProvider";
// styles
import styles from "./Store.module.css"
const Store = () => {
  const products = useContext(ProductContext);
  const [search, setSearch] = useState("");

    const searchHandler = e =>{
        setSearch(e.target.value)
    }
    const searchProduct = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className={styles.container}>
    <Navbar value={search} searchHandler={searchHandler} />
      <div className={styles.products}>
      {products.length !==0 ? searchProduct.map((item) => (
        <Product key={item.id} productData={item} />
      )): <Loader />}
      </div>
    </div>
  );
};

export default Store;
