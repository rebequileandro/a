import React, { useEffect } from "react";

import "./ShoozaInformation.scss";

import IconoShooza from "../../assets/iconoShooza.svg";

import { links } from "../../data/links";
import { useObserver } from "../../hooks/useObserver";
import device from "../../data/device";

const ShoozaInformation = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("shooza");
  }, [isIntersecting]);
  return (
    <div className="shooza-information-container" ref={setReference}>
      <div className="black-bar-footer"></div>

      <section className="left-section">
        <img src={IconoShooza} alt="icono shooza" className="icono-shooza" />
        <h1 className="left-section__title">
          CONTROL TOTAL DEL <br />
          ESTADO DE TU PEDIDO
        </h1>
        <p>
          Podrás conocer en detalle el estado de tus pedidos en <br />
          tiempo real. Se te notificará al móvil si es que tu orden se está
          <br />
          preparando, si está a punto de estar lista y si está terminada.
        </p>
        <a
          href={
            device() === "Android"
              ? links.playStore
              : !device()
              ? links.shoozaApp
              : links.appStore
          }
          target="_blank"
          rel="noreferrer"
          className="left-section__btn btn btn--primary"
        >
          Descargar APP
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
