import React from "react";
import "./card-modal.scss";

const CardModal = ({ modaData }) => {
  return (
    <div className={`card-modal ${modaData ? "card-modal--show" : ""}`}>
      CardModal
    </div>
  );
};

export default CardModal;
