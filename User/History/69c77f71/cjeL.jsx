import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
const Entree = () => {
  return (
    <div className="entree layout-primary">
      <h2>entradas</h2>
      <img src={cob} alt="cob" className="entree__cob" />
      <img src={cheese} alt="cheese" className="entree__cheese" />
    </div>
  );
};

export default Entree;
