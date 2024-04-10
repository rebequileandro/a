import "./section-one.scss";
import imageOne from "../../assets/image-3.webp";
import imageTwo from "../../assets/image-4.webp";
const SectionOne = () => {
  return (
    <section className="section-one layout">
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="section-one__image-container">
        <img src={imageOne} alt="parrilla" />
        <img src={imageTwo} alt="parrilla" />
      </div>
    </section>
  );
};

export default SectionOne;
