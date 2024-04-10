import React from "react";
import "./Home.scss";

import shoozaIcon from "../../assets/NavAssets/shooza-icon.svg";
import twitter from "../../assets/NavAssets/Vector.svg";
import telegram from "../../assets/NavAssets/Vector-1.svg";
import discord from "../../assets/NavAssets/Vector-2.svg";
import linkedin from "../../assets/NavAssets/Vector-3.svg";
import { links } from "../../data/links";

const Home = () => {
  return (
    <div className="home-container">
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
            <img className="icon-social" src={twitter} alt="" loading="lazy" />
          </a>
          <a href={links.telegram} target="_blank" rel="noreferrer">
            <img className="icon-social" src={telegram} alt="" loading="lazy" />
          </a>
          <a href={links.discord} target="_blank" rel="noreferrer">
            <img className="icon-social" src={discord} alt="" loading="lazy" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img className="icon-social" src={linkedin} alt="" loading="lazy" />
          </a>
        </nav>
      </div>
      {/* elements of desktop Home */}
      <div className="home-left">
        <h1>Eventos</h1>
        <p>
          {/* Donde la fiesta comienza y termina <br /> en tu smartphone.{" "} */}
        </p>
        <div className="home-container__btn-wrapper">
          <a className="btn btn--primary" href={links.shooza}>
            Saber más
          </a>
        </div>
      </div>
      <div className="home-barrita"></div>
      <div className="home-right">
        <h1>fiestero</h1>
        <p>
          Donde la fiesta comienza y termina <br /> en tu smartphone.{" "}
        </p>
        <div className="home-container__btn-wrapper">
          <a className="btn btn--primary" href={links.event}>
            Saber más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
