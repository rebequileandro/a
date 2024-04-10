import React from "react";
import Logo from "../../components/Logo/Logo";
import "./error404.scss";
import { useState } from "react";
import { useEffect } from "react";
import xlr1 from "../../assets/xlr-conector.png";
import xlr2 from "../../assets/xlr-conector1.png";

const Error404 = () => {
  const [logo, setLogo] = useState(true);
  const [fadeOut, setfadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setfadeOut(true);
      setTimeout(() => {
        setLogo(false);
        setfadeOut(false);
        setTimeout(() => {
          setLogo(true);
        }, 2000);
      }, 2500);
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="error">
      <img
        src={xlr1}
        alt=""
        className="error__xlr-conector error__xlr-conector--left"
      />
      {logo && (
        <div className="error__logo-wrapper">
          <Logo />
        </div>
      )}
      <img
        src={xlr2}
        className="error__xlr-conector error__xlr-conector--right"
      />
    </div>
  );
};

export default Error404;
