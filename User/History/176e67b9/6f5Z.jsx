import React from "react";
import "./Footer.scss";

import Ellipse1 from "../../assets/FooterAssets/Ellipse 10.svg";
import Ellipse2 from "../../assets/FooterAssets/Ellipse 9.svg";
import Ellipse3 from "../../assets/FooterAssets/Ellipse 8.svg";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">
          ES HORA DE ACTUALIZARSE AL SIGLO 21 <br /> ES HORA DE WEDRINK
        </h1>
        <p className="footer-p">
          Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
          segundos.
        </p>
        <div className="wedrink-store">
        <a href="https://wedrinkapp.com/" target="_blank" className="btn btn--primary">Pruébalo: Es gratuito</a>
        </div>
      </section>
      <div className="shapes">
        <img src={Ellipse3} className="ellipse-3" alt="ellipse" />
        <img src={Ellipse1} className="ellipse-1" alt="ellipse" />
        <img src={Ellipse2} className="ellipse-2" alt="ellipse" />
      </div>
    </div>
  );
};

export default Footer;
