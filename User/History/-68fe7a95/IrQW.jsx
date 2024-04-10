import React from "react";
import "./countries-popup.scss";
import { motion, AnimatePresence } from "framer-motion";
import cap from "../../assets/Gorra_polaroid.webp";
import papper from "../../assets/papper.webp";

const CountriesPopup = ({ isOpen, setIsOpen }) => {
  const data = [
    {
      title: "🇦🇷 Argentina",
      url: "https://articulo.mercadolibre.com.ar/MLA-1439479856-gorra-new-era-9forty-bizarrap-ajustable-_JM",
    },
    {
      title: "🇨🇱 Chile",
      url: "https://articulo.mercadolibre.cl/MLC-1398880391-jockey-bizarrap-9forty-black-_JM",
    },
    {
      title: "🇨🇴 Colombia",
      url: "https://articulo.mercadolibre.com.co/MCO-1311923413-gorra-bizarrap-9forty-ajustable-new-era-_JM",
    },
    {
      title: "🇪🇸 España",
      url: "https://www.neweracap.eu/es-es/default/sombreros/tapas/gorra-new-era-x-bizarrap-9forty-negro/",
    },
    {
      title: "🇲🇽 México",
      url: "https://articulo.mercadolibre.com.mx/MLM-1908854109-gorra-new-era-bizarrap-9forty-negra-ajustable-_JM",
    },
    {
      title: "🇵🇪 Perú",
      url: "https://articulo.mercadolibre.com.pe/MPE-646625684-gorra-oficial-new-era-bzrp-9forty-bizarrap-negraajustable-_JM",
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="countries-popup__container"
          >
            <div
              className="countries-popup__overlay-close"
              onClick={() => setIsOpen(false)}
            />
            <img
              className="countries-popup__polaroid-cap"
              src={cap}
              alt="Gorra Bizarrap"
              title="Gorra Bizarrap"
            />
            <div className="countries-popup__flag-wrapper">
              {data.map((e, i) => (
                <a
                  className="countries-popup__link"
                  key={e.title}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`countries-popup__papper countries-popup__papper--${
                      i % 2 === 0 ? "rotate" : "norotate"
                    }`}
                    src={papper}
                    alt={e.title}
                    title={e.title}
                  />
                  <span className="countries-popup__link--text">{e.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <button
            onClick={() => setIsOpen(false)}
            className="countries-popup__close"
          >
            X
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountriesPopup;
