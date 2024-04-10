import React from "react";
import "./item.scss";
const Item = (props) => {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ml}</p>
      </div>
      <img src={props.image} alt="drink" />
    </div>
  );
};

export default Item;
