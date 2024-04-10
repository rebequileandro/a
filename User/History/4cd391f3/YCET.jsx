import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = ({ setInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setInView("contact");
    }
  }, [inView]);
  return (
    <div ref={ref} id="contact)" className="contact">
      Contact
    </div>
  );
};

export default Contact;
