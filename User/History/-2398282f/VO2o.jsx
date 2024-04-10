import React, { useEffect, useState } from "react";
import "./next_dates_carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, FreeMode } from "swiper";
import NextDatesCard from "../NextDatesCard/NextDatesCard";
import { useAppContext } from "../../context/AppProvider";
// import nextDates from "../../pages/Home/components/LiveTour2024/data.json";

const NextDatesCarousel = () => {
  const { nextDates } = useAppContext();

  const [backgroundNextDates, setbackgroundNextDates] = useState([]);
  const [swiper, setSwiper] = useState(null);

  const generateBackground = () => {
    let arr = [];
    for (let i = 0; i < 40; i++) {
      arr.push(i);
    }
    setbackgroundNextDates(arr);
  };
  useEffect(() => {
    generateBackground();
  }, []);

  const config = {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 5,
    onSwiper: setSwiper,
    mousewheel: {
      enabled: true,
      sensitivity: 1,
    },
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay, FreeMode, Mousewheel],
  };
  const configBG = {
    slidesPerView: "auto",

    speed: window?.innerWidth <= 600 ? 8000 : 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    loop: true,
  };

  useEffect(() => {
    if (swiper) {
      console.log(">", swiper);
      // swiper?.autoplay?.pause();
      swiper?.autoplay?.stop();
      swiper?.slideTo(0, 0);

      if (swiper?.autoplay?.running === false) {
        swiper?.slideTo(0, 0);
        console.log("esta quieto");
      }
      // let timeoutId = setTimeout(() => {
      //   swiper?.autoplay?.start();
      // }, 2500);
      // return () => clearTimeout(timeoutId);
    }
  }, [swiper]);

  return (
    <article className="next-dates-carousel">
      <div className="next-dates-carousel__background-nexdate-wrapper">
        <Swiper {...configBG} spaceBetween={28}>
          {backgroundNextDates?.map((_) => (
            <SwiperSlide key={_}>
              <span className="next-dates-carousel__background-nexdate-wrapper__next-date">
                {`PRÓXIMAS FECHAS ●`}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {window?.innerWidth <= 600 ? (
        <div className="next-dates-carousel__mobile-wrapper">
          <div
            className={`next-dates-carousel__mobile ${
              nextDates?.length === 1 && "next-dates-carousel__mobile--center"
            }`}
          >
            {nextDates?.map((e, i) => (
              <div className="next-dates-carousel__item" key={e?.date + i}>
                <NextDatesCard
                  index={i}
                  date={e?.date}
                  flag={e?.flag}
                  city={e?.city}
                  country={e?.country}
                  show={e?.show}
                  link={e?.link}
                  availability={e?.availability}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Swiper
          {...config}
          className={nextDates?.length <= 4 && "next-dates-carousel__slider"}
        >
          {nextDates?.map((e, i) => (
            <SwiperSlide key={e?.date + i}>
              <div className="next-dates-carousel__item">
                <NextDatesCard
                  index={i}
                  date={e?.date}
                  flag={e?.flag}
                  city={e?.city}
                  country={e?.country}
                  show={e?.show}
                  link={e?.link}
                  availability={e?.availability}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </article>
  );
};

export default NextDatesCarousel;
