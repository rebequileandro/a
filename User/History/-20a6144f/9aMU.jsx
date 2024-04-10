import React from "react";
import Logo from "../../components/Logo/Logo";
import "./mantenance.scss";
import { useState } from "react";
import { useEffect } from "react";
const Mantenance = () => {
  const [logo, setLogo] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className="mantenance">
      {logo && (
        <div className="mantenance__logo-wrapper">
          <Logo />
        </div>
      )}
    </div>
  );
};

export default Mantenance;
