import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderBoliches.scss";
import { dataSlider } from "./SliderData";

const SliderBoliches = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "5px",
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4.7,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2.9,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.6,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0.85,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 0.9,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 0.95,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="black-bar-slider"></div>

      <h1 className="titulo-slider">ELLOS EVOLUCIONARON ¿Y VOS?</h1>

      <Slider {...settings} className="slider">
        {dataSlider.map((item) => (
          <div className="individual-card">
            <div className="body-card">
              <div className="image-card">
                <img src={item.image} alt="algo piola" />
              </div>
              <div className="text-card">
                <h2>{item.title}</h2>
                <p>{item.ubic}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBoliches;
