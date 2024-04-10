import "./especial-pizza.scss";
import pizza from "../../assets/pizza-slice.png";
import fungus from "../../assets/fungus.png";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const SectionThree = () => {
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

export default SectionThree;
