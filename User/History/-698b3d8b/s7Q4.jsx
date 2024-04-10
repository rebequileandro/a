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
    fetch(`${REACT_APP_API}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject);
        dispatch(logInUser(resObject.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
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
