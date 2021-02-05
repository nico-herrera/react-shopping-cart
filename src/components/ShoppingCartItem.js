import React from "react";

const Item = (props) => {
  console.log(props);
  // const removeItem = (id) => {
  //   if (id === props.id) {
  // 	  return
  //   }
  // };

  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
