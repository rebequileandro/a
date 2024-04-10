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
      <div className="navigation desktop">
        <a href={links.twitter} target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" title="Twitter" />
        </a>
        <a href={links.instagram} target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" title="Instagram" />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" title="Linkedin" />
        </a>
      </div>
      {/* A DONDE LLEVA ESTE BOTON??? */}
      <a
        target="_blank"
        href={links.event}
        className="navbar-container__btn btn btn--primary"
      >
        Postula tu local
      </a>
    </nav>
  );
};

export default Navbar;
