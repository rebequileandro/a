import "./section-four.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
import imageOne from "../../assets/image-9.webp";
const SectionFour = () => {
  const navigate = useNavigate();

  return (
    <section className="section-four">
      <div className="section-four__image-container">
        <img src={imageOne} alt="bebidas" />
      </div>
      <>
        <h2 className="section-four__title heading-secondary">Bebidas</h2>
        <div className="section-four__data">
          {data.drinks.map((e) => (
            <MenuItem key={e.name} name={e.name} price={e.price} />
          ))}
        </div>
      </>
    </section>
  );
};

export default SectionFour;
