import React from "react";
import "./section_four.scss";
import imageFour from "../../assets/image-four.png";

export const SectionFour = () => {
  return (
    <section className="section-four layout-primary">
      <img className="section-four__image-four" src={imageFour} alt="bzrp" />
    </section>
  );
};
