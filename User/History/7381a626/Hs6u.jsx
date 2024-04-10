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
      <div className="about-us__title-wrapper">
        <img src={dots} alt="dots" className="about-us__graphics__dots" />
        <h2 className="about-us__title">Quienes somos</h2>
      </div>
      <div>
        <h2>
          Showcontrol es una empresa que se dedica desde hace mas de 20 años al
          diseño de Museos, parques temáticos, teatros y experiencias
          audiovisuales.
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
