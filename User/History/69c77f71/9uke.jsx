import React from "react";
import "./entree.scss";
import cob from "../../assets/cob.png";
import cheese from "../../assets/cheese.png";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const Entree = () => {
  return (
    <section className="entree layout">
      <div className="entree__image-container">
        <img src={cob} alt="cob" className="entree__cob" loading="lazy" />
      </div>
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="layout__data">
        {data.entradas.map((e) => (
          <MenuItem key={e.name} name={e.name} price={e.price} />
        ))}
      </div>
      <div className="entree__image-container--right">
        <img
          src={cheese}
          alt="cheese"
          className="entree__cheese"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Entree;
