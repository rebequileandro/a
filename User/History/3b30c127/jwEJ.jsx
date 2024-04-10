import React from "react";

import "./ShoozaInformation.scss";
// import Button from "../../components/Button/Button";

import IconoShooza from "../../assets/iconoShooza.svg";
import Elipse2 from "../../assets/EllipseGrande.png";
import Elipse4 from "../../assets/Ellipse 4.png";
import Elipse68 from "../../assets/Ellipse 68.png";

const ShoozaInformation = () => {
  return (
    <div className="shooza-information-container" id="afilia-tu-discoteca">
      <div className="black-bar-footer"></div>

      <section className="left-section">
        <img src={IconoShooza} alt="icono shooza" className="icono-shooza" />
        <h1>VENIMOS A INICIAR LA VERDADERA DIVERSION</h1>
        <p>
          Somos Shooza, un ecosistema que creará experiencias diferentes en la
          vida nocturna. Esto recién está empezando.
        </p>
        <button className="btn btn--primary">Más Información</button>
      </section>
      <img src={Elipse2} alt="" className="circle-blue circle-big" />
      <img src={Elipse4} alt="" className="circle-blue circle-short-1" />
      <img src={Elipse68} alt="" className="circle-blue circle-short-2" />
    </div>
  );
};

export default ShoozaInformation;
