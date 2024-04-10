import React from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">
          Es hora de MODERNIZAR TU EVENTO <br />
          Es hora de shooza
        </h1>
        <p className="footer-p">
          Descubre la innovación en la forma de pedir <br />
          en eventos con Shooza.
        </p>
        <div className="wedrink-store">
          <ButtonStarNow />
        </div>
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
      </div>
    </div>
  );
};

export default Footer;
