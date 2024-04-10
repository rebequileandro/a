import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
import data from "../../data/data.json";
const Entree = () => {
  return (
    <div className="entree">
      <div className="entree__image-container">
        <img src={cob} alt="cob" className="entree__cob" />
      </div>
      <h2 className="entree__title">entradas</h2>
      <div className="entree__data">
        {data.entradas.map((e) => (
          <div className="entree__item">
            <p className="entree__data-list">{e.name}</p>
            <p className="entree__data-list">${e.prie}</p>
          </div>
        ))}
      </div>
      <div className="entree__image-container">
        <img src={cheese} alt="cheese" className="entree__cheese" />
      </div>
    </div>
  );
};

export default Entree;
