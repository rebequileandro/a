import React, { useEffect } from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import Appstore from "../../assets/FooterAssets/appStore.svg";
import Playstore from "../../assets/FooterAssets/playStore.svg";
import instagram from "../../assets/FooterAssets/instagram.svg";
import linkedin from "../../assets/FooterAssets/linkedin.svg";
import twitter from "../../assets/FooterAssets/twitter.svg";
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
    // <div className="footer-container" id="download" ref={setReference}>
    //   <section className="footer-info">
    //     <h1 className="footer-h1">SHOOZA FUE CREADO PARA VOS</h1>
    //     <p className="footer-p">
    //       Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
    //       segundos.
    //     </p>
    //     <div className="wedrink-store">
    //       <img src={Playstore} alt="" loading="lazy" />
    //       <img src={Appstore} alt="" loading="lazy" />
    //     </div>
    //   </section>
    //   <div className="shapes">
    //     <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
    //   </div>
    // </div>
    <footer className="footer-container" id="download" ref={setReference}>
      <div className="footer-info">
        <h1 className="footer-info__title">
          Es hora de MODERNIZAR TU EVENTO <br />
          Es hora de shooza
        </h1>
        <p className="footer-info__description">
          Descubre la innovación en la forma de pedir <br />
          en eventos con Shooza.
        </p>
        {/* <ButtonStarNow /> */}
      </div>
      <img src={ElipseFooter} alt="shapes" className="egg1" loading="lazy" />
      <div className="footer-container__bottom-container">
        <div className="footer-container__social-network">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={linkedin}
              alt="linkedin"
              title="Linkedin"
            />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={instagram}
              alt="instagram"
              title="Instagram"
            />
          </a>
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={twitter}
              alt="twitter"
              title="Twitter"
            />
          </a>
        </div>
        <p className="footer-container__shooza">SHOOZA 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
