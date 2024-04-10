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

  useEffect(() => {
    if (window.innerWidth > 600 && months.length >= 4) {
      const x2 = months.concat(months);
      setSlides(x2);
    } else {
      setSlides(months);
    }
  }, []);
  const config =
    window.innerWidth <= 600
      ? {
          slidesPerView: "auto",
          freeMode: true,
          spaceBetween: 5,
          modules: [FreeMode],
          loop: true,
        }
      : {
          slidesPerView: "auto",
          freeMode: true,
          spaceBetween: 5,
          mousewheel: {
            enabled: true,
            sensitivity: 3,
          },
          speed: 3000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          modules: [Autoplay, Mousewheel, FreeMode],
          loop: true,
        };
  return (
    <>
      <div className="tour-carousel">
        <div>
          <Swiper {...config}>
            {slides?.map((e, i) => (
              <SwiperSlide>
                <span className="tour-carousel__slide--text">{`- ${formatDate(
                  e.date
                )} -`}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Swiper {...config}>
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
      </div>
      <PolaroidPopup data={popup} setData={setPopup} />
    </>
  );
};

export default TourCarousel;
