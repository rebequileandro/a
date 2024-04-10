import React from "react";
import "./button-star-now.scss";
const ButtonStarNow = ({ setIsOpen }) => {
  return (
    <a
      href="https://app.shooza.co/"
      target="_blank"
      rel="noreferrer"
      className="star-now btn btn--primary"
    >
      Empieza ahora
    </a>
  );
};

export default ButtonStarNow;
