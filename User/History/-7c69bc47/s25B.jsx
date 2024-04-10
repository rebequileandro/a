import React, { useEffect, useState } from "react";
import "./Home.scss";
import background from "../../assets/background.mov";
import smartphone_1 from "../../assets/smartphone_1.png";
import wedrink_logo from "../../assets/wedrink_logo.svg";
import videoLoading from "../../assets/loading-video.png";
const Home = () => {
  return (
    <div id="inicio" className="home-container">
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
      <img
        className="wedrink_logo"
        src={wedrink_logo}
        alt="wedrink"
        loading="lazy"
      />
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
            Ahora podrás manejar tus discotecas desde tu smartphone.
          </p>
          <a
            href="#que-es-WeDrink"
            className="home-container__btn btn btn--primary"
          >
            Que es Shooza
          </a>
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
