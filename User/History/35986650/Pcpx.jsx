import { useObserver } from "hooks/useObserver";
import React, { useEffect } from "react";
import "./contact.scss";
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
    </section>
  );
};

export default Contact;
