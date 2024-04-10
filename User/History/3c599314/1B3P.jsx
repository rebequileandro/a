import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSlider = () => {
  return (
    <Swiper slidesPerView={1} spaceBetween={10}>
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
