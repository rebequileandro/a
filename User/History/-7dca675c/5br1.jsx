import React from "react";
import "./intro-slider.scss";
import sliderContent from "./content.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "../../components";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const IntroSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const handleNextElement = () => {
    swiper?.slideNext();
  };
  return (
    <div className="intro-slider ">
      <Swiper
        className="intro-slider__slider-wrapper"
        spaceBetween={30}
        onSwiper={setSwiper}
        modules={[Navigation]}
        navigation={true}
      >
        {sliderContent?.map((slide) => (
          <SwiperSlide className="intro-slider__slide" key={slide.title}>
            <button className="intro-slider__back-btn">
              <svg
                width="100%"
                height="100%"
                aria-label="Go back"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <img
              src={slide.image}
              alt="ai technology"
              width={229}
              height={229}
            />
            <img
              className="intro-slider__medbot"
              src="/assets/intro-slider/medbot.svg"
              alt="medbot+"
              width={178}
              height={35}
            />
            <h2 className="intro-slider__title">{slide.title}</h2>
            <h3 className="intro-slider__subtitle">{slide.subtitle}</h3>
            <p className="intro-slider__text">{slide.text}</p>
            <div className="intro-slider__btn-wrapper">
              <Button fullWidth onClick={handleNextElement}>
                {slide.button}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroSlider;
