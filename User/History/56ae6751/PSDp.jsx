import React from "react";
import "./section_three.scss";
import imageThree from "../../assets/image-three.png";
export const SectionThree = () => {
  return (
    <section className="section-three layout-primary">
      <img className="section-three__image-three" src={imageThree} alt="bzrp" />
    </section>
  );
};
