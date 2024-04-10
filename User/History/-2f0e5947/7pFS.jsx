import React from "react";
import "./points.scss";
import smartphone_3 from "../../../assets/points613.png";
import smartphone_4 from "../../../assets/points614.png";

const Points = () => {
  return (
    <article className="inventory-container">
      <div className="smartphone-container">
        <img
          id="traslate-to-right"
          className="smartphone-container__smartphone_3"
          src={smartphone_3}
          alt="smartphone wedrink"
          loading="lazy"
        />
        <img
          id="traslate-to-left"
          className="smartphone-container__smartphone_4"
          src={smartphone_4}
          alt="smartphone wedrink"
          loading="lazy"
        />

        <span id="traslate-right-to-left" className="ellipse-pink one" />
        <span id="traslate-bottom-to-top" className="ellipse-pink two" />
        <span id="traslate-top-to-bottom" className="ellipse-pink three" />
        <span id="spin" className="ellipse-pink four" />
        <span id="traslate-top-to-bottom" className="ellipse-pink five" />
        <span id="traslate-bottom-to-top" className="ellipse-pink six" />
        <span id="traslate-left-to-right" className="ellipse-pink seven" />
      </div>
      <div className="content-right">
        <h1 className="content-right__title">
          SISTEMA DE PUNTOS: <br />
          SIMPLIFICA LOS PAGOS <br />
          EN EFECTIVO.
        </h1>
        <ul>
          <li className="item one">
            Personaliza tu carta en cuestión de segundos
          </li>
          <li className="item two">Arma los mejores packs para tus clientes</li>
          <li className="item three">
            Cada pedido se resta automáticamente del inventario
          </li>
          <li className="item four">
            Notificaciones cuando hay escasez de mercadería
          </li>
        </ul>
        <a
          href="https://wedrinkapp.com/"
          target="_blank"
          rel="noreferrer"
          className="content-right__btn btn btn--primary"
        >
          Empieza ahora
        </a>
      </div>
    </article>
  );
};

export default Points;
