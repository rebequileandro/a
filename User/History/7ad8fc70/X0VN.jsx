import React from "react";
import "./card-modal.scss";

const CardModal = ({ modaData }) => {
  return (
    <div
      className={`card-modal ${
        modaData === "initial"
          ? ""
          : modaData
          ? "card-modal--show"
          : "card-modal--hide"
      }`}
    >
      CardModal
    </div>
  );
};

export default CardModal;
