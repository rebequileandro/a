import "./section-one.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const Entree = () => {
  return (
    <section className="entree layout">
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="layout__data">
        {data.entradas.map((e) => (
          <MenuItem key={e.name} name={e.name} price={e.price} />
        ))}
      </div>
    </section>
  );
};

export default Entree;
