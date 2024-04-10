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
      </div>
    </div>
  );
};

export default CardPopup;
