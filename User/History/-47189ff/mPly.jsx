import React from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
const Landing = () => {
  return (
    <div className="landing layout-primary">
      <div className="landing__content">
        <h1>Menú digital</h1>
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default Landing;
