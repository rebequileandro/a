import React from "react";
import "./back_button.scss";
import arrow from "../../assets/arrow-2.svg";
const BackButton = () => {
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <img src={arrow} alt="atras" />
      VOLVER
    </button>
  );
};

export default BackButton;
