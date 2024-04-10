import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
const Entree = () => {
  return (
    <div className="entree">
      <h2>entradas</h2>
      <img src={cob} alt="cob" />
      <img src={cheese} alt="cheese" />
    </div>
  );
};

export default Entree;
