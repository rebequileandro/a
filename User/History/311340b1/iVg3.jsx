import "./authors-pizza.scss";
import onion from "../../assets/onion.png";
import pizza from "../../assets/box-pizza.png";
import data from "../../data/data.json";
const AuthorsPizza = () => {
  return (
    <section className="authors-pizza layout">
      <div className="layout__image-container">
        <img src={onion} alt="onion" className="authors-pizza__onion" />
      </div>
      <h2 className="layout__title heading-secondary">Pizzas de autor</h2>
      <div className="layout__data">
        {data.desserts.map((e) => (
          <div>
            <div className="layout__item">
              <p className="layout__data-list">{e.name}</p>
              <p className="layout__data-list">${e.prie}</p>
            </div>
            <p className="layout__description">{e.description}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={pizza} alt="pizza" className="authors-pizza__box-pizza" />
      </div>
    </section>
  );
};

export default AuthorsPizza;
