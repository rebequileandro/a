import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
const Entree = () => {
  return (
    <div className="entree">
      <h2 className="entree__title">entradas</h2>
      <img src={cob} alt="cob" className="entree__cob" />
      <img src={cheese} alt="cheese" className="entree__cheese" />
    </div>
  );
};

export default Entree;
