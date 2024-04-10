import { useObserver } from "hooks/useObserver";
import React, { useEffect } from "react";

const Contact = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#contacto");
  }, [isIntersecting]);

  return (
    <sction ref={setReference} id="contacto">
      Contact
    </sction>
  );
};

export default Contact;
