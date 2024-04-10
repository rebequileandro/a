import React from "react";
import Logo from "../../components/Logo/Logo";
import "./mantenance.scss";
import { useState } from "react";
import { useEffect } from "react";
const Mantenance = () => {
  const [logo, setLogo] = useState(true);
  const [fadeOut, setfadeOut] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="mantenance">
      {logo && (
        <div
          className={`mantenance__logo-wrapper ${
            fadeOut && "mantenance__logo-wrappe--hidden"
          }`}
        >
          <Logo />
        </div>
      )}
    </div>
  );
};

export default Mantenance;
