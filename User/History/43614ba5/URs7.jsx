import React, { useEffect } from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import Appstore from "../../assets/FooterAssets/appStore.svg";
import Playstore from "../../assets/FooterAssets/playStore.svg";
import { useObserver } from "../../hooks/useObserver";

const Footer = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("download");
  }, [isIntersecting]);

  return (
    <div className="footer-container" id="download" ref={setReference}>
      <section className="footer-info">
        <h1 className="footer-h1">SHOOZA FUE CREADO PARA VOS</h1>
        <p className="footer-p">
          Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
          segundos.
        </p>
        <div className="wedrink-store">
          <img src={Playstore} alt="" loading="lazy" />
          <img src={Appstore} alt="" loading="lazy" />
        </div>
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
      </div>
    </div>
  );
};

export default Footer;
