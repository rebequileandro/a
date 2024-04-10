import React from "react";
import "./next_dates.scss";
import passport from "../../assets/passport.png";
import bzrp from "../../assets/logo-2.svg";
import ItemNextDates from "../../components/ItemNextDates/ItemNextDates";
import data from "../../models/data";
import BackButton from "../../components/BackButtom/BackButton";
import NextDatesCarousel from "../../components/NextDatesCarousel/NextDatesCarousel";
import cap from "../../assets/gorra-1.png";
import sunglasses from "../../assets/gafas.png";
import logo from "../../assets/logo.svg";

export const NextDates = () => {
  return (
    <section className="next-dates layout-primary">
      <img
        src={sunglasses}
        alt="gafas de sol"
        className="next-dates__sunglasses"
      />
      <img className="next-dates__logo" src={logo} alt="bzrp-log" />
      <BackButton />
      <NextDatesCarousel />
      <img src={cap} alt="gorra" className="next-dates__cap" />
    </section>
  );
};
