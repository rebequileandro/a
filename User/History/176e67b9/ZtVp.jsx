import React from "react";
import "./Footer.scss";
import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";
import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";
import { links } from "../../data/links";
import instagram from "../../assets/FooterAssets/instagram.svg";
import linkedin from "../../assets/FooterAssets/linkedin.svg";
import twitter from "../../assets/FooterAssets/twitter.svg";
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
      <div className="footer-container__social-network">
        <div>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={linkedin}
              alt="linkedin"
              title="Linkedin"
            />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={instagram}
              alt="instagram"
              title="Instagram"
            />
          </a>
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={twitter}
              alt="twitter"
              title="Twitter"
            />
          </a>
        </div>
        <p>SHOOZA 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
