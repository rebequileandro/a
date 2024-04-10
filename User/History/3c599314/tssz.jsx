import React from "react";
import "./card-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import CardPrimary from "../Cards/CardPrimary/CardPrimary";
import CardModal from "../CardModal/CardModal";

const CardSlider = ({ dataSlider }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode]}
        className="card-slider"
      >
        {dataSlider.map((item, index) => (
          <SwiperSlide className="card-slider__slide" key={item.title + index}>
            <CardPrimary title={item.title} />
            <CardModal />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
