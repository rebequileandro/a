import "./authors-pizza.scss";
import onion from "../../assets/onion.png";
import pizza from "../../assets/box-pizza.png";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const AuthorsPizza = () => {
  return (
    <section className="authors-pizza layout">
      <div className="layout__image-container">
        <img
          src={onion}
          alt="onion"
          className="authors-pizza__onion"
          loading="lazy"
        />
      </div>
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
      <div className="layout__image-container--right">
        <img
          src={pizza}
          alt="pizza"
          className="authors-pizza__box-pizza"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AuthorsPizza;
