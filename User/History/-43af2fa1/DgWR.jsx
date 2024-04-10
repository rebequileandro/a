import React, { useEffect, useRef } from "react";
import "./Navbar.scss";

import shoozaIcon from "../../assets/NavAssets/shooza-icon.svg";
import twitter from "../../assets/NavAssets/twitter.svg";
import instagram from "../../assets/NavAssets/instagram.svg";
import linkedin from "../../assets/NavAssets/linkedin.svg";

import { links } from "../../data/links";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img className="logo-nav" src={shoozaIcon} alt="shooza" />
      <nav className="navigation desktop">
        <a href={links.twitter} target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" title="Twitter" />
        </a>
        <a href={links.instagram} target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" title="Instagram" />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" title="Linkedin" />
        </a>
      </nav>
      {/* A DONDE LLEVA ESTE BOTON??? */}
      <a href="#download" className="navbar-container__btn btn btn--primary">
        Postula tu local
      </a>
      {/* <nav className="navigation mobile">
        <a href="#inicio">
          <img
            src={homeRef.current?.classList.contains("selected") ? selectedHome : home}
            alt="inicio"
          />
        </a>
        <a ref={weDrinkRef} href="#que-es-WeDrink">
          <img
            src={
                weDrinkRef.current?.classList.contains("selected")  ? selectedPhone : phone
            }
            alt="WeDrink"
          />
        </a>
        <a ref={partyRef} href="#como-funciona">
          <img
            src={partyRef.current?.classList.contains("selected") ? selecetedLike : like}
            alt="beneficios"
          />
        </a>
        <a ref={contactRef} href="#contacto">
          <img
            src={
                contactRef.current?.classList.contains("selected") ? selectedParty : party
            }
            alt="Discoteca"
          />
        </a>
        <a id="download_ID" href="#download">
          <img src={download} alt="descargar" />
        </a>
      </nav> */}
    </nav>
  );
};

export default Navbar;
