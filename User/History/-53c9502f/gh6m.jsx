import React from "react";
import "./coffee.scss";
import data from "../../data/data.json";
import coffee from "../../assets/coffee.png";
import moka from "../../assets/moka.png";

const Coffee = () => {
  return (
    <section className="coffee layout">
      <div className="layout__image-container">
        <img src={moka} alt="moka" className="coffee__moka" />
      </div>
      <h2 className="layout__title heading-secondary">Bebidas</h2>
      <div className="layout__data">
        {data.coffee.map((e) => (
          <div className="layout__item" key={e.name}>
            <p className="layout__data-list">{e.name}</p>
            <p className="layout__data-list">${e.prie}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={coffee} alt="coffee" className="coffee__coffee" />
      </div>
    </section>
  );
};

export default Coffee;
