import React from "react";
import Logo from "../../components/Logo/Logo";
import "./mantenance.scss";
import { useState } from "react";
import { useEffect } from "react";
const Mantenance = () => {
  const [logo, setLogo] = useState(true);
  const [fadeOut, setfadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setfadeOut(true);
      setTimeout(() => {
        setLogo(false);
        setfadeOut(false);
      }, 2500);
      setTimeout(() => {
        setLogo(true);
      }, 2000);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mantenance">
      {logo && (
        <div
          className={`mantenance__logo-wrapper ${
            fadeOut && "mantenance__logo-wrapper--hidden"
          }`}
        >
          <Logo />
        </div>
      )}
    </div>
  );
};

export default Mantenance;
