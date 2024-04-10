import "./section-five.scss";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const Drinks = () => {
  return (
    <section className="drinks layout">
      <h2 className="layout__title heading-secondary">Bebidas</h2>
      <div className="layout__data">
        {data.drinks.map((e) => (
          <MenuItem key={e.name} name={e.name} price={e.price} />
        ))}
      </div>
    </section>
  );
};

export default Drinks;
