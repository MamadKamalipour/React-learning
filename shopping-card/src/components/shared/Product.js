import React from "react";
import { shorten } from "../../helpers/function";
import { Link } from "react-router-dom";

const Product = ({productData}) => {
  return (
    <div style={{width: '25%', display: 'flex', flexDirection:"column" , alignItems: 'center' ,marginBottom: '20px'}}>
      <img src={productData.image} alt="" style={{width: "200px"}} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`} >Details</Link>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
