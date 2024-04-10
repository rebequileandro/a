import React, { useEffect } from "react";
import "./WhatIsWeDrink.scss";
import smartPhone1 from "../../../assets/image 610.png";
import smartPhone2 from "../../../assets/image 611.png";

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
            <li className="item one">
              Tus asistentes compran en cuestión de segundos.
            </li>
            <li className="item two">
              Brinda un servicio de pedidos realmente ágil.
            </li>
            <li className="item three">Impulsa tus ventas como nunca antes.</li>
            <li className="item four">
              Elimina las largas esperas en la compra y la barra.
            </li>
            <li className="item five">
              Atrae a más público con una propuesta vanguardista.
            </li>
            <li className="item six">
              Sorprende a tus invitados con pura innovación.
            </li>
          </ul>
          <a
            // href="https://wedrinkapp.com/"
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
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </div>
  );
};

export default WhatIsWeDrink;
