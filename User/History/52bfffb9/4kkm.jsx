import React from "react";
import "./statistics.scss";
import smartPhone1 from "../../assets/statistics616.png";
import smartPhone2 from "../../assets/menu612.png";

const Statistics = () => {
  return (
    <article className="statistics-container">
      <div className="content">
        <div className="content-left">
          <h1 className="menu-container__title">
            Transforma tus <br />
            Datos en Decisiones <br />
            Inteligentes
          </h1>
          <p className="menu-container__description">
            Conoce en profundidad los patrones de consumo <br />
            de tus clientes para ofrecerles una experiencia <br />
            cada vez más personalizada.
          </p>
          <ul>
            <li className="item one">
              Productos más vendidos y tendencias de consumo
            </li>
            <li className="item two">
              Estadísticas de ventas en vivo y en directo
            </li>
            <li className="item three">Conocé en detalle a tu cliente</li>
            <li className="item four">Facturación según fechas</li>
          </ul>
          <a
            href="https://wedrinkapp.com/"
            target="_blank"
            rel="noreferrer"
            className="menu-container__btn btn btn--primary"
          >
            Empieza ahora
          </a>
        </div>
        <div className="image-container">
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
          <span id="traslate-left-to-right" className="ellipse-pink one" />
          <span id="traslate-right-to-left" className="ellipse-pink two" />
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-bottom-to-top" className="ellipse two" />
        </div>
      </div>
    </article>
  );
};

export default Statistics;
