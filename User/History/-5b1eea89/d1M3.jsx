import React from "react";
import "./item.scss";
import editImage from "../../../assets/edit.svg";
const Item = ({ data }) => {
  return (
    <div className="item-drink">
      <h3 className="item-drink__tilte">{data.nameDrink}</h3>
      <div className="item-drink__right-container">
        <img className="item-drink__image" src={data.imageDrink} alt="drink" />
        <button title="editar">
          <img src={editImage} alt="editar" />
        </button>
      </div>
    </div>
  );
};

export default Item;
