import React, { useContext } from "react";
import Card from "../shared/Card/Card";
// context
import { cartContext } from "../../context/CardContextProvider";
import { Link } from "react-router-dom";
const Shopcard = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 &&
       <div>
        <p><span>Total Items: </span>{state.itemsCounter}</p>
        <p><span>Total Price: </span>{state.total}</p>
            <div>
                <button onClick={()=>{dispatch({type: 'CHECKOUT'})}}>Check Out</button>
                <button onClick={()=>{dispatch({type: 'CLEAR'})}}>Clear</button>
            </div>
       </div>
       }
       {
           state.checkout && <div>
            <h3>Checked Out <span>Successfully</span></h3>
            <Link to="/products">Buy More</Link>
           </div>
       }
       {
           !state.checkout && state.itemsCounter === 0 && <div>
            <h3>You have Nothing in your Card</h3>
            <Link to="/products">Want To Add Some Items?</Link>
           </div>
       }
    </div>
  );
};

export default Shopcard;
