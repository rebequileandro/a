import React from "react";
import "./card-modal.scss";

const CardModal = ({ modaData }) => {
  console.log(modaData);
  return (
    <div className="card-modal-overlay">
      <div
        className={`card-modal ${
          modaData === "initial"
            ? ""
            : modaData
            ? "card-modal--show"
            : "card-modal--hide"
        }`}
      ></div>
    </div>
  );
};

export default CardModal;
