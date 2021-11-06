import React, { useContext } from "react";
import { Link } from "react-router-dom";
// context
import { ProductContext } from "../../context/ProductContextProvider";

const ProductDetail = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return data ? (
  
  <div>
      <img src={image} alt={`${title} Pic`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>Category: </span>{category}</p>
        <div>
            <span>{price}$</span>
            <Link to="/products">Go Back Shopping</Link>
        </div>
      </div>
    </div>
  ):<h1>Loading...</h1> ;
};

export default ProductDetail;
