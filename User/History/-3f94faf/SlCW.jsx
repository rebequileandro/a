import React from "react";
import pizza from "../../assets/pizza.png";
import data from "../../data/data.json";

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

      <img src={pizza} alt="pizza-1" className="classic-pizza__cob" />
      <img src={pizza} alt="pizza-2" className="classic-pizza__cheese" />
    </div>
  );
};

export default ClassicPizza;
