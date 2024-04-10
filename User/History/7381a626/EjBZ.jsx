import "./about-us.scss";
import { useObserver } from "hooks/useObserver";
import { useEffect } from "react";
import dots from "assets/dots1.svg";
const AboutUs = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#quienes-somos");
  }, [isIntersecting]);

  return (
    <section id="quienes-somos" className="about-us" ref={setReference}>
      <img src={dots} alt="dots" />
      <h2 className="works__title">Quienes somos</h2>
    </section>
  );
};

export default AboutUs;
