import React from "react";
import "./card-modal.scss";
import { useSelector } from "react-redux";
const CardModal = () => {
  const modaData = useSelector((state) => state.mc);
  return (
    <div
      className={`card-modal-overlay ${
        modaData === "initial"
          ? ""
          : modaData
          ? "card-modal-overlay--show"
          : "card-modal-overlay--hide"
      }`}
    >
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
