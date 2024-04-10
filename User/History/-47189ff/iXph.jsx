import React from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="heading-primary">Menú digital</h1>
        <img src={line} alt="line" loading="lazy" />
      </div>
    </div>
  );
};

export default Landing;
