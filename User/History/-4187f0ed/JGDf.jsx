import "./section-two.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";

const SectionTwo = () => {
  return (
    <section className="section-two layout">
      <div className="layout__image-container"></div>
      <h2 className="layout__title heading-secondary">Pizzas clásicas</h2>
      <div className="section-two__data">
        {data.classicPizza.map((e) => (
          <MenuItem
            key={e.name}
            name={e.name}
            price={e.price}
            description={e.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
