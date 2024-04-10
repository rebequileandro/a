import React from "react";
import "./countries-popup.scss";
import { motion, AnimatePresence } from "framer-motion";
import papper from "../../assets/papper.webp";
const CountriesPopup = ({ isOpen, setIsOpen }) => {
  const data = [
    {
      title: "México",
      flag: require("../../assets/mexico-bandera.webp"),
      url: "https://articulo.mercadolibre.com.mx/MLM-1908854109-gorra-new-era-bizarrap-9forty-negra-ajustable-_JM",
    },
    {
      title: "Argentina",
      flag: require("../../assets/argentina-bandera.webp"),
      url: "https://articulo.mercadolibre.com.ar/MLA-1439479856-gorra-new-era-9forty-bizarrap-ajustable-_JM",
    },
    {
      title: "Colombia",
      flag: require("../../assets/colombia-bandera.webp"),
      url: "https://articulo.mercadolibre.com.co/MCO-1311923413-gorra-bizarrap-9forty-ajustable-new-era-_JM",
    },
    {
      title: "Chile",
      flag: require("../../assets/chile-bandera.webp"),
      url: "https://articulo.mercadolibre.cl/MLC-1398880391-jockey-bizarrap-9forty-black-_JM",
    },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="countries-popup__overlay"
        >
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(0)" }}
            className="countries-popup__container"
          >
            <div className="countries-popup__title-container">
              <img className="countries-popup__image" src={papper} alt="note" />
              <h2 className="countries-popup__title">Elige tu país:</h2>
            </div>
            <div className="countries-popup__flag-wrapper">
              {data.map((e) => (
                <a
                  className="countries-popup__link"
                  key={e.title}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="countries-popup__flag"
                    src={e.flag}
                    alt={`Bandera de ${e.title}`}
                    title={e.title}
                  />
                </a>
              ))}
            </div>
          </motion.div>
          <button className="countries-popup__close">X</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountriesPopup;
