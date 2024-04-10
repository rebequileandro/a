import React, { useState } from "react";
import "./grammy.scss";
import BackButton from "../../components/BackButtom/BackButton";
import polaroidGrammy1 from "../../assets/Grammy/polaroid-grammy-1.webp";
import polaroidGrammy2 from "../../assets/Grammy/polaroid-grammy-2.webp";
import polaroidGrammy3 from "../../assets/Grammy/polaroid-grammy-3.webp";
import polaroidGrammy4 from "../../assets/Grammy/polaroid-grammy-4.webp";
import grammy1 from "../../assets/Grammy/grammy1.png";
import grammy2 from "../../assets/Grammy/grammy2.png";
import grammy3 from "../../assets/Grammy/grammy3.png";
import papper from "../../assets/Grammy/grammy-pappers.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, EffectCards } from "swiper";
import logo from "../../assets/Grammy/grammy-logo-bzrp.png";
import { Helmet } from "react-helmet-async";
import credential from "../../assets/Grammy/credencial.png";
import Video from "../../components/Video/Video";
const Grammy = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);
  const [transitionVideo, settransitionVideo] = useState(null);

  const polaroidGrammy = [
    polaroidGrammy1,
    polaroidGrammy2,
    polaroidGrammy3,
    polaroidGrammy4,
  ];
  const handleClickVideo = () => {
    settransitionVideo(true);
    // setTimeout(() => {
    //   settransitionVideo(null);
    //   setOpenVideo(true);
    // }, 4800);
  };
  return (
    <>
      <Helmet>
        <title>Grammy | Bizarrap</title>
        <meta name="description" content="Bizarrap Premios Grammy 2023" />
      </Helmet>
      <div className="grammy layout-primary">
        <div onClick={() => handleClickVideo()} className="grammy__credential">
          <img src={credential} alt="credential grammy bizarrap" />
        </div>
        <img src={logo} alt="logo bizarrap grammy" className="grammy__logo" />

        <img
          src={papper}
          alt="Dibujos de bizarrap"
          className="grammy__pappers"
        />
        <img src={grammy3} alt="grammy" className="grammy__1" />
        <img src={grammy2} alt="grammy" className="grammy__2" />
        <img src={grammy1} alt="grammy" className="grammy__3" />

        <div className="grammy__polaroid-wrapper">
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--4"
            onClick={() => setSelectedId(3)}
          >
            <img
              className="grammy__polaroid-img grammy__polaroid-img--4"
              src={polaroidGrammy4}
              alt="polaroid-grammy"
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--3"
            onClick={() => setSelectedId(2)}
          >
            <img
              className="grammy__polaroid-img grammy__polaroid-img--3"
              src={polaroidGrammy3}
              alt="polaroid-grammy"
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--2"
            onClick={() => setSelectedId(1)}
          >
            <img
              className="grammy__polaroid-img grammy__polaroid-img--2"
              src={polaroidGrammy2}
              alt="polaroid-grammy"
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--1"
            onClick={() => setSelectedId(0)}
          >
            <img
              className="grammy__polaroid-img grammy__polaroid-img--1"
              src={polaroidGrammy1}
              alt="polaroid-grammy"
            />
          </div>
        </div>
        <BackButton />
      </div>
      {transitionVideo && <div className="transition-video-grammy"></div>}
      {selectedId || selectedId === 0 ? (
        <div className="image-popup__overlay">
          <div
            className="image-popup__overlay-close"
            onClick={() => setSelectedId(null)}
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
              {polaroidGrammy.map((img, i) => (
                <SwiperSlide key={i} className="image-popup__image-wrapper">
                  <button
                    className="image-popup__close"
                    onClick={() => setSelectedId(null)}
                  >
                    X
                  </button>
                  <img
                    title="Polaroid Bizarrap Grammy 2023"
                    className="image-popup__image"
                    src={img}
                    alt="Polaroid Bizarrap Grammy 2023"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : null}
      {openVideo && (
        <div className="grammy-video__overlay">
          {" "}
          <div
            className="grammy-video__overlay-close"
            onClick={() => setOpenVideo(null)}
          />
          <div className="grammy-video__video-container">
            <Video
              light
              videoProps={{
                src: "https://bzrpbucket.s3.us-east-2.amazonaws.com/BZRP+LG+Recap+Draft+V5.mp4",
                autoPlay: true,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Grammy;
