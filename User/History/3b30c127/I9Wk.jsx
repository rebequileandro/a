import React from "react";

import "./ShoozaInformation.scss";

import IconoShooza from "../../assets/iconoShooza.svg";

import { links } from "../../data/links";

const ShoozaInformation = () => {
  return (
    <div className="shooza-information-container" id="que-es-shoooza">
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
      <span id="traslate-left-to-right" className="ellipse one"></span>
      <span id="traslate-right-to-left" className="ellipse two"></span>
      <span id="traslate-top-to-bottom" className="ellipse three"></span>
      <span id="traslate-right-to-left" className="ellipse-pink one"></span>
      <span id="traslate-bottom-to-top" className="ellipse-pink two"></span>
      <span id="traslate-top-to-bottom" className="ellipse-pink three"></span>
    </div>
  );
};

export default ShoozaInformation;
