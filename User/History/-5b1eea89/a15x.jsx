import React from "react";
import "./item.scss";
import editImage from "../../../assets/edit.svg";
const Item = (props) => {
  return (
    <div className="item-drink">
      <h3>{props.name}</h3>
      <img className="item-drink__image" src={props.image} alt="drink" />
      <button title="editar">
        <img src={editImage} alt="editar" />
      </button>
    </div>
  );
};

export default Item;
