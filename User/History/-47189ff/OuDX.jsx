import React from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
const Landing = () => {
  return (
    <div className="landing">
      <div>
        <h1>Menú digital</h1>
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default Landing;
