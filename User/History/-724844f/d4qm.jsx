import "./desserts.scss";
import strawberry from "../../assets/strawberry.png";
import cake from "../../assets/cake.png";
import data from "../../data/data.json";

const Desserts = () => {
  return (
    <section className="desserts layout">
      <div className="layout__image-container">
        <img
          src={strawberry}
          alt="strawberry"
          className="desserts__strawberry"
          loading="lazy"
        />
      </div>
      <h2 className="layout__title heading-secondary">Postres</h2>
      <div className="layout__data">
        {data.desserts.map((e) => (
          <div className="layout__item" key={e.name}>
            <p className="layout__data-list">{e.name}</p>
            <p className="layout__data-list">${e.price}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={cake} alt="cake" className="desserts__cake" loading="lazy" />
      </div>
    </section>
  );
};

export default Desserts;
