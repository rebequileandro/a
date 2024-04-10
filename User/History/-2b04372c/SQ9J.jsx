import "./works.scss";
import { useEffect, useRef, useState } from "react";
import { useObserver } from "hooks/useObserver";
import dots from "assets/dots2.svg";
import ringSlice from "assets/slice-ring2.svg";
import ringSlice3 from "assets/slice-ring3.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import worksData from "./works.data";
import MultimediaViewer from "components/MultimediaViewer/MultimediaViewer";

const Works = ({ setInView }) => {
  const swiperRef = useRef(null);
  const [dataPopup, setDataPopup] = useState(null);
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#trabajos");
  }, [isIntersecting]);

  useEffect(() => {
    if (swiperRef.current) {
      if (dataPopup) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [dataPopup]);
  return (
    <>
      <section id="trabajos" className="works" ref={setReference}>
        <article className="works__article">
          <img className="works__ring" src={ringSlice} alt="" />
          <div className="works__title-container">
            <img className="works__dots" src={dots} alt="" />
            <h2 className="works__title">TRABAJOS</h2>
          </div>
          <div className="works__frame-wrapper">
            <iframe
              title="Demo reel"
              className="works__demo-reel"
              src="https://player.vimeo.com/video/453662718?portrait=false&title=false&byline=false&dnt=false"
              frameborder="0"
              allow="fullscreen;"
              allowfullscreen
            ></iframe>
          </div>
        </article>
        <article className="works__article">
          <img className="works__ring3" src={ringSlice3} alt="" />
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={window.innerWidth < 820 ? 1 : 2}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            className="mySwiper"
            speed={2000}
            autoplay={{
              delay: 2500,
            }}
            loop
          >
            {worksData?.map((e, i) => (
              <SwiperSlide key={e.title + i} className="works-swiper-slide">
                <div
                  className="works__carousel-slide"
                  onClick={() => setDataPopup(e)}
                >
                  <img
                    src={e?.portada}
                    alt={e.title}
                    className="works__carousel-slide__image"
                    loading="lazy"
                  />
                  <div className="works__carousel-slide__data-container">
                    <h3 className="works__carousel-slide__data-container__title">
                      {e?.title}
                    </h3>
                    <span className="works__carousel-slide__data-container__sub-title">
                      {e?.subTitle}
                    </span>
                    <p className="">{e?.descriptio}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
      <MultimediaViewer data={dataPopup} setData={setDataPopup} />
    </>
  );
};

export default Works;
