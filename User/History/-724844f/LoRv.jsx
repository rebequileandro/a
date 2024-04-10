import "./desserts.scss";
import strawberry from "../../assets/strawberry.png";
import cake from "../../assets/cake.png";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";

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
          <MenuItem key={e.name} name={e.name} price={e.price} />
        ))}
      </div>
      <div className="layout__image-container--right">
        <img src={cake} alt="cake" className="desserts__cake" loading="lazy" />
      </div>
    </section>
  );
};

export default Desserts;
