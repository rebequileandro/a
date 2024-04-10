import React from "react";
import "./menu.scss";
import smartPhone1 from "../../../assets/menu615.png";
import smartPhone2 from "../../../assets/menu612.png";

const Menu = () => {
  return (
    <article className="menu-container">
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

      {/* //--------------- */}

      {/* <div className="baner">
        <div className="phrase">
          <div className="titulos-wedrink">
            <h1>
            Personaliza tu menú <br/>en tiempo real
            </h1>
          </div>
          <p className="phrase__description">
            Nunca ha sido tan sencillo mantener a tus invitados <br />{" "}
            actualizados con tus mejores ofertas, en el mismo <br /> momento en
            el que las lanzas.
          </p>
          <ul>
          <li className="item one">Productos más vendidos</li>
            <li className="item two">Analítica de cada parte del staff</li>
            <li className="item three">Facturación según fechas</li>
            <li className="item four">Conoce en detalle a tu cliente</li>
            <li className="item five">Consulta las estadísticas en directo</li>
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
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div> */}
    </article>
  );
};

export default Menu;
