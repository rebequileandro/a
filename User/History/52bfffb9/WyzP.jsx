import React from "react";
import "./statistics.scss";
import smartPhone1 from "../../assets/menu615.png";
import smartPhone2 from "../../assets/menu612.png";

const Statistics = () => {
  return (
    <article className="menu-container">
      <div className="content">
        <div className="content-left">
          <h1 className="menu-container__title">
            Personaliza tu menú <br />
            en tiempo real.
          </h1>
          <p className="menu-container__description">
            Nunca ha sido tan sencillo mantener a tus invitados <br />{" "}
            actualizados con tus mejores ofertas, en el mismo <br /> momento en
            el que las lanzas.
          </p>
          <ul>
            <li className="item one">
              Tu menú digital se actualiza al instante en todas las pantallas.
            </li>
            <li className="item two">
              Notifica a tus clientes sobre promociones especiales.
            </li>
            <li className="item three">
              Juega con las ofertas como nunca antes.
            </li>
            <li className="item four">
              Agrega y elimina productos con un solo click.
            </li>
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
