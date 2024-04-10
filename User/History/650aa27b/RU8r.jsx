import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LoginCarousel.scss';
import { useState } from 'react';
import getSlides from './getSlides';
import LoginSlide from '../LoginSlide/LoginSlide';
const slides = getSlides();

function LoginCarousel({ setShowLogin }) {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = () => setCurrentSlide(swiper.activeIndex);
  const handleEmpezar = (e) => {
    e.preventDefault();
    setShowLogin(true);
  };

  let siguienteStyles = {};
  if (currentSlide === 2) siguienteStyles = { display: 'none' };

  return (
    <>
      <Swiper
        className="login-carousel"
        modules={[Navigation, Pagination]}
        pagination
        navigation={{ nextEl: '.siguiente' }}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
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
