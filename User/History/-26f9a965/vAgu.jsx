import React, { useEffect } from "react";
import WhatIsWeDrink from "./WhatIsWeDrink/WhatIsWeDrink";
import "./Wedrink.scss";
import { useObserver } from "../../hooks/useObserver";

const Wedrink = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("shooza");
  }, [isIntersecting]);
  return (
    <div id="que-es-WeDrink" className="wedrink-container" ref={setReference}>
      <WhatIsWeDrink />
      <div className="with-wedrink">
        <span id="traslate-bottom-to-top" className="ellipse one"></span>
        <span id="traslate-top-to-bottom" className="ellipse two"></span>
        <span id="traslate-bottom-to-top" className="ellipse three"></span>
        <h1>con Shooza, tu tiempo lo</h1>
        <h1>usas para divertirte</h1>
        <span id="traslate-top-to-bottom" className="ellipse-pink one"></span>
        <span id="traslate-bottom-to-top" className="ellipse-pink two"></span>
        <span id="traslate-top-to-bottom" className="ellipse-pink three"></span>
      </div>
    </div>
  );
};

export default Wedrink;
