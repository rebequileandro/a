import { useObserver } from "hooks/useObserver";
import React, { useEffect } from "react";
import "./contact.scss";
import showControl from "assets/show-control_2.svg";
import emailIcon from "assets/email_icon.svg";
import phoneIcon from "assets/phone_icon.svg";

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
          <img src={emailIcon} alt="email" />
          <h3>
            <span>Correo:</span>
          </h3>
        </div>
        <div>
          <img src={phoneIcon} alt="telefono" />
          <h3>
            <span>Telefono:</span>
          </h3>
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
