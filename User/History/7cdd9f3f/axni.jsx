import React, { useEffect } from "react";
import "./WhatIsWeDrink.scss";
import smartPhone1 from "../../assets/image 590.png";
import smartPhone2 from "../../assets/image 599.png";
import { useObserver } from "../../hooks/useObserver";
// import ButtonStarNow from "../../components/ButtonStartNow/ButtonStarNow";
import appStore from "../../assets/icon_app-store.svg";
import playStore from "../../assets/icon_play-store.svg";
import pwa from "../../assets/icon_pwa.svg";

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
              SHOOZA HACE LA FILA <br />
              POR TI. DIVIERTETE.
            </h1>
          </div>
          <p className="phrase__description">
            Pide desde tu smartphone, y a través de notificaciones te <br />{" "}
            enterarás cuando sea momento de retirar tu orden!
            <br />
            <br />
            El tiempo es tuyo, disfruta al máximo de cada segundo.
          </p>
          <div className="">
            <img src={appStore} alt="app store" />
            <img src={playStore} alt="play store" />
            <img src={pwa} alt="pwa" />
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
          {/* <div className="image-container__image-wrapper-mobile">
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
          </div> */}
          <span id="traslate-right-to-left" className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </article>
  );
};

export default WhatIsWeDrink;
