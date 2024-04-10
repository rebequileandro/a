import React from "react";
import "./section_two.scss";
import imageTwo from "../../assets/image-two.png";
export const SectionTwo = () => {
  return (
    <section className="section-two layout-primary">
      <img className="section-two__image-two" src={imageTwo} alt="bzrp" />
    </section>
  );
};
