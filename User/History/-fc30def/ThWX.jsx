import React, { useState } from "react";
import "./grammy.scss";
import BackButton from "../../components/BackButtom/BackButton";
import polaroidGrammy1 from "../../assets/Grammy/polaroid-grammy-1.webp";
import polaroidGrammy2 from "../../assets/Grammy/polaroid-grammy-2.webp";
import polaroidGrammy3 from "../../assets/Grammy/polaroid-grammy-3.webp";
import polaroidGrammy4 from "../../assets/Grammy/polaroid-grammy-4.webp";
import polaroidGrammy5 from "../../assets/Grammy/polaroid-grammy-5.webp";
import polaroidGrammy6 from "../../assets/Grammy/polaroid-grammy-6.webp";
import polaroidGrammy7 from "../../assets/Grammy/polaroid-grammy-7.webp";
import polaroidGrammy8 from "../../assets/Grammy/polaroid-grammy-8.webp";

import grammy1 from "../../assets/Grammy/grammy1.webp";
import grammy2 from "../../assets/Grammy/grammy2.webp";
import grammy3 from "../../assets/Grammy/grammy3.webp";

import recorder from "../../assets/Grammy/recorder.webp";

import papper from "../../assets/Grammy/grammy-pappers.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, EffectCards } from "swiper";
import logo from "../../assets/Grammy/grammy-logo-bzrp.webp";
import { Helmet } from "react-helmet-async";
import credential from "../../assets/Grammy/credencial.webp";
import Video from "../../components/Video/Video";
import { useNavigate } from "react-router-dom";
import routes from "../../models/routes";

const Grammy = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [openVideoRecap, setOpenVideoRecap] = useState(null);
  const [openVideoShow, setOpenVideoShow] = useState(null);

  const [polaroidLoad1, setPolaroidLoad1] = useState(null);
  const [polaroidLoad2, setPolaroidLoad2] = useState(null);
  const [polaroidLoad3, setPolaroidLoad3] = useState(null);
  const [polaroidLoad4, setPolaroidLoad4] = useState(null);

  const navigate = useNavigate();

  const [transitionVideo, settransitionVideo] = useState(null);

  const polaroidGrammy = [
    polaroidGrammy1,
    polaroidGrammy2,
    polaroidGrammy3,
    polaroidGrammy4,
    polaroidGrammy5,
    polaroidGrammy6,
    polaroidGrammy7,
    polaroidGrammy8,
  ];
  const handleClickVideo = () => {
    settransitionVideo(true);
    setTimeout(() => {
      settransitionVideo(null);
      setOpenVideoRecap(true);
    }, 4500);
  };
  return (
    <>
      <Helmet>
        <title>Grammy | Bizarrap</title>
        <meta name="description" content="Bizarrap Premios Grammy 2023" />
      </Helmet>
      <div className="grammy layout-primary">
        <div onClick={() => handleClickVideo()} className="grammy__credential">
          <img src={credential} alt="credencial grammy bizarrap" />
        </div>
        <div
          onClick={() => setOpenVideoShow(true)}
          className="grammy__recorder"
        >
          <img src={recorder} alt="grabadora" />
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
              onLoad={() => setPolaroidLoad4(true)}
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--3"
            onClick={() => setSelectedId(2)}
          >
            <img
              className={`grammy__polaroid-img grammy__polaroid-img--3 ${
                polaroidLoad3 && "grammy__polaroid-img--3--show"
              }`}
              src={polaroidGrammy3}
              alt="polaroid-grammy"
              onLoad={() => setPolaroidLoad3(true)}
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--2"
            onClick={() => setSelectedId(1)}
          >
            <img
              className={`grammy__polaroid-img grammy__polaroid-img--2 ${
                polaroidLoad2 && "grammy__polaroid-img--2--show"
              }`}
              src={polaroidGrammy2}
              alt="polaroid-grammy"
              onLoad={() => setPolaroidLoad2(true)}
            />
          </div>
          <div
            className="grammy__polaroid-img-wrapper grammy__polaroid-img-wrapper--1"
            onClick={() => setSelectedId(0)}
          >
            <img
              className={`grammy__polaroid-img grammy__polaroid-img--1 ${
                polaroidLoad1 && "grammy__polaroid-img--1--show"
              }`}
              src={polaroidGrammy1}
              alt="polaroid-grammy"
              onLoad={() => setPolaroidLoad1(true)}
            />
          </div>
        </div>
        <BackButton onClick={() => navigate(routes.HOME)} />
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
      {openVideoRecap && (
        <div className="grammy-video__overlay">
          {" "}
          <div
            className="grammy-video__overlay-close"
            onClick={() => setOpenVideoRecap(null)}
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
      {openVideoShow && (
        <div className="grammy-video__overlay">
          {" "}
          <div
            className="grammy-video__overlay-close"
            onClick={() => setOpenVideoShow(null)}
          />
          <div className="grammy-video__video-container">
            <Video
              light
              videoProps={{
                src: "https://bzrpbucket.s3.us-east-2.amazonaws.com/Bizarrap_MiloJ_Shakira+HORIZONTAL+v7.mp4",
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
