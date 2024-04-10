import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
import data from "../../data/data.json";
const Entree = () => {
  return (
    <section className="entree layout">
      <div className="entree__image-container">
        <img src={cob} alt="cob" className="entree__cob" />
      </div>
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="layout__data">
        {data.entradas.map((e) => (
          <div className="layout__item" key={e.name}>
            <p className="layout__data-list">{e.name}</p>
            <p className="layout__data-list">${e.prie}</p>
          </div>
        ))}
      </div>
      <div className="entree__image-container--right">
        <img src={cheese} alt="cheese" className="entree__cheese" />
      </div>
    </section>
  );
};

export default Entree;
