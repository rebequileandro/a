import React from "react";
import "./item.scss";
import editImage from "../../../assets/edit.svg";
const Item = (props) => {
  return (
    <div className="item-drink">
      <h3>{props.name}</h3>
      <div>
        <img className="item-drink__image" src={props.image} alt="drink" />
        <button title="editar">
          <img src={editImage} alt="editar" />
        </button>
      </div>
    </div>
  );
};

export default Item;
