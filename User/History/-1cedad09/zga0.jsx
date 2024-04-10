import './Popup_Options.scss';
import warning from '../../../assets/animations/warning.json';
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';

const Popup_Options = ({
  isOpen,
  setIsOpen,
  option1,
  option2,
  action1,
  action2,
  text
}) => {
  return (
    <AnimatePresence>
      <div className={`popup-options-overlay ${isOpen ? 'show-overlay' : ''}`}>
        <div className={`popup-wrapper ${isOpen ? 'show' : 'no-show'}`}>
          <div className="options-popup">
            {/* <img className="options-popup__icon" src={warning} alt="warning" /> */}
            <Lottie
              animationData={warning}
              className="options-popup__icon"
              loop={false}
            />
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
    </AnimatePresence>
  );
};

export default Popup_Options;
