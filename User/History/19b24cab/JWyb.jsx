import React, { useRef } from "react";
import "./tour_carousel.scss";
import { useEffect } from "react";
import { useState } from "react";
import PolaroidPopup from "../PolaroidPopup/PolaroidPopup";
import { formatDate, formatDateMont } from "../../utils/format-date";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, FreeMode } from "swiper";
import BzrpTourCard from "../BzrpTourCard/BzrpTourCard";
const TourCarousel = ({ months }) => {
  const [popup, setPopup] = useState(false);
  const [slides, setSlides] = useState(months);
  const [background, setbackground] = useState([]);

  useEffect(() => {
    let backgroundDates = months.map((e) => formatDate(e.date));
    if (months.length <= 2) {
      let x10 = [];
      for (let i = 0; i <= 10; i++) {
        x10 = [...x10, ...backgroundDates];
      }
      setbackground(x10);
    } else if (months.length < 5) {
      let x5 = [];
      for (let i = 0; i <= 5; i++) {
        x5 = [...x5, ...backgroundDates];
      }
      setbackground(x5);
    } else {
      setbackground(backgroundDates);
    }
    if (window.innerWidth > 600 && months.length >= 4) {
      const x2 = months.concat(months);
      setSlides(x2);
    } else {
      setSlides(months);
    }
  }, [months]);
  console.log(months.length <= 3);
  const config = {
    slidesPerView: "auto",
    freeMode: months.length <= 3 ? false : true,
    spaceBetween: 5,
    mousewheel: {
      enabled: true,
      sensitivity: 3,
    },
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: months.length <= 3 ? true : false,
    },
    modules: [Autoplay, Mousewheel, FreeMode],
    loop: true,
  };
  const configBG = {
    slidesPerView: "auto",
    speed: window.innerWidth <= 600 ? 8000 : 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    loop: true,
  };
  return (
    <>
      <div className="tour-carousel">
        <div className="tour-carousel__background-carousel-wrapper">
          <Swiper {...configBG}>
            {background?.map((date, i) => (
              <SwiperSlide key={date + i}>
                <span className="tour-carousel__slide--text">{`${formatDate(
                  date
                )} - `}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {window.innerWidth <= 600 ? (
          <div className="tour-carousel__mobile">
            {slides.map((e, i) => (
              <div className="tour-carousel__slide" key={e.date + i}>
                <BzrpTourCard
                  date={e.date}
                  city={e.city}
                  country={e.country}
                  portada={e.portada}
                  onClick={() => setPopup(e)}
                />
              </div>
            ))}
          </div>
        ) : (
          <Swiper {...config} className="tour-carousel__slider">
            {slides?.map((e, i) => (
              <SwiperSlide key={e.date + i} className="tour-carousel__slide">
                <BzrpTourCard
                  date={e.date}
                  city={e.city}
                  country={e.country}
                  portada={e.portada}
                  onClick={() => setPopup(e)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <PolaroidPopup data={popup} setData={setPopup} />
    </>
  );
};

export default TourCarousel;
