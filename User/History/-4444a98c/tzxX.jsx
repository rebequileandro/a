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
      </div>
    </div>
  );
};

export default OptionPopup;
