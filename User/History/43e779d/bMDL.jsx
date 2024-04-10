import React from "react";
import "./Home.scss";

import shoozaIcon from "../../assets/NavAssets/shooza-icon.svg";
import twitter from "../../assets/NavAssets/twitter.svg";
import instagram from "../../assets/NavAssets/instagram.svg";
import linkedin from "../../assets/NavAssets/linkedin.svg";
import { links } from "../../data/links";

const Home = () => {
  return (
    <section className="home-container">
      {/* elements of mobile home */}
      <div className="icons-mobile">
        <img
          className="wedrink_logo"
          src={shoozaIcon}
          alt="wedrink"
          loading="lazy"
        />
        <nav className="navigation-mobile">
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={twitter}
              alt="twitter"
              title="Twitter"
            />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={instagram}
              alt="instagram"
              title="Instagram"
            />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img
              className="icon-social"
              src={linkedin}
              alt="linkedin"
              title="Linkedin"
            />
          </a>

          {/* <a href={links.twitter} target="_blank" rel="noreferrer">
            <img className="icon-social" src={twitter} alt="" loading="lazy" />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img className="icon-social" src={instagram} alt="" loading="lazy" />
          </a>
          <a href={links.discord} target="_blank" rel="noreferrer">
            <img className="icon-social" src={discord} alt="" loading="lazy" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img className="icon-social" src={linkedin} alt="" loading="lazy" />
          </a> */}
        </nav>
      </div>
      {/* elements of desktop Home */}
      <article className="home-left">
        <h1 className="home-container__title">Eventos</h1>
        <p className="home-container__description">
          Acelera la conversión de ventas de <br /> minutos a segundos.
        </p>
        <div className="home-container__btn-wrapper">
          <a target="_blank" className="btn btn--primary" href={links.event}>
            Empieza ahora
          </a>
        </div>
      </article>
      <div className="home-container__line" />
      <article className="home-right">
        <h1 className="home-container__title">Usuarios</h1>
        <p className="home-container__description">
          Compra sin esperas en cada <br /> evento al que asistas.
        </p>
        <div className="home-container__btn-wrapper">
          <a target="_blank" className="btn btn--primary" href={links.shooza}>
            Empieza ahora
          </a>
        </div>
      </article>
      <footer className="home-container__footer">
        <span>SHOOZA 2023</span>
      </footer>
    </section>
  );
};

export default Home;
