import "./drinks.scss";
import beer from "../../assets/beer.png";
import drink from "../../assets/drink.png";
const Drinks = () => {
  return (
    <section className="desserts layout">
      <div className="layout__image-container">
        <img src={beer} alt="strawberry" className="desserts__strawberry" />
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
        <img src={drink} alt="cake" className="desserts__cake" />
      </div>
    </section>
  );
};

export default Drinks;
