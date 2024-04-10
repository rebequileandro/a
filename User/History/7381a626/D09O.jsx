import "./about-us.scss";
import { useObserver } from "hooks/useObserver";
import { useEffect } from "react";
import dots from "assets/dots1.svg";
import halfRing from "assets/half_ring.svg";

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
      <img src={halfRing} alt="dots" className="about-us__graphics__ring" />

      <div className="about-us__title-wrapper">
        <img src={dots} alt="dots" className="about-us__graphics__dots" />
        <h2 className="about-us__title">Quienes somos</h2>
      </div>
      <div className="about-us__data-container">
        <p className="about-us__description">
          Desde hace <span className="highlighted-text-secondary">25 años</span>{" "}
          en Showcontrol trabajamos diseños técnicos, donde buscamos que la
          creatividad y la tecnología se unan. Quizás sea por esto, que nuestros
          principales clientes son directores, arquitectos y guionistas.
          {/* <span className="highlighted-text-secondary">Showcontrol</span> es una
          empresa que se dedica desde hace mas de{" "}
          <span className="highlighted-text-primary">20 años</span> al diseño de
          Museos, parques temáticos, teatros y experiencias audiovisuales. */}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
