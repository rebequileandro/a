import { useState } from "react";
import "./lading.scss";
import "swiper/css";
import "swiper/css/pagination";
import { dataLanding } from "./data-landing";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "models/routes.models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

const Landing = () => {
  const ladingRef = useRef();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handleClick = () => {
    step <= 1 && setStep(step + 1);
  };
  const handleSlideChange = () => {
    setCurrentSlide(swiper.activeIndex);
    setStep(swiper.activeIndex + 1);
  };

  if (step === 0) {
    return (
      <div className="landing background-primary">
        <div className="landing__image-wrapper">
          <img
            src={dataLanding[step]?.image}
            className="landing__image--over-size"
            alt="odontologo"
          />
          <div className="landing__elipse" />
        </div>
        <div className="landing__info-wrapper">
          {dataLanding[step]?.title}
          {dataLanding[step]?.description}

          <button
            onClick={handleClick}
            className="btn btn--primary landing__btn"
          >
            {dataLanding[step]?.button}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="landing">
        <div className="landing__swipper-wrapper">
          <Swiper
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={{ nextEl: ".nextel" }}
            className="mySwiper"
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
          >
            {dataLanding.slice(1).map((e, i) => (
              <SwiperSlide key={e.title + i}>
                <img
                  src={e?.image}
                  alt="odontologo"
                  className="landing__image"
                />
                <div className="landing__text-wrapper">{e?.title}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="landing__info-wrapper">
          {step === 2 ? (
            <Link className="btn btn--secondary landing__btn" to={ROUTES.LOGIN}>
              {dataLanding[step]?.button}
            </Link>
          ) : (
            <button
              className="btn btn--secondary landing__btn nextel"
              onClick={() => swiper.slideNext()}
            >
              {dataLanding[step]?.button}
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default Landing;
