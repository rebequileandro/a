import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import CardPrimary from "../Cards/CardPrimary/CardPrimary";

const CardSlider = ({ dataSlider }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      //   spaceBetween={5}
      freeMode={true}
      modules={[FreeMode]}
    >
      {dataSlider.map((item) => (
        <SwiperSlide>
          <CardPrimary title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
