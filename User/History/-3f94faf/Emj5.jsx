import "./classic-pizza.scss";
import pizza from "../../assets/pizza.png";
import data from "../../data/data.json";

const ClassicPizza = () => {
  return (
    <section className="classic-pizza layout">
      <div className="layout__image-container">
        <img
          src={pizza}
          alt="pizza"
          className="classic-pizza__pizza-top"
          loading="lazy"
        />
      </div>
      <h2 className="layout__title heading-secondary">Pizzas clásicas</h2>
      <div className="layout__data">
        {data.classicPizza.map((e) => (
          <MenuItem
            key={e.name}
            name={e.name}
            price={e.price}
            description={e.description}
          />
        ))}
      </div>
      <div className="layout__image-container--right">
        <img
          src={pizza}
          alt="pizza"
          className="classic-pizza__pizza-bottom"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ClassicPizza;
