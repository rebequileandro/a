import { useObserver } from "hooks/useObserver";
import React, { useEffect } from "react";
import "./contact.scss";
import showControl from "assets/show-control_2.svg";
const Contact = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#contacto");
  }, [isIntersecting]);

  return (
    <section ref={setReference} id="contacto" className="contact">
      <div className="contact__info-container">
        <div>
          <img src="" alt="email" />
        </div>
        <div>
          <img src="" alt="telefono" />
        </div>
      </div>
      <img
        src={showControl}
        alt="show-control"
        className="contact__graphics__show-control"
      />
    </section>
  );
};

export default Contact;
