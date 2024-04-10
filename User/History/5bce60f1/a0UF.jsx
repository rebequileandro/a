import "./drinks.scss";
import beer from "../../assets/beer.png";
import drink from "../../assets/drink.png";
import data from "../../data/data.json";
import lemon from "../../assets/lemon.png";
const Drinks = () => {
  return (
    <section className="drinks layout">
      <div className="layout__image-container">
        <img src={beer} alt="beer" className="drinks__beer" loading="lazy" />
      </div>
      <h2 className="layout__title heading-secondary">Bebidas</h2>
      <div className="layout__data">
        {data.drinks.map((e) => (
          <div className="layout__item" key={e.name}>
            <p className="layout__data-list">{e.name}</p>
            <p className="layout__data-list">${e.prie}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={lemon} alt="lemon" className="drinks__lemon" loading="lazy" />
        <img src={drink} alt="drink" className="drinks__drink" loading="lazy" />
      </div>
    </section>
  );
};

export default Drinks;
