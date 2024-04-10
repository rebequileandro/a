import "./card-popup.scss";
import { useState } from "react";
import { Loader } from "components";

const CardPopup = ({ isOpen, setIsOpen, dataPay }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  //crear componente de popup
  return (
    <div
      className={`card-popup-overlay card-popup-overlay--${isOpen && "show"}`}
    >
      <div className={`card-popup card-popup--${isOpen ? "show" : "hidden"}`}>
        <h3 className="card-popup__title">Prueba gratuita finalizada</h3>
        <div className="card-popup__amount-container">
          <p className="card-popup__amount-container__total">Total Mensual</p>
          <h3 className="card-popup__amount-container__amount">
            {dataPay.symbol}
            {dataPay.price}
          </h3>
        </div>
        <form className="card-popup__form" onSubmit={handleSubmit}>
          <div className="card-popup__card-container">
            <h4 className="card-popup__form-title">
              Tarjeta de Crédito / Débito
            </h4>
            <div className="card-popup__form-card">
              <input
                type="tel"
                className="card-popup__form-card__number"
                placeholder="1234 1234 1234 1234"
                maxLength="25"
              />
              <div>
                <input
                  type="tel"
                  className="card-popup__form-card__venc"
                  placeholder="MM/AA"
                  maxLength="5"
                />
                <input
                  type="text"
                  className="card-popup__form-card__code"
                  placeholder="CVV"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn--secondary card-popup__form-submit"
            type="submit"
          >
            {loading ? <Loader /> : "Pagar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPopup;
