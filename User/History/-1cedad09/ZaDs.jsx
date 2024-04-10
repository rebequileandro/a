import './Popup_Options.scss';
import warning from '../../../assets/icons/error.svg';

const Popup_Options = ({ isOpen, setIsOpen }) => {
  const handleDelete = () => {};

  return (
    <div className={`popup-options-overlay ${isOpen ? 'show-overlay' : ''}`}>
      <div className={`popup-wrapper ${isOpen ? 'show' : 'no-show'}`}>
        <div className="options-popup">
          <img className="options-popup__icon" src={warning} alt="warning" />
          <div className="options-popup__title">
            <h2>{`¿quieres eliminar assss?`}</h2>
          </div>
        </div>
        <div className={'buttons-popup'}>
          <button
            onClick={(e) => setIsOpen(false)}
            className="confirm-button cancel-button"
          >
            Cancelar
          </button>
          <button
            onClick={(e) => handleDelete(e)}
            className="confirm-button delete"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup_Options;
