import React from "react";
import WhatIsWeDrink from "./WhatIsWeDrink/WhatIsWeDrink";
import "./functionalities.scss";
import Points from "./Points/Points";

const Functionalities = () => {
  return (
    <section id="functionalities" className="wedrink-container">
      <WhatIsWeDrink />
      <article className="with-wedrink">
        <span id="traslate-top-to-bottom" className="ellipse one"></span>
        <span id="traslate-bottom-to-top" className="ellipse two"></span>
        <span id="traslate-top-to-bottom" className="ellipse three"></span>
        <h1>nunca supiste qué pasaba en</h1>
        <h1>tus discotecas, hasta que</h1>
        <h1>conociste wedrink</h1>
        <span id="traslate-bottom-to-top" className="ellipse-pink one"></span>
        <span id="traslate-right-to-left" className="ellipse-pink two"></span>
        <span id="traslate-left-to-right" className="ellipse-pink three"></span>
      </article>
      <Points />
    </section>
  );
};

export default Functionalities;
