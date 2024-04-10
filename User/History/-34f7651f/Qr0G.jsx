import "./Payment-Method.scss";

import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import cash from "../../../../assets/icons/Checkout/cash.svg";
import mercadoPago from "../../../../assets/icons/Checkout/mercado-pago.svg";
import newcard from "../../../../assets/icons/Checkout/new-card.svg";
import shoocoins from "../../../../assets/icons/Checkout/shoocoins.svg";

export const PopupPaymentMethod = ({ setIsPopUp, setMethod, isPopUp }) => {
  const handleClick = (method) => {
    setMethod(method);
    setIsPopUp(false);
  };
  return (
    <AnimatePresence>
      {isPopUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popoup-overlay"
          onClick={() => setIsPopUp(false)}
        >
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
              onClick={() => handleClick({ name: "efectivo", icon: cash })}
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
                handleClick({ name: "mercado pago", icon: mercadoPago })
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
