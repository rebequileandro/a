import React from "react";
import "./back_button.scss";
import arrow from "../../assets/arrow-2.svg";
const BackButton = () => {
  return (
    <button>
      <img src={arrow} alt="volver" />
    </button>
  );
};

export default BackButton;
