import React from "react";
import WhatIsWeDrink from "../WhatIsWeDrink/WhatIsWeDrink";
import "./functionalities.scss";
import Points from "../Points/Points";
import Menu from "../Menu/Menu";
import Statistics from "../Statistics/Statistics";

const Functionalities = ({ setIsOpen }) => {
  return (
    <section id="functionalities" className="wedrink-container">
      <WhatIsWeDrink setIsOpen={setIsOpen} />
      <article className="with-wedrink">
        <span id="traslate-top-to-bottom" className="ellipse one"></span>
        <span id="traslate-bottom-to-top" className="ellipse two"></span>
        <span id="traslate-top-to-bottom" className="ellipse three"></span>
        <h1 className="with-wedrink__title">
          BRINDA UNA EXPERIENCIA ÚNICA Y <br />
          AUMENTA LA SATISFACCIÓN DE TUS <br />
          CLIENTES
        </h1>
        <span id="traslate-bottom-to-top" className="ellipse-pink one"></span>
        <span id="traslate-right-to-left" className="ellipse-pink two"></span>
        <span id="traslate-left-to-right" className="ellipse-pink three"></span>
      </article>
      <Menu />
      <Points />
      <Statistics />
    </section>
  );
};

export default Functionalities;
