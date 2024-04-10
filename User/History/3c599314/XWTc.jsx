import React from "react";
import "./card-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import CardPrimary from "../Cards/CardPrimary/CardPrimary";

const CardSlider = ({ dataSlider }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={12}
      freeMode={true}
      modules={[FreeMode]}
    >
      {dataSlider.map((item) => (
        <SwiperSlide className="card-slider-slide">
          <CardPrimary title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
