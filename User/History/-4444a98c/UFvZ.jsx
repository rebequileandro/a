import "./option-popup.scss";

const OptionPopup = ({ isOpen, setIsOpen, dataPay }) => {
  return (
    <div
      className={`option-popup-overlay option-popup-overlay--${
        isOpen && "show"
      }`}
    >
      <div
        className={`option-popup option-popup--${isOpen ? "show" : "hidden"}`}
      >
        <h3 className="option-popup__title">Prueba gratuita finalizada</h3>
        <div className="option-popup__amount-container">
          <p className="option-popup__amount-container__total">Total Mensual</p>
          <h3 className="option-popup__amount-container__amount">
            {dataPay?.symbol}
            {dataPay?.price}
          </h3>
        </div>
        <form className="option-popup__form">
          <div className="option-popup__card-container">
            <h4 className="option-popup__form-title">
              Tarjeta de Crédito / Débito
            </h4>
            <div className="option-popup__form-card">
              <input
                type="tel"
                className="option-popup__form-card__number"
                placeholder="1234 1234 1234 1234"
                maxLength="25"
              />
              <div>
                <input
                  type="tel"
                  className="option-popup__form-card__venc"
                  placeholder="MM/AA"
                  maxLength="5"
                />
                <input
                  type="text"
                  className="option-popup__form-card__code"
                  placeholder="CVV"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn--secondary option-popup__form-submit"
            type="submit"
          >
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default OptionPopup;
