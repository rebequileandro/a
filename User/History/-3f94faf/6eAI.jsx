import "./classic-pizza.scss";
import pizza from "../../assets/pizza.png";
import data from "../../data/data.json";

const ClassicPizza = () => {
  return (
    <div className="classic-pizza">
      <h2 className="classic-pizza__title">entradas</h2>
      <div className="classic-pizza__data">
        {data.classicPizza.map((e) => (
          <div>
            <div className="classic-pizza__item">
              <p className="classic-pizza__data-list">{e.name}</p>
              <p className="classic-pizza__data-list">{e.prie}</p>
            </div>
          </div>
        ))}
      </div>

      <img src={pizza} alt="pizza" className="classic-pizza__pizza-top" />
      <img src={pizza} alt="pizza" className="classic-pizza__pizza-bottom" />
    </div>
  );
};

export default ClassicPizza;
