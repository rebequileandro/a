import "./Section-three.scss";
import arrow from "../../assets/arrow.svg";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const SectionThree = () => {
  return (
    <section className="section-three layout">
      <div className="section-three__side-container">
        <h2 className="section-three__title heading-secondary">
          Para acompañar
        </h2>
        <button className="section-three__btn">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
