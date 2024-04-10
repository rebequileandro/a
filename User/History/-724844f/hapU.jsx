import "./desserts.scss";

const Desserts = () => {
  return (
    <section className="desserts layout">
      <div className="layout__image-container">
        <img src={onion} alt="onion" className="desserts__onion" />
      </div>
      <h2 className="layout__title heading-secondary">Pizzas de autor</h2>
      <div className="layout__data">
        {data.authorsPizza.map((e) => (
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
        <img src={pizza} alt="pizza" className="desserts__box-pizza" />
      </div>
    </section>
  );
};

export default Desserts;
