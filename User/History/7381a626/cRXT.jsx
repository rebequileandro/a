import { useObserver } from "hooks/useObserver";
import "./about-us.scss";
import { useEffect } from "react";

const AboutUs = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#quienes-somos");
  }, [isIntersecting]);

  return (
    <div id="quienes-somos" className="about-us" ref={setReference}>
      AboutUs
    </div>
  );
};

export default AboutUs;
