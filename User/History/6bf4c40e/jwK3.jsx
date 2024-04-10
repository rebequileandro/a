import { useEffect, useRef } from "react";
import "./multimedia-viewer.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MultimediaViewer = ({ data, setData }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (data) {
      document.body.style.overflowY = "hidden";
      popupRef.current.classList.add("multimedia-viewer--show");
      popupRef.current.classList.remove("multimedia-viewer--hidden");
    } else {
      document.body.style.overflowY = "scroll";
      popupRef.current.classList.add("multimedia-viewer--hidden");
      popupRef.current.classList.remove("multimedia-viewer--show");
    }
  }, [data]);

  return (
    <div ref={popupRef} className="multimedia-viewer">
      <div
        className="multimedia-viewer__close-overlay"
        onClick={() => setData(null)}
      />
      <div className="multimedia-viewer__container">
        <button
          className="multimedia-viewer__container__close"
          onClick={() => setData(null)}
        >
          X
        </button>

        <Swiper
          className="multimedia-viewer__container__swipper-container"
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation]}
          navigation
        >
          {data?.images.map((img, i) => (
            <SwiperSlide key={img + i}>
              <div className="multimedia-viewer__container___multimedia-container">
                <img
                  className="multimedia-viewer__container___multimedia-container__image"
                  src={img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MultimediaViewer;
