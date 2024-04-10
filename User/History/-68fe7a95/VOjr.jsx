import React from "react";
import "./countries-popup.scss";
import { motion, AnimatePresence } from "framer-motion";
import cap from "../../assets/Gorra_polaroid.webp";
import papper from "../../assets/papper.webp";
import Argentina from "../SVG/Argentina";
import Chile from "../SVG/Chile";
import Colombia from "../SVG/Colombia";
import Spain from "../SVG/Spain";
import Mexico from "../SVG/Mexico";
import Peru from "../SVG/Peru";
import USA from "../SVG/USA";

const CountriesPopup = ({ isOpen, setIsOpen }) => {
  const data = [
    {
      icon: <Argentina />,
      title: "Argentina",
      url: "https://articulo.mercadolibre.com.ar/MLA-1439479856-gorra-new-era-9forty-bizarrap-ajustable-_JM",
    },
    {
      icon: <Chile />,
      title: "Chile",
      url: "https://articulo.mercadolibre.cl/MLC-1398880391-jockey-bizarrap-9forty-black-_JM",
    },
    {
      icon: <Colombia />,
      title: "Colombia",
      url: "https://articulo.mercadolibre.com.co/MCO-1311923413-gorra-bizarrap-9forty-ajustable-new-era-_JM",
    },
    {
      icon: <Spain />,
      title: "España",
      url: "https://www.neweracap.eu/es-es/default/sombreros/tapas/gorra-new-era-x-bizarrap-9forty-negro/",
    },
    {
      icon: <Mexico />,
      title: "México",
      url: "https://articulo.mercadolibre.com.mx/MLM-1908854109-gorra-new-era-bizarrap-9forty-negra-ajustable-_JM",
    },
    {
      icon: <Peru />,
      title: "Perú",
      url: "https://articulo.mercadolibre.com.pe/MPE-646625684-gorra-oficial-new-era-bzrp-9forty-bizarrap-negraajustable-_JM",
    },
    {
      icon: <USA />,
      title: "Estados Unidos",
      url: "https://www.neweracap.com/products/bizarrap-black-9forty-adjustable?utm_source=bizarrap&utm_medium=instagramstory&utm_campaign=bizarrap",
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
                  <div>{e?.icon}</div>
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
