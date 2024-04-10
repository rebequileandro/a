import React from "react";

const Drinks = () => {
  return (
    <section className="desserts layout">
      <div className="layout__image-container">
        <img
          src={strawberry}
          alt="strawberry"
          className="desserts__strawberry"
        />
      </div>
      <h2 className="layout__title heading-secondary">Bebidas</h2>
      <div className="layout__data">
        {data.desserts.map((e) => (
          <div className="layout__item" key={e.name}>
            <p className="layout__data-list">{e.name}</p>
            <p className="layout__data-list">${e.prie}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={cake} alt="cake" className="desserts__cake" />
      </div>
    </section>
  );
};

export default Drinks;
