import React, { useEffect, useState } from "react";
import "./Home.scss";
import background from "../../assets/background.mov";
import smartphone_1 from "../../assets/home01.png";
import smartphone_2 from "../../assets/home02.png";
import shooza_logo from "../../assets/shooza-icon.svg";
import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";
import instagram from "../../assets/FooterAssets/instagram.svg";
import linkedin from "../../assets/FooterAssets/linkedin.svg";
import twitter from "../../assets/FooterAssets/twitter.svg";
import { links } from "../../data/links";

const Home = () => {
  return (
    <section id="inicio" className="home-container">
      <video
        className="video-background"
        width="100%"
        height="100%"
        loading="lazy"
        // poster={videoLoading}
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={background} type="video/mp4" />
      </video>
      <div>
        <img
          className="wedrink_logo"
          src={shooza_logo}
          alt="shooza"
          loading="lazy"
        />
        <div>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={linkedin}
              alt="linkedin"
              title="Linkedin"
            />
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={instagram}
              alt="instagram"
              title="Instagram"
            />
          </a>
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <img
              className="footer-container__social-network__icon"
              src={twitter}
              alt="twitter"
              title="Twitter"
            />
          </a>
        </div>
      </div>
      <div className="baner">
        <div className="slogan">
          <div className="home-container__title-wrapper">
            <h1 className="home-container__title">
              EL UBER EATS <br /> DENTRO DE TU <br />
              EVENTO.
            </h1>
            <div className="underline"></div>
          </div>
          <p className="home-container__description">
            Transformando las ventas, de minutos <br /> a segundos.
          </p>
          <ButtonStarNow />
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
