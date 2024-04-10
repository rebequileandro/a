import React from "react";
import "./Footer.scss";

import EllipseFooter_1 from "../../assets/FooterAssets/Ellipse_1.svg";
import EllipseFooter_2 from "../../assets/FooterAssets/Ellipse_2.svg";
import EllipseFooter_3 from "../../assets/FooterAssets/Ellipse_3.svg";


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
          <a
            href="https://wedrinkapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Pruébalo: Es gratuito
          </a>
        </div>
      </section>
      <div className="shapes">
         <img src={EllipseFooter_2} alt="" />
         <img src={EllipseFooter_1} alt="" className="egg1" loading="lazy" />
         <img src={EllipseFooter_3} alt="" />
      </div>
    </div>
  );
};

export default Footer;
