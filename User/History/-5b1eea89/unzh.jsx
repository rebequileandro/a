import React from "react";
import "./item.scss";
const Item = (props) => {
  return (
    <div className="item-drink">
      <h3>{props.name}</h3>
      <img src={props.image} alt="drink" />
    </div>
  );
};

export default Item;
