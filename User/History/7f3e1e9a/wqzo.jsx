import React from "react";
import "./WhatIsWeDrink.scss";
import appStore from "../../../assets/icon_app-store.svg";
import playStore from "../../../assets/icon_play-store.svg";
import smartPhone2 from "../../../assets/smartphone_2.png";
const WhatIsWeDrink = () => {
  return (
    <div className="what-is-wedrink-container">
      <div className="baner">
        <div className="phrase">
          <div>
            <h1>¿fila para pedir tu trago?</h1>
            <h1>eso ya pinchó</h1>
          </div>
          <p>
            Estamos en el siglo XXI, dejemos que la tecnología haga la fila por
            nosotros
          </p>
          <p>
            Con WeDrink, podrás pedir tus tragos desde tu smartphone y buscarlos
            en el momento que estén listos
          </p>
          <div className="buttons">
            <button>
              <img src={playStore} alt="play store" loading="lazy" />
            </button>
            <button>
              <img src={appStore} alt="app store" loading="lazy" />
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img
            className="img-smartphone"
            src={smartPhone2}
            alt="smatphone wedrink"
            loading="lazy"
          />
          <span id="traslate-bottom-to-top" className="ellipse one"/>
          <span id="traslate-right-to-left" className="ellipse-pink one"/>
          <span id="traslate-left-to-right" className="ellipse-pink two "/>
        </div>
      </div>
    </div>
  );
};

export default WhatIsWeDrink;
