import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./polaroid_popup.scss";
import { formatDate } from "../../utils/format-date";
import background from "../../assets/papper.webp";
import device from "../../utils/device";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, EffectCards, Pagination, Navigation } from "swiper";
import Video from "../Video/Video";

const PolaroidPopup = ({ data, setData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const onClick = (id) => {
    const videoRef = document.getElementById("video");
    setSelectedId(id);
    videoRef?.pause();
  };
  const closeImagePopup = () => {
    const videoRef = document.getElementById("video");

    setSelectedId(null);
    videoRef?.play();
  };
  const configSwipperVideo = {
    modules: [Pagination, Navigation, Mousewheel],
    spaceBetween: 10,
    mousewheel: {
      enabled: true,
      sensitivity: 1,
    },
    navigation: window.innerWidth > 700,
    pagination: true,
  };
  return (
    <>
      <AnimatePresence>
        {data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="polaroid-popup--overlay"
          >
            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
              className="polaroid-popup--container"
            >
              <div
                className="polaroid-popup--overlay-close"
                onClick={() => setData(false)}
              />
              {data.polaroid?.map((image, i) => (
                <img
                  title={`Polaroid Bizarrap Show ${formatDate(data.date)} | ${
                    data.city
                  } - ${data?.country}`}
                  onClick={() => onClick(i)}
                  key={image + i}
                  className={`polaroid-popup__image-polaroid polaroid-popup__image-polaroid--${i}`}
                  width={`${Math.floor(
                    Math.random() *
                      ((device() ? 200 : 245) - (device() ? 110 : 150) + 1) +
                      (device() ? 110 : 150)
                  )}`}
                  src={image}
                  alt={`Polaroid Bizarrap Show ${formatDate(data.date)} | ${
                    data.city
                  } - ${data?.country}`}
                />
              ))}
              {data?.video &&
                (data.video.length === 1 ? (
                  <div className="polaroid-popup__video polaroid-popup__video">
                    <Video
                      light
                      videoProps={{
                        // controls: true,
                        src: data.video[0],
                        type: `video/${
                          data.video[0].split(".")[
                            data.video[0].split(".").length - 1
                          ]
                        }`,
                      }}
                    />
                  </div>
                ) : (
                  <Swiper
                    {...configSwipperVideo}
                    className="polaroid-popup__video polaroid-popup__video"
                  >
                    {data.video?.map((vid, i) => (
                      <SwiperSlide key={i}>
                        <Video
                          videoProps={{
                            // controls: true,
                            src: vid,
                            type: `video/${
                              vid.split(".")[vid.split(".").length - 1]
                            }`,
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ))}
              <div className="polaroid-popup__data-wrapper">
                <img
                  className="polaroid-popup__background"
                  src={background}
                  alt={`Bizarrap Show ${formatDate(data.date)}`}
                  title={`Bizarrap Show ${formatDate(data.date)} | ${
                    data.city
                  } - ${data?.country}`}
                />
                <div className="polaroid-popup__data-container">
                  <div className="polaroid-popup__date-wrapper">
                    <p className="polaroid-popup__date">
                      {formatDate(data.date)}
                    </p>
                  </div>
                  <h3
                    className="polaroid-popup__city"
                    title={`Bizarrap Show ${formatDate(data.date)} | ${
                      data.city
                    } - ${data?.country}`}
                  >
                    {data.city} - {data?.country}
                  </h3>
                </div>
                <button
                  title="Cerrar"
                  className="polaroid-popup__close"
                  onClick={() => setData(false)}
                >
                  X
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedId || selectedId === 0 ? (
        <div className="image-popup__overlay">
          <div
            className="image-popup__overlay-close"
            onClick={closeImagePopup}
          />
          <div>
            <Swiper
              initialSlide={selectedId}
              mousewheel={{
                enabled: true,
                sensitivity: 3,
              }}
              slidesPerView={"auto"}
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Mousewheel]}
              loop={true}
              className="image-popup__swiper-image"
            >
              {data.polaroid?.map((img, i) => (
                <SwiperSlide key={i} className="image-popup__image-wrapper">
                  <button
                    className="image-popup__close"
                    onClick={closeImagePopup}
                  >
                    X
                  </button>
                  <img
                    title={`Polaroid Bizarrap Show ${formatDate(data.date)} | ${
                      data.city
                    } - ${data?.country}`}
                    className="image-popup__image"
                    src={img}
                    alt={`Polaroid Bizarrap Show ${formatDate(data.date)} | ${
                      data.city
                    } - ${data?.country}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PolaroidPopup;
