import "./section-one.scss";
import imageOne from "../../assets/image-3.webp";
import imageTwo from "../../assets/image-4.webp";
import arrow from "../../assets/arrow.svg";

const SectionOne = () => {
  const navigate = useNavigate();

  return (
    <section className="section-one layout">
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="section-one__image-container">
        <div className="section-one__image">
          <img src={imageOne} alt="parrilla" />
        </div>
        <div className="section-one__image">
          <img src={imageTwo} alt="parrilla" />
        </div>
      </div>
      <button className="landing__btn" onClick={() => navigate("/carnes")}>
        <img src={arrow} alt="arrow" />
      </button>
    </section>
  );
};

export default SectionOne;
