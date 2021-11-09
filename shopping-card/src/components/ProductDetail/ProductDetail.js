import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
        <img src={product.image} alt={`${title} Pic`} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <span>Category: </span>
            {category}
          </p>
          <div>
            <span>{price}$</span>
            <Link to="/products">Go Back Shopping</Link>
          </div>
        </div>
      </div>

  ) : (
    <h1>Loading...</h1>
  );
};

export default ProductDetail;
