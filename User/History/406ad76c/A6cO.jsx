import React from "react";
import "./back_button.scss";
import arrow from "../../assets/arrow-2.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      <img src={arrow} alt="atras" />
      VOLVER
    </button>
  );
};

export default BackButton;
