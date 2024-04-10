import './Popup_Options.scss';
import warning from '../../../assets/animations/warning.json';
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';

const Popup_Options = ({
  isOpen,
  option1,
  option2,
  action1,
  action2,
  text
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-options-overlay"
        >
          <motion.div
            initial={{ transform: 'scale(0.5)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scaleY(0)' }}
            className="popup-wrapper"
          >
            <div className="options-popup">
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
              <button
                onClick={() => action2()}
                className="confirm-button delete"
              >
                {option2}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup_Options;
