import React, { useEffect } from "react";
import "./Home.scss";
import background from "../../assets/background.webm";
import smartphone_1 from "../../assets/image 588 1.png";
import smartphone_2 from "../../assets/image 589 1.png";
import shooza from "../../assets/shooza-icon.svg";
import videoLoading from "../../assets/black-color-solid-background.png";
import instagram from "../../assets/FooterAssets/instagram.svg";
import linkedin from "../../assets/FooterAssets/linkedin.svg";
import twitter from "../../assets/FooterAssets/twitter.svg";
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
    <section id="inicio" className="home-container" ref={setReference}>
      <video
        className="video-background"
        src={background}
        width="100%"
        height="100%"
        playsInline
        autoPlay
        muted
        loop
        poster={videoLoading}
      >
        <source src={background} type="video/webm" />
      </video>

      <nav className="home-container__nav-mobile">
        <img
          className="home-container__nav-mobile__shooza-logo"
          src={shooza}
          alt="shooza"
        />
        <div className="home-container__nav-mobile__social-network">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" title="Linkedin" />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" title="Instagram" />
          </a>
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" title="Twitter" />
          </a>
        </div>
      </nav>
      <div className="baner">
        <div className="home-container__image-wrapper-mobile">
          <div className="home-container__image-wrapper-mobile-relative">
            <img
              // id="traslate-to-left"
              className="home-container__image-wrapper-mobile--image01"
              src={smartphone_1}
              alt="smartphone_1"
              loading="lazy"
            />
            <img
              // id="traslate-to-right"
              className="home-container__image-wrapper-mobile--image02"
              src={smartphone_2}
              alt="smartphone_1"
              loading="lazy"
            />
          </div>
        </div>
        <div className="slogan">
          <div className="cont">
            <h1>
              EL UBER EATS <br />
              DENTRO DE LOS EVENTOS
            </h1>
            <div className="underline"></div>
          </div>
          <p>
            Elimina la espera, multiplica la diversión. Ordena con <br />
            tu móvil y retira tu pedido cuando esté listo.
          </p>
          <div className="buttons">
            <a
              href={links.weDrink}
              target="_blank"
              rel="noreferrer"
              className="home-container__btn btn btn--primary"
            >
              Descargar APP
            </a>
            <a
              href={links.boliche}
              target="_blank"
              rel="noreferrer"
              className="home-container__btn btn btn--secondary"
            >
              Soy un evento
            </a>
          </div>
        </div>
        <div className="home-container__image-wrapper">
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
      </div>
    </section>
  );
};

export default Home;
