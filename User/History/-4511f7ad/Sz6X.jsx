import React, { useEffect } from "react";
import "./WhatIsWeDrink.scss";
import smartPhone1 from "../../assets/image 610.png";
import smartPhone2 from "../../assets/image 611.png";
import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";
import smartphone_1 from "../../assets/home01.png";
import smartphone_2 from "../../assets/home02.png";

const WhatIsWeDrink = () => {
  return (
    <article className="what-is-wedrink-container">
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
          <ButtonStarNow />
        </div>
        <div className="image-container">
          <span id="traslate-top-to-bottom" className="ellipse-pink one" />
          <span id="traslate-top-to-bottom" className="ellipse-pink two" />
          <span id="traslate-top-to-bottom" className="ellipse-pink three" />
          <div className="image-container__image-wrapper-desktop">
            <img
              id="traslate-to-right"
              className="image-container__image01"
              src={smartPhone2}
              alt="smatphone wedrink"
              loading="lazy"
            />
            <img
              id="traslate-to-left"
              className="image-container__image02"
              src={smartPhone1}
              alt="smatphone wedrink"
              loading="lazy"
            />
          </div>
          <div className="image-container__image-wrapper">
            <img
              id="traslate-to-bottom"
              className="home-container__image-wrapper--image01"
              src={smartphone_1}
              alt="smartphone_1"
              loading="lazy"
            />
            <img
              id="traslate-to-top"
              className="home-container__image-wrapper--image02"
              src={smartphone_2}
              alt="smartphone_1"
              loading="lazy"
            />
          </div>
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </article>
  );
};

export default WhatIsWeDrink;
