import "./Section-three.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const SectionThree = () => {
  return (
    <section className="especial-pizza layout">
      <div className="layout__image-container"></div>
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
      <div className="layout__image-container--right"></div>
      <div className="layout__image-container--right"></div>
    </section>
  );
};

export default SectionThree;
