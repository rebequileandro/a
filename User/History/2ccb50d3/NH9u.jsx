import "./Section-three.scss";
import arrow from "../../assets/arrow.svg";
import imageOne from "../../assets/image-8.jpg";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
const SectionThree = () => {
  const navigate = useNavigate();

  return (
    <section className="section-three">
      <div className="section-three__side-container">
        <h2 className="section-three__title heading-secondary">
          Para acompañar
        </h2>
        <div>
          <button className="section-three__btn">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="section-three__content">
        <div className="section-three__items-container">
          {data.guarniciones.map((e) => (
            <>
              <MenuItem key={e.name} name={e.name} price={e.price} />
            </>
          ))}
        </div>
        <div
          className="section-three__image-container"
          onClick={() => navigate("/bebidas")}
        >
          <img src={imageOne} alt="guarniciones" />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
