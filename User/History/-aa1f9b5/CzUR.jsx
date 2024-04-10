import "./section-four.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
const SectionFour = () => {
  const navigate = useNavigate();

  return (
    <section className="authors-pizza layout">
      <h2 className="layout__title heading-secondary">Pizzas de autor</h2>
      <div className="layout__data">
        {data.authorsPizza.map((e) => (
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

export default SectionFour;
