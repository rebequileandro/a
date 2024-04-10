import React from 'react'
import './Payment-Method.scss'
import shoocoins  from '../../../assets/icons/Checkout/shoocoins.svg'
import cash  from '../../../assets/icons/Checkout/cash.svg'
import mercadoPago  from '../../../assets/icons/Checkout/mercado-pago.svg'
import newcard from '../../../assets/icons/Checkout/new-card.svg'
import { AnimatePresence, motion } from "framer-motion";

export const PopupPaymentMethod = ({setIsPopUp, setMethod, isPopUp}) => {
    const handleClick = () => {
        
    }
  return (
    <AnimatePresence>
        {isPopUp &&
      <div className="popoup-overlay" onClick={() => setIsPopUp(false)}>
        <motion.div
          initial={{ transform: "scale(0.5)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
          className="popup"
        >
          <div className="content">
            <div className="image">
              <img src={shoocoins} alt="shoocoins" />
            </div>
            <div className="coming-soon">
              <h2>shoocoins</h2>
              <p>Próximamente</p>
            </div>
          </div>
          <hr />
          <div
            className="content"
            onClick={() => setMethod({ name: "efectivo", icon: cash })}
          >
            <div className="image">
              <img src={cash} alt="cash" />
            </div>
            <h2>efectivo</h2>
          </div>
          <hr />
          <div
            className="content"
            onClick={() =>
              setMethod({ name: "mercado pago", icon: mercadoPago })
            }
          >
            <div className="image">
              <img src={mercadoPago} alt="mercado pago" />
            </div>
            <h2>mercado pago</h2>
          </div>
          <hr />
          <div className="content">
            <div className="image">
              <img src={newcard} alt="mercado pago" />
            </div>
            <div className="coming-soon">
              <h2>nueva tarjeta</h2>
              <p>Próximamente</p>
            </div>
          </div>
        </motion.div>
      </div>}
    </AnimatePresence>
  );
}
