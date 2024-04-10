import React from "react";
import "./button-star-now.scss";
const ButtonStarNow = ({ setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className="star-now btn btn--primary"
    >
      Empieza ahora
    </button>
  );
};

export default ButtonStarNow;
