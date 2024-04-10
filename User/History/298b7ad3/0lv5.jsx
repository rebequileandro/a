import "./section-one.scss";
import imageOne from "../../assets/image-3.webp";
import imageTwo from "../../assets/image-4.webp";
import arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <section className="section-one">
      <h2 className="heading-tertiary section-one__title">
        Somos especialistas en <br />
        <span>carnes</span>
      </h2>
      <div className="section-one__image-container">
        <div className="section-one__image">
          <img src={imageOne} alt="parrilla" />
        </div>
        <div className="section-one__image">
          <img src={imageTwo} alt="parrilla" />
        </div>
      </div>
      <div>
        <p className="heading-tertiary section-one__desc">
          Te invitamos a conocer una propuesta diferente.
        </p>
      </div>
      <div className="section-one__btn-container">
        <button
          className="section-one__btn"
          onClick={() => navigate("/entradas")}
        >
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
