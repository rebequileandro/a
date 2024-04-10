import "./option-popup.scss";

const OptionPopup = ({ isOpen, setIsOpen, title, options }) => {
  return (
    <div
      className={`option-popup-overlay option-popup-overlay--${
        isOpen && "show"
      }`}
    >
      <div
        className="option-popup-overlay--close"
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`option-popup option-popup--${isOpen ? "show" : "hidden"}`}
      >
        <h3 className="option-popup__title">{title}</h3>
        <div className="option-popup__btn-wrapper">
          {options?.btnA && (
            <button className="btn btn--secondary" onClick={options.onClickA}>
              {options.btnA}
            </button>
          )}
          {options?.btnB && (
            <button
              className="btn btn--tertiary"
              onClick={() => options.onClickB()}
            >
              {options.btnB}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionPopup;
