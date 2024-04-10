import { useState } from "react";
import "./lading.scss";
import "swiper/css";
import "swiper/css/pagination";
import { dataLanding } from "./data-landing";
import { useNavigate } from "react-router-dom";
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
    step === 0 && ladingRef.current.classList.add("background-primary");
    step < 2 && setStep(step + 1);
  };
  const handleSlideChange = () => {
    setCurrentSlide(swiper.activeIndex);
    setStep(swiper.activeIndex + 1);
  };
  return (
    <div className="landing" ref={ladingRef}>
      {step === 0 ? (
        <>
          <div className="landing__image-wrapper">
            <img
              src={dataLanding[step]?.image}
              className="landing__image"
              alt="odontologo"
            />
          </div>
          <div className="landing__info-wrapper">
            {dataLanding[step]?.title}
            <p className="landing__description">
              {dataLanding[step]?.description}
            </p>
            <button onClick={handleClick} className="btn btn--primary">
              {dataLanding[step]?.button}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="landing__swipper-wrapper">
            <Swiper
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
              navigation={{ nextEl: ".btn" }}
              className="mySwiper"
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
            >
              {dataLanding.slice(1).map((e) => (
                <SwiperSlide key={e.title}>
                  <img
                    src={e?.image}
                    alt="odontologo"
                    className="landing__image"
                  />
                  {e?.title}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="landing__info-wrapper">
            <button onClick={handleClick} className="btn btn--secondary">
              {dataLanding[step]?.button}
            </button>
          </div>
        </>
      )}
      {/* {currentSlide === 1 ? (
        <button onClick={() => navigate(ROUTES.LOGIN)}>com</button>
      ) : ( */}

      {/* )} */}
    </div>
  );
};

export default Landing;
