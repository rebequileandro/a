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
      Contact
      <img
        src={showControl}
        alt="show-control"
        className="contacto__graphics__show-control"
      />
    </section>
  );
};

export default Contact;
