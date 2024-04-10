import React, { useEffect } from "react";
import "./WeDrinkPros.scss";

import Usuarios from "../../assets/WeDrinkProsAssets/Group 34222.svg";
import WiFi from "../../assets/WeDrinkProsAssets/Group 34223.svg";
import Tarjeta from "../../assets/WeDrinkProsAssets/Vector-1.svg";
import Hojita from "../../assets/WeDrinkProsAssets/Vector-2.svg";
import Botella from "../../assets/WeDrinkProsAssets/Vector.svg";

import { links } from "../../data/links";
import { useObserver } from "../../hooks/useObserver";

const WeDrinkPros = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("how");
  }, [isIntersecting]);
  return (
    <div className="we-drink-pros-container" id="como-funciona">
      <section className="info-wrapper">
        <article className="">
          <img src={Usuarios} alt="" id="user-icon" loading="lazy" />
          <h2 className="h2-info">Fila 100% virtual</h2>
          <p className="p-info">
            Mandemos las filas a la mi*rda, ahora irás a buscar tu trago recién
            cuando esté listo.
          </p>
        </article>
        <article className="">
          <img src={Tarjeta} alt="" loading="lazy" />
          <h2 className="h2-info">Todas las tarjetas</h2>
          <p className="p-info">
            Podrás pagar con cualquier tarjeta de Visa, MasterCard o dinero en
            MercadoPago.
          </p>
        </article>
        <article className="">
          <img src={Hojita} alt="" loading="lazy" />
          <h2 className="h2-info">Tickets sostenibles</h2>
          <p className="p-info">
            Somos sostenibles, es por eso que todos los tickets los tendrás en
            tu app.
          </p>
        </article>
        <article className="">
          <img src={WiFi} alt="" loading="lazy" />
          <h2 className="h2-info">Wifi gratuito</h2>
          <p className="p-info">
            Perder la conexión quedó en el pasado. Accedé a nuestro wifi y anda
            siempre conectado.
          </p>
        </article>
        <article className="">
          <img src={Botella} alt="" loading="lazy" />
          <h2 className="h2-info">Descubrí tragos</h2>
          <p className="p-info">
            Dejá de pedir los mismos tragos de siempre. Navega y descubre
            nuevos. tragos.
          </p>
        </article>
        <article className="">
          <button className="btn btn--primary">Proximamente</button>
          <h2 className="h2-info">NFTs & criptomonedas</h2>
          <p className="p-info">
            Pedirás un trago, se generará un NFT y serás recompensado en.
            shooCoins{" "}
            <a
              className="info-link"
              href={links.partyFi}
              target="_blank"
              rel="noreferrer"
            >
              Saber mas.
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default WeDrinkPros;
