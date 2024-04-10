import React, { useEffect } from "react";
import "./Wedrink.scss";
import { useObserver } from "../../hooks/useObserver";
import WhatIsWeDrink from "../WhatIsWeDrink/WhatIsWeDrink";

const Wedrink = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });
  useEffect(() => {
    isIntersecting && setInView("shooza");
  }, [isIntersecting]);
  console.log(isIntersecting);

  return (
    <section
      id="que-es-shooza"
      className="wedrink-container"
      ref={setReference}
    >
      <WhatIsWeDrink />
      <div className="with-wedrink">
        <span id="traslate-bottom-to-top" className="ellipse one"></span>
        <span id="traslate-top-to-bottom" className="ellipse two"></span>
        <span id="traslate-bottom-to-top" className="ellipse three"></span>
        <h1>
          con Shooza, tu tiempo lo <br />
          usas para divertirte
        </h1>
        <span id="traslate-top-to-bottom" className="ellipse-pink one"></span>
        <span id="traslate-bottom-to-top" className="ellipse-pink two"></span>
        <span id="traslate-top-to-bottom" className="ellipse-pink three"></span>
      </div>
    </section>
  );
};

export default Wedrink;
