import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = ({ setInView }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setInView("contact");
    }
  }, [inView]);
  return (
    <div ref={ref} id="contact">
      Contact
    </div>
  );
};

export default Contact;
