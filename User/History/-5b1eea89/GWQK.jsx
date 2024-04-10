import React from "react";
import "./item.scss";
const Item = (props) => {
  return (
    <div className="item-drink">
      <h3>{props.name}</h3>
      <img src={props.image} alt="drink" />
      <button>
        <img src={require("../../../assets/edit.svg")} alt="editar" />
      </button>
    </div>
  );
};

export default Item;
