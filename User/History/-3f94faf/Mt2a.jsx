import React from "react";

const ClassicPizza = () => {
  return (
    <div className="classic-pizza">
      <h2 className="classic-pizza__title">entradas</h2>
      <div className="classic-pizza__data">
        {data.entradas.map((e) => (
          <div className="classic-pizza__item">
            <p className="classic-pizza__data-list">{e.name}</p>
            <p className="classic-pizza__data-list">{e.prie}</p>
          </div>
        ))}
      </div>

      <img src={cob} alt="cob" className="classic-pizza__cob" />
      <img src={cheese} alt="cheese" className="classic-pizza__cheese" />
    </div>
  );
};

export default ClassicPizza;
