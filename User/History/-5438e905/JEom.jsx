import "./especial-pizza.scss";
import pizza from "../../assets/pizza-slice.png";
import fungus from "../../assets/fungus.png";
import data from "../../data/data.json";
const EspecialPizza = () => {
  return (
    <section className="especial-pizza layout">
      <div className="layout__image-container">
        <img
          src={fungus}
          alt="fungus"
          className="especial-pizza__fungus"
          loading="lazy"
        />
      </div>
      <h2 className="layout__title heading-secondary">Pizzas especiales</h2>
      <div className="layout__data">
        {data.especialPizza.map((e) => (
          <div key={e.name}>
            <div className="layout__item">
              <p className="layout__data-list">{e.name}</p>
              <p className="layout__data-list">${e.prie}</p>
            </div>
            <p className="layout__description">{e.description}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img
          src={pizza}
          alt="pizza"
          className="especial-pizza__slice-one"
          loading="lazy"
        />
      </div>
      <div className="layout__image-container--right">
        <img
          src={pizza}
          alt="pizza"
          className="especial-pizza__slice-two"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default EspecialPizza;
