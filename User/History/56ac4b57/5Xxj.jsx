import React from "react";
import "./next_dates.scss";
import BackButton from "../../components/BackButtom/BackButton";
import NextDatesCarousel from "../../components/NextDatesCarousel/NextDatesCarousel";
import cap from "../../assets/bzrp-cap.webp";
import sunglasses from "../../assets/sunglasses.webp";
import logo from "../../assets/logo.svg";

export const NextDates = () => {
  return (
    <section className="next-dates layout-primary">
      <img
        src={sunglasses}
        alt="gafas de sol"
        className="next-dates__sunglasses"
        loading="lazy"
      />
      <img
        className="next-dates__logo"
        src={logo}
        alt="bzrp-log"
        loading="lazy"
      />
      <BackButton />
      <NextDatesCarousel />
      <img src={cap} alt="gorra" className="next-dates__cap" loading="lazy" />
    </section>
  );
};
