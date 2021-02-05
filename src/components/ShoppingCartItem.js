import React from "react";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Item = (props) => {
  const { cart, removeItem } = useContext(CartContext);
  console.log(props);
  console.log(removeItem);

  return (
    <div className="shopping-cart_item">
      <div>
        <img src={props.image} alt={props.title ? props.title : null} />
        <div>
          <h1>{props.title}</h1>
          <p>{props.price ? `$ ${props.price}` : null}</p>
          {props.id ? (
            <button onClick={() => removeItem(props.id)}>
              Remove from cart
            </button>
          ) : (
            <p>No more books!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
