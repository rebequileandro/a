import React from "react";
import "./intro-slider.scss";
import sliderContent from "./content.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "../../components";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "@/models/routes.models";

const IntroSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextElement = () => {
    swiper?.slideNext();
  };
  const handlePrevElement = () => {
    swiper.activeIndex === 2 ? navigate(ROUTES.LOGIN) : swiper?.slidePrev();
  };
  const handleSlideChange = () => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className="intro-slider ">
      <Swiper
        className="intro-slider__slider-wrapper"
        spaceBetween={30}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        navigation={true}
      >
        {sliderContent?.map((slide) => (
          <SwiperSlide className="intro-slider__slide" key={slide.title}>
            {swiper?.activeIndex !== 0 && (
              <button
                className="intro-slider__back-btn"
                onClick={handlePrevElement}
              >
                <svg
                  width="100%"
                  height="100%"
                  aria-label="Go back"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z"
                    fill="white"
                  />
                </svg>
              </button>
            )}
            <Link to={ROUTES.LOGIN} className="intro-slider__skip-btn">
              Skip
            </Link>
            <>
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
              <h2
                className="intro-slider__title"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              ></h2>
              <h3
                className="intro-slider__subtitle"
                dangerouslySetInnerHTML={{ __html: slide.subtitle }}
              ></h3>
              <p
                className="intro-slider__text"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              ></p>
            </>
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
