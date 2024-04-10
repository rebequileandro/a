import React from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">INICIAMOS LA VERDADERA DIVERSION</h1>
        {/* <p className="footer-p">
          Developed by <label>CLIDER</label>
        </p> */}
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
      </div>
    </div>
  );
};

export default Footer;
