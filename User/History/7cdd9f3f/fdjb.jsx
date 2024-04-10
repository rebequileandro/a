import React, { useEffect } from "react";
import "./WhatIsWeDrink.scss";
import smartPhone1 from "../../assets/image 590.png";
import smartPhone2 from "../../assets/image 599.png";
import { useObserver } from "../../hooks/useObserver";
// import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";
import appStore from "../../assets/icon_app-store.svg";
import playStore from "../../assets/icon_play-store.svg";
import pwa from "../../assets/icon_pwa.svg";
import { links } from "../../data/links";

const WhatIsWeDrink = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("shooza");
  }, [isIntersecting]);
  return (
    <article className="what-is-wedrink-container" ref={setReference}>
      <div className="baner">
        <div className="phrase">
          <div className="titulos-wedrink">
            <h1>
              Pide cuando quieras desde
              <br />
              donde quieras
            </h1>
          </div>
          <p className="phrase__description">
            Pide desde tu smartphone, y a través de notificaciones te <br />{" "}
            enterarás cuando sea momento de retirar tu orden!
            <br />
            <br />
            El tiempo es tuyo, disfruta al máximo de cada segundo.
          </p>
          <div className="phrase__stores">
            <a href={links.appStore} target="_blank" rel="noreferrer">
              <img src={appStore} alt="app store" />
            </a>
            <a href={links.playStore} target="_blank" rel="noreferrer">
              <img src={playStore} alt="play store" />
            </a>
            <a href={links.shoozaApp} target="_blank" rel="noreferrer">
              <img src={pwa} alt="pwa" />
            </a>
          </div>
          <div className="phrase__stores--mobile">
            <div className="phrase__stores--mobile__top">
              <a href={links.appStore} target="_blank" rel="noreferrer">
                <img src={appStore} alt="app store" />
              </a>
              <a href={links.playStore} target="_blank" rel="noreferrer">
                <img src={playStore} alt="play store" />
              </a>
            </div>
            <a href={links.shoozaApp} target="_blank" rel="noreferrer">
              <img src={pwa} alt="pwa" />
            </a>
          </div>
        </div>
        <div className="image-container">
          <span id="traslate-top-to-bottom" className="ellipse-pink one" />
          <span id="traslate-top-to-bottom" className="ellipse-pink two" />
          <span id="traslate-top-to-bottom" className="ellipse-pink three" />
          <div className="image-container__image-wrapper-desktop">
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
          </div>
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </article>
  );
};

export default WhatIsWeDrink;
