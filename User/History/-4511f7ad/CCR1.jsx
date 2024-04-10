import React, { useEffect } from "react";
import "./WhatIsWeDrink.scss";
import smartPhone2 from "../../../assets/smartphone_2.png";

const WhatIsWeDrink = () => {
  return (
    <div className="what-is-wedrink-container">
      <div className="baner">
        <div className="phrase">
          <div className="titulos-wedrink">
            <h1>
              Pedidos rápidos, <br /> ventas eficientes.
            </h1>
          </div>
          <ul>
            <li className="item one">Organiza tu inventario</li>
            <li className="item two">Controla el efectivo de tu caja</li>
            <li className="item three">Descubre tus tragos más vendidos</li>
            <li className="item four">Olvídate de robos o pérdidas</li>
            <li className="item five">Agiliza procesos y vende más</li>
            <li className="item six">Gestiona todas tus áreas y staff</li>
          </ul>
          <a
            href="https://wedrinkapp.com/"
            target="_blank"
            rel="noreferrer"
            className="what-is-wedrink-container__btn btn btn--primary"
          >
            Empieza ahora
          </a>
        </div>
        <div className="image-container" data-lax-preset="spin">
          <span id="traslate-top-to-bottom" className="ellipse-pink one" />
          <span id="traslate-top-to-bottom" className="ellipse-pink two" />
          <span id="traslate-top-to-bottom" className="ellipse-pink three" />
          <img
            className="smartphone"
            src={smartPhone2}
            alt="smatphone wedrink"
            loading="lazy"
          />
          <span className="shadow-filter" />
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </div>
  );
};

export default WhatIsWeDrink;
