import React, { useEffect } from "react";
import "./Home.scss";
import background from "../../assets/background.mp4";
import smartphone_1 from "../../assets/smartphone_1.png";
import wedrink_logo from "../../assets/wedrink_logo.svg";
import videoLoading from "../../assets/loading-video.png";
import { useObserver } from "../../hooks/useObserver";
import { links } from "../../data/links";

const Home = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("home");
  }, [isIntersecting]);
  return (
    <div id="inicio" className="home-container" ref={setReference}>
      <video
        className="video-background"
        src={background}
        width="100%"
        height="100%"
        loading="lazy"
        playsInline
        autoPlay
        muted
        loop
        poster={videoLoading}
      >
        <source src={background} type="video/mp4" />
      </video>
      <img
        className="wedrink_logo"
        src={wedrink_logo}
        alt="shooza"
        loading="lazy"
      />
      <div className="baner">
        <div className="slogan">
          <div className="cont">
            <h1>
              EL UBER EATS <br />
              DENTRO DE LOS EVENTOS
            </h1>
            <div className="underline"></div>
          </div>
          <p>
            Elimina la espera, multiplica la diversión. Ordena con tu móvil y
            retira tu pedido cuando esté listo.
          </p>
          <div className="buttons">
            <a
              href={links.weDrink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Descargar APP
            </a>
            <a
              href={links.boliche}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary"
            >
              Soy un evento
            </a>
          </div>
        </div>
        <img
          className="smartphone"
          src={smartphone_1}
          alt="smartphone_1"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
