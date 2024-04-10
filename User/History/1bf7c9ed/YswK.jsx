import React from "react";
import WhatIsWeDrink from "./WhatIsWeDrink/WhatIsWeDrink";
import "./Wedrink.scss";

const Wedrink = () => {
  return (
    <div id="que-es-WeDrink" className="wedrink-container">
      <WhatIsWeDrink />
      {/* <div className="with-wedrink">
        <span id="traslate-top-to-bottom" className="ellipse one"></span>
        <span id="traslate-bottom-to-top" className="ellipse two"></span>
        <span id="traslate-top-to-bottom" className="ellipse three"></span>
        <h1>
          nunca supiste qué pasaba en <br />
          tus discotecas, hasta que <br />
          conociste wedrink
        </h1>
        <span id="traslate-bottom-to-top" className="ellipse-pink one"></span>
        <span id="traslate-right-to-left" className="ellipse-pink two"></span>
        <span id="traslate-left-to-right" className="ellipse-pink three"></span>
      </div> */}
    </div>
  );
};

export default Wedrink;
