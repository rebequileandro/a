import "./popup-card.scss";

const popupCard = ({ isOpen, setIsOpen }) => {
  return (
    <div className="card-popup">
      <h3>Prueba gratuita finalizada</h3>
      <div>
        <p>Total Mensual</p>
        <h3>$1500</h3>
      </div>
    </div>
  );
};

export default popupCard;
