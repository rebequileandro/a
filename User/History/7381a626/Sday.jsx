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

  const values = [
    {
      title: "Creatividad",
      description:
        "Nos encanta pensar fuera de la caja y crear soluciones únicas. Para esto trabajamos permanentemente en investigación, nos reunimos con las marcas líderes en software a nivel mundial y los directores más creativos de Argentina y España.",
    },
    {
      title: "Innovación",
      description:
        "Siempre estamos a la vanguardia de la tecnología, buscando nuevas formas de sorprender. Representamos en Argentina a Alcorn Mc Bride ( Parques de Disney y Universal), Mason (acustica), Modulo Py y Av Stumpfl (ambos softwares multidisplay) entre otros.",
    },
    {
      title: "Calidad",
      description:
        "Nuestros diseños técnicos se destacan por ser estables y confiables. Pensados para un uso continuo.",
    },
    {
      title: "Estética",
      description:
        "Nos importa tanto la belleza como la funcionalidad, cuidando cada detalle.",
    },
  ];

  return (
    <section id="quienes-somos" className="about-us" ref={setReference}>
      <img src={halfRing} alt="dots" className="about-us__graphics__ring" />

      <div className="about-us__title-wrapper">
        <img src={dots} alt="dots" className="about-us__graphics__dots" />
        <h2 className="about-us__title">Quienes somos</h2>
      </div>
      <article className="about-us__data-container">
        <p className="about-us__description">
          Desde hace <span className="highlighted-text-secondary">25 años</span>{" "}
          en <span className="highlighted-text-secondary">Showcontrol</span>{" "}
          trabajamos diseños técnicos, donde buscamos que la creatividad y la
          tecnología se unan.
          <br />
          Quizás sea por esto, que nuestros principales clientes son directores,
          arquitectos y guionistas.
          {/* <span className="highlighted-text-secondary">Showcontrol</span> es una
          empresa que se dedica desde hace mas de{" "}
          <span className="highlighted-text-primary">20 años</span> al diseño de
          Museos, parques temáticos, teatros y experiencias audiovisuales. */}
        </p>
        <br />
        <h3 className="highlighted-text-primary about-us__sub-title">
          Los valores que nos definen:
        </h3>
        <br />
        <ul className="about-us__values-container">
          {values.map((e) => (
            <li className="highlighted-text-secondary about-us__values-item">
              {e.title}: <br />
              <p className="about-us__values-item-description">
                {e.description}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default AboutUs;
