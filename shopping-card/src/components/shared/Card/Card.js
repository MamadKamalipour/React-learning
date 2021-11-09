import React, { useContext } from "react";
import { shorten } from "../../../helpers/function";
import { cartContext } from "../../../context/CardContextProvider"; 
const Card = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div>
      <img style={{width: '100px',}} src={image} alt={`${title} Pic`} />
      <div>
        <h4>{shorten(title)}</h4>
        <span>{price}</span>
      </div>
      <span>{quantity}</span>
      <div>
      <button onClick={() => dispatch({type:"INCREASE_ITEM",payload: props.data})}>+</button>
            {
                quantity ===1 ? <button onClick={() => dispatch({type:"REMOVE_ITEM",payload: props.data})}><i className="fas fa-trash-alt"></i></button>:
                <button onClick={() => dispatch({type:"DECREASE_ITEM",payload: props.data})}>-</button>
            
                        }
      </div>
    </div>
  );
};

export default Card;
