import './popup_alert.scss';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import GreenAlert from '../../../assets/icons/green-alert.svg';

const Popup_Alert = ({ title, button, redirect }) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        className="popup-container "
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
        <button
          className="popup-container__button"
          onClick={() => navigate('/')}
        >
          Seleccionar
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup_Alert;
