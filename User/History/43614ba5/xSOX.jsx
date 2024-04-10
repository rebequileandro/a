import React, { useEffect } from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import Appstore from "../../assets/icon_app-store.svg";
import Playstore from "../../assets/icon_play-store.svg";
import pwa from "../../assets/icon_pwa.svg";
import instagram from "../../assets/FooterAssets/instagram.svg";
import linkedin from "../../assets/FooterAssets/linkedin.svg";
import twitter from "../../assets/FooterAssets/twitter.svg";
import { useObserver } from "../../hooks/useObserver";
import { links } from "../../data/links";

const Footer = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("download");
  }, [isIntersecting]);

  return (
    <footer className="footer-container" id="download" ref={setReference}>
      <div className="footer-info">
        <h1 className="footer-info__title">
          ELIMINA LA ESPERA, <br />
          MULTIPLICA LA DIVERSIÓN
        </h1>
        <p className="footer-info__description">
          Descárgate la app y haz valer tu tiempo al máximo. <br />
          Crea tu cuenta en segundos.
        </p>
        <div className="footer-info__stores">
          <img src={Appstore} alt="app store" />
          <img src={Playstore} alt="play store" />
          <img src={pwa} alt="pwa" />
        </div>
        <div className="footer-info__stores--mobile">
          <div className="footer-info__stores--mobile__top">
            <img src={Appstore} alt="app store" />
            <img src={Playstore} alt="play store" />
          </div>
          <img src={pwa} alt="pwa" />
        </div>
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
