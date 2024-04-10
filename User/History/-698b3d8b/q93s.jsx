import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import LoginSlide from "../LoginSlide/LoginSlide";
import getSlides from "./getSlides";

import "./LoginCarousel.scss";
import { useEffect, useState } from "react";
import { logInUser } from "../../../redux/store/slices/user";
import { useDispatch } from "react-redux";
import axios from "axios";
const { REACT_APP_API }= process.env
const slides = getSlides();

function LoginCarousel({ setShowLogin }) {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch()
  const handleSlideChange = () => setCurrentSlide(swiper.activeIndex);
  const handleEmpezar = (e) => {
    e.preventDefault();
    setShowLogin(true);
  };

  let siguienteStyles = {};
  if (currentSlide === 2) siguienteStyles = { display: "none" };

  const getUser = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API}/auth/login/success`);
      console.log(response);
      dispatch(logInUser(response.user));
    } catch (error) {
      console.log(error)
    }
  };
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <>
      <Swiper
        className="login-carousel"
        modules={[Navigation, Pagination]}
        pagination
        navigation={{ nextEl: ".siguiente" }}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <LoginSlide slide={slide} />
          </SwiperSlide>
        ))}
        {currentSlide === 2 && (
          <a href="/" className="empezar" onClick={handleEmpezar}>
            Empezar
          </a>
        )}
        <button className="siguiente" style={siguienteStyles}>
          Siguiente
        </button>
      </Swiper>
    </>
  );
}

export default LoginCarousel;
