import "./card-popup.scss";

const CardPopup = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <div
      className={`card-popup-overlay card-popup-overlay--${isOpen && "show"}`}
    >
      <div className={`card-popup card-popup--${isOpen ? "show" : "hidden"}`}>
        <h3 className="card-popup__title">Prueba gratuita finalizada</h3>
        <div className="card-popup__amount-container">
          <p className="card-popup__amount-container__total">Total Mensual</p>
          <h3 className="card-popup__amount-container__amount">$1500</h3>
        </div>
        <form className="card-popup__form">
          <div className="card-popup__card-container">
            <h4 className="card-popup__form-title">
              Tarjeta de Crédito / Débito
            </h4>
            <div className="card-popup__form-card">
              <input
                type="tel"
                className="card-popup__form-card__number"
                placeholder="1234 1234 1234 1234"
              />
              <div>
                <input type="text" className="card-popup__form-card__venc" />
                <input type="text" className="card-popup__form-card__code" />
              </div>
            </div>
          </div>
          <button
            className="btn btn--secondary card-popup__form-submit"
            type="submit"
          >
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPopup;
