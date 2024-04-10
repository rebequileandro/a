import useCreditCardForm from './useCreditCardForm';
import './CheckoutCreditCardForm.scss';

export default function CheckoutCreditCardForm(total) {
  const { errors, handleChange } = useCreditCardForm(total);

  return (
    <form id="checkout-credit-card-form">
      {/* CARD NUMBER */}
      <div className="input-div">
        <label htmlFor="cardNumber">Número de la tarjeta:</label>
        <div className="input-wrapper">
          <div className="input-wrapper-bg">
            <input
              type="tel"
              name="cardNumber"
              id="form-checkout__cardNumber"
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
      </div>

      <div className="expiration">
        {/* EXPIRATION DATE */}
        <div className="input-div">
          <label htmlFor="input-checkout__expirationDate">Fecha Venc.</label>
          <div className="input-wrapper">
            <div className="input-wrapper-bg">
              <input
                id="form-checkout__expirationDate"
                name="cardExpirationDate"
                className="form-control h-40"
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.cardExpirationDate && (
            <p className="error">{errors.cardExpirationDate}</p>
          )}
        </div>

        {/* CVC */}
        <div className="input-div">
          <label htmlFor="cvc">CVC:</label>
          <div className="input-wrapper">
            <div className="input-wrapper-bg">
              <input
                type="tel"
                name="cvc"
                id="form-checkout__securityCode"
                onChange={handleChange}
              />
            </div>
          </div>

          {errors.cvc && <p className="error">{errors.cvc}</p>}
        </div>
      </div>

      {/* CARDHOLDER NAME */}
      <div className="input-div">
        <label htmlFor="cardholderName">Nombre impreso en la tarjeta:</label>
        <div className="input-wrapper">
          <div className="input-wrapper-bg">
            <input
              type="text"
              name="cardholderName"
              id="form-checkout__cardholderName"
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.cardholderName && (
          <p className="error">{errors.cardholderName}</p>
        )}
      </div>

      <select
        name="issuer"
        id="form-checkout__issuer"
        className="hidden"
      ></select>
      <select
        name="identificationType"
        id="form-checkout__identificationType"
        className="hidden"
      ></select>

      {/* DNI */}
      <div className="input-div">
        <label htmlFor="identificationNumber">Número de documento:</label>
        <div className="input-wrapper">
          <div className="input-wrapper-bg">
            <input
              type="text"
              name="identificationNumber"
              id="form-checkout__identificationNumber"
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.identificationNumber && (
          <p className="error">{errors.identificationNumber}</p>
        )}
      </div>

      <select
        name="installments"
        id="form-checkout__installments"
        className="hidden"
        value="1"
      ></select>

      <button
        type="submit"
        id="form-checkout__submit"
        className="btn-primary--l"
      >
        Pagar
      </button>
    </form>
  );
}
