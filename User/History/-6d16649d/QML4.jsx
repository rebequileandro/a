import "./section-five.scss";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image-10.webp";

const SectionFive = () => {
  const navigate = useNavigate();

  return (
    <section className="section-five">
      <div>
        <div className="section-five__title-container">
          <h2 className="section-five__title heading-secondary">Postres</h2>
        </div>
        <div className="layout__data">
          {data.drinks.map((e) => (
            <MenuItem key={e.name} name={e.name} price={e.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
