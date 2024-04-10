import React from "react";

import "./ShoozaInformation.scss";

import IconoShooza from "../../assets/iconoShooza.svg";
import Elipse2 from "../../assets/EllipseGrande.png";
import Elipse4 from "../../assets/Ellipse 4.png";
import Elipse68 from "../../assets/Ellipse 68.png";
import Elipse1 from "../../assets/Ellipse 1.png";
import Elipse5 from "../../assets/Ellipse 5.png";
import Elipse6 from "../../assets/Ellipse 6.png";

import { links } from "../../data/links";

const ShoozaInformation = () => {
  return (
    <div className="shooza-information-container">
      <div className="black-bar-footer"></div>

      <section className="left-section">
        <img src={IconoShooza} alt="icono shooza" className="icono-shooza" />
        <h1>VENIMOS A INICIAR LA VERDADERA DIVERSION</h1>
        <p>
          Somos Shooza, un ecosistema que creará experiencias diferentes en la
          vida nocturna. Esto recién está empezando.
        </p>
        <a
          href={links.partyFi}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
        >
          Más Información
        </a>
      </section>

      <img
        src={Elipse2}
        alt=""
        className="circle-blue circle-big"
        loading="lazy"
      />
      <img
        src={Elipse4}
        alt=""
        className="circle-blue circle-short-1"
        loading="lazy"
      />
      <img
        src={Elipse68}
        alt=""
        className="circle-blue circle-short-2"
        loading="lazy"
      />
           <span id="traslate-top-to-bottom" className='ellipse-pink one'></span>
            <span id="traslate-bottom-to-top" className='ellipse-pink two'></span>
            <span id="traslate-top-to-bottom" className='ellipse-pink three'></span>
    </div>
  );
};

export default ShoozaInformation;
