import React from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import Appstore from "../../assets/FooterAssets/appStore.svg";
import Playstore from "../../assets/FooterAssets/playStore.svg";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">WEDRINK FUE CREADO PARA VOS</h1>
        <p className="footer-p">
          Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
          segundos.
        </p>
        <div className="wedrink-store">
          <img src={Appstore} alt="" />
          <img src={Playstore} alt="" />
        </div>
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" />
      </div>
    </div>
  );
};

export default Footer;
