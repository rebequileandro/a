import React from "react";
import "./Footer.scss";
import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";

const Footer = () => {
  return (
    <footer className="footer-container" id="download">
      <div className="footer-info">
        <h1 className="footer-info__title">
          Es hora de MODERNIZAR TU EVENTO <br />
          Es hora de shooza
        </h1>
        <p className="footer-info__description">
          Descubre la innovación en la forma de pedir <br />
          en eventos con Shooza.
        </p>
        <ButtonStarNow />
      </div>
      <img src={ElipseFooter} alt="shapes" className="egg1" loading="lazy" />
      <div className=""></div>
    </footer>
  );
};

export default Footer;
