import './popup_alert.scss';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import GreenAlert from '../../../assets/icons/green-alert.svg';

const Popup_Alert = ({ title, button, redirect }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="popup-alert-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="popup-container"
          initial={{ transform: 'scale(0.5)' }}
          animate={{ transform: 'scale(1)' }}
          exit={{ transform: 'scale(0)' }}
        >
          <img
            src={GreenAlert}
            alt=""
            className="popup-container__alert-icon"
            loading="lazy"
          />
          <p className="popup-container__title">{title}</p>
          <button className="popup-container__button" onClick={redirect}>
            {button}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup_Alert;
