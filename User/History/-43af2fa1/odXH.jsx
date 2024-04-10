import React, { useEffect, useRef } from "react";
import "./Navbar.scss";

import shoozaIcon from "../../assets/NavAssets/shooza-icon.svg";
import twitter from "../../assets/NavAssets/twitter.svg";
import vector2 from "../../assets/NavAssets/Vector-1.svg";
import vector3 from "../../assets/NavAssets/Vector-2.svg";
import vector4 from "../../assets/NavAssets/Vector-3.svg";

import { links } from "../../data/links";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img className="logo-nav" src={shoozaIcon} alt="wedrink" />
      <nav className="navigation desktop">
        <a href={links.twitter} target="_blank" rel="noreferrer">
          <img src={twitter} alt="" />
        </a>
        <a href={links.telegram} target="_blank" rel="noreferrer">
          <img src={vector2} alt="" />
        </a>
        <a href={links.discord} target="_blank" rel="noreferrer">
          <img src={vector3} alt="" />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <img src={vector4} alt="" />
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
