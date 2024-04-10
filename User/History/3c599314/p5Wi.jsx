import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSlider = ({ dataSlider }) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={10}>
      {dataSlider.map((item) => (
        <SwiperSlide>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
