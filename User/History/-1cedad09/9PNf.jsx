import './Popup_Options.scss';
import warning from '../../../assets/icons/error.svg';

const Popup_Options = ({
  isOpen,
  setIsOpen,
  option1,
  option2,
  action1,
  action2,
  text
}) => {
  const handleDelete = () => {};

  return (
    <div className={`popup-options-overlay ${isOpen ? 'show-overlay' : ''}`}>
      <div className={`popup-wrapper ${isOpen ? 'show' : 'no-show'}`}>
        <div className="options-popup">
          <img className="options-popup__icon" src={warning} alt="warning" />
          <div className="options-popup__title">
            <h2>{text}</h2>
          </div>
        </div>
        <div className={'buttons-popup'}>
          <button
            onClick={() => action1()}
            className="confirm-button cancel-button"
          >
            {option1}
          </button>
          <button onClick={() => action2()} className="confirm-button delete">
            {option2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup_Options;
