import "./section-one.scss";

import data from "../../data/data.json";
import MenuItem from "../../components/MenuItem/MenuItem";
const SectionOne = () => {
  return (
    <section className="section-one layout">
      <h2 className="layout__title heading-secondary">entradas</h2>
      <div className="layout__data"></div>
    </section>
  );
};

export default SectionOne;
