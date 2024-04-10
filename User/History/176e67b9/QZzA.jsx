import React from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">
          Es hora de MODERNIZAR TU EVENTO Es hora de shooza
        </h1>
        <p className="footer-p">
          Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
          segundos.
        </p>
        <div className="wedrink-store">
          <a
            href="https://app.shooza.co/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Pruébalo: Es gratuito
          </a>
        </div>
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
      </div>
    </div>
  );
};

export default Footer;
