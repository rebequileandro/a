import React from "react";
import Logo from "../../components/Logo/Logo";
import "./error404.scss";
import { useState } from "react";
import { useEffect } from "react";
import xlr1 from "../../assets/xlr-conector.webp";
import xlr2 from "../../assets/xlr-conector1.webp";

const Error404 = () => {
  return (
    <div className="error">
      <img
        src={xlr1}
        alt=""
        className="error__xlr-conector error__xlr-conector--left"
      />
      <div className="error__logo-wrapper">
        <Logo />
      </div>
      <img
        src={xlr2}
        className="error__xlr-conector error__xlr-conector--right"
      />
    </div>
  );
};

export default Error404;
