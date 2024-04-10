import './popup_Club.scss';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import GreenAlert from '../../../assets/icons/green-alert.svg';

const Popup_Club = () => {
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
        <p className="popup-container__title">
          Primero indicanos en qué lugar estás para poder ver el menú
          disponible.
        </p>
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

export default Popup_Club;
