import "./especial-pizza.scss";

const EspecialPizza = () => {
  return (
    <section className="especial-pizza layout">
      <div className="layout__image-container--right">
        <img src={pizza} alt="pizza" className="especial-pizza__pizza-top" />
      </div>
      <h2 className="layout__title">Pizzas clásicas</h2>
      <div className="layout__data">
        {data.classicPizza.map((e) => (
          <div>
            <div className="layout__item">
              <p className="layout__data-list">{e.name}</p>
              <p className="layout__data-list">${e.prie}</p>
            </div>
            <p className="layout__description">{e.description}</p>
          </div>
        ))}
      </div>
      <div className="layout__image-container">
        <img src={pizza} alt="pizza" className="especial-pizza__pizza-bottom" />
      </div>
    </section>
  );
};

export default EspecialPizza;
