import React from "react";
import "./item.scss";
import editImage from "../../../assets/edit.svg";
const Item = (props) => {
  return (
    <div className="item-drink">
      <h3>{props.name}</h3>
      <img src={props.image} alt="drink" />
      <button>
        <img src={editImage} alt="editar" />
      </button>
    </div>
  );
};

export default Item;
