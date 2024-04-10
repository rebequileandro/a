import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LoginCarousel.scss';
import { useState } from 'react';
import getSlides from './getSlides';
import LoginSlide from './LoginSlide/LoginSlide';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = getSlides();

function LoginCarousel({ setHasSeenCarousel }) {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = () => setCurrentSlide(swiper.activeIndex);
  const handleEmpezar = (e) => {
    e.preventDefault();
    setHasSeenCarousel(true);
  };

  let siguienteStyles = {};
  if (currentSlide === 2) siguienteStyles = { display: 'none' };

  return (
    <div key="login-carousel" className="login-carousel">
      <Swiper
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
    </div>
  );
}

export default LoginCarousel;
