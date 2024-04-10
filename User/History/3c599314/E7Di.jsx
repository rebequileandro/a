import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardPrimary from "../Cards/CardPrimary/CardPrimary";

const CardSlider = ({ dataSlider }) => {
  console.log(dataSlider);
  return (
    <Swiper slidesPerView={2.5} spaceBetween={5}>
      {dataSlider.map((item) => (
        <SwiperSlide>
          <CardPrimary title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
