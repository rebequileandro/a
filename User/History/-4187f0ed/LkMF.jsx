import "./section-two.scss";
import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import imageOne from "../../assets/image-5.jpg";
import imageTwo from "../../assets/image-6.webp";

const SectionTwo = () => {
  return (
    <>
      <section className="section-two">
        <div className="section-two__content-top">
          <div className="section-two__title-container ">
            <h2 className="section-two__title section-two__title--rotate heading-secondary">
              Entradas
            </h2>
          </div>
          <div className="section-two__image-container">
            <img src={imageOne} alt="entradas" />
          </div>
        </div>
        <div className="section-two__data">
          <div className="section-two__content">
            {data.entradas.map((e) => (
              <>
                <MenuItem
                  key={e.name}
                  name={e.name}
                  price={e.price}
                  description={e.description}
                />
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="section-two__title-container-b">
          <h2 className="heading-secondary section-two__title">Parrilla</h2>
        </div>
        <div className="section-two__data">
          <div className="section-two__content">
            {data.parrilla.map((e) => (
              <>
                <MenuItem
                  key={e.name}
                  name={e.name}
                  price={e.price}
                  description={e.description}
                />
              </>
            ))}
          </div>
        </div>
        <img src={imageTwo} alt="carne" />
      </section>
    </>
  );
};

export default SectionTwo;
