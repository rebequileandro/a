import React from "react";
import "./menu.scss";
import smartphone_5 from "../../../assets/smartphone_5.png";

const Menu = () => {
  return (
    <div className="statistics-container">
      <div className="content">
        <div className="content-left">
          <h1>Personaliza tu menú en tiempo real.</h1>
          <p>
            Nunca ha sido tan sencillo mantener a tus invitados actualizados con
            tus mejores ofertas, en el mismo momento en el que las lanzas.
          </p>
          <ul>
            <li className="item one">Productos más vendidos</li>
            <li className="item two">Analítica de cada parte del staff</li>
            <li className="item three">Facturación según fechas</li>
            <li className="item four">Conoce en detalle a tu cliente</li>
            <li className="item five">Consulta las estadísticas en directo</li>
          </ul>
          <a
            href="https://wedrinkapp.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Pruébalo: Es gratuito
          </a>
        </div>
        <div className="image-container">
          <img
            className="image-stats"
            src={smartphone_5}
            alt="POS"
            loading="lazy"
          />
          <span id="traslate-left-to-right" className="ellipse-pink one" />
          <span id="traslate-right-to-left" className="ellipse-pink two" />
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-bottom-to-top" className="ellipse two" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
