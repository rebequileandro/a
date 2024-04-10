import "./card-popup.scss";

const CardPopup = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <div
      className={`card-popup-overlay card-popup-overlay--${isOpen && "show"}`}
    >
      <div className={`card-popup card-popup--${isOpen ? "show" : "hidden"}`}>
        <h3 className="card-popup__title">Prueba gratuita finalizada</h3>
        <div>
          <p>Total Mensual</p>
          <h3>$1500</h3>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
