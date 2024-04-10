import React from "react";
import "./card.scss";
import papper from "../../../../../assets/LiveTour/papper.webp";
import { motion } from "framer-motion";
import polaroids from "../polaroid.json";
const Card = ({ date, image, even }) => {
  function formatDate(date) {
    let day = date.getUTCDate();
    let month = date.toLocaleDateString("es-ES", { month: "2-digit" });
    return `${day}.${month}`;
  }

  const getPolaroid = () => {
    let index = Math.floor(Math.random() * polaroids.length - 1) + 1;
    let selected = polaroids[index];
    return selected;
  };

  return (
    <div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.8 }}
      // initial={{
      //   opacity: 0,
      //   y: 100,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   y: even ? 30 : 0,
      //   transition: {
      //     duration: 1,
      //     delay: even ? 0.5 : 0,
      //   },
      // }}
      // viewport={{ once: true }}
      className={even ? "card-polaroid card-polaroid--even" : "card-polaroid"}
    >
      <img
        className="card-polaroid__background"
        src={getPolaroid()}
        alt="polaroid bizarrap"
        loading="lazy"
      />
      <button className="card-polaroid__btn">
        <p className="card-polaroid__btn--text">Comprar</p>
      </button>
      <div className="card-polaroid__papper-wrapper">
        <div className="card-polaroid__location-wrapper">
          <img className="card-polaroid__papper" src={papper} alt="papper" />
          <div className="card-polaroid__location-container">
            <span>
              {date.city && `${date.city} - `}
              {date.country}
            </span>
            <br />
            <span>{date.show}</span>
          </div>
        </div>
      </div>
      <div className="card-polaroid__date-container">
        <span>{formatDate(new Date(date.date))}</span>
      </div>
    </div>
  );
};

export default Card;
