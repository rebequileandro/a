import React, { useEffect } from "react";
import "./WeDrinkPros.scss";

import Usuarios from "../../assets/WeDrinkProsAssets/Group 34222.svg";
import WiFi from "../../assets/WeDrinkProsAssets/Group 34223.svg";
import Tarjeta from "../../assets/WeDrinkProsAssets/Vector-1.svg";
import points from "../../assets/WeDrinkProsAssets/icon_points.svg";
import Botella from "../../assets/WeDrinkProsAssets/Vector.svg";

import { links } from "../../data/links";
import { useObserver } from "../../hooks/useObserver";

const WeDrinkPros = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("shooza");
  }, [isIntersecting]);
  return (
    <div
      className="we-drink-pros-container"
      id="como-funciona"
      ref={setReference}
    >
      <section className="info-wrapper">
        <article className="">
          <img src={Usuarios} alt="" className="user-icon" loading="lazy" />
          <h2 className="h2-info">Fila 100% virtual</h2>
          <p className="p-info">
            Pide desde cualquier lugar del evento y retira tu orden cuando te
            avisemos.
          </p>
        </article>
        <article className="">
          <img src={Tarjeta} alt="" loading="lazy" />
          <h2 className="h2-info">Todas las tarjetas</h2>
          <p className="p-info">
            Amplia variedad de opciones de pago. Contamos con todas las tarjetas
            y mucho más!
          </p>
        </article>
        <article className="">
          <img src={points} alt="" loading="lazy" />
          <h2 className="h2-info">Sistema de puntos</h2>
          <p className="p-info">
            Evita perder dinero y canjéalo por puntos del evento.
          </p>
        </article>
        <article className="">
          <img src={WiFi} alt="" loading="lazy" />
          <h2 className="h2-info">Promociones en vivo</h2>
          <p className="p-info">
            Toma decisiones de compra con toda la información de precios y
            promociones actualizadas en tiempo real.
          </p>
        </article>
        <article className="">
          <img src={Botella} alt="" loading="lazy" />
          <h2 className="h2-info">Es simple y rápido </h2>
          <p className="p-info">
            Haz tus pedidos en cuestión de segundos. Es muy fácil de usar, para
            que te enfoques al máximo en tu evento.
          </p>
        </article>
        <article className="">
          <img src={Botella} alt="" loading="lazy" />

          <h2 className="h2-info">Tiempo de calidad</h2>
          <p className="p-info">
            Dedícate a disfrutar del evento y mucho menos tiempo a preocuparse
            por la logística.
            {/* <a
              className="info-link"
              href={links.partyFi}
              target="_blank"
              rel="noreferrer"
            >
              Saber mas.
            </a> */}
          </p>
        </article>
      </section>
    </div>
  );
};

export default WeDrinkPros;
