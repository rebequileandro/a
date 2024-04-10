import "./select-date.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Navigation, Pagination } from "swiper";
import C2022 from "../../components/Calendar/2022/2022";
import C2023 from "../../components/Calendar/2023/2023";
import { useNavigate } from "react-router-dom";
import routes from "../../models/routes";
import BackButton from "../../components/BackButtom/BackButton";
import { useEffect, useRef, useState } from "react";
import sunglasses from "../../assets/sunglasses.webp";
import { useAppContext } from "../../context/AppProvider";
import { getAllRecap } from "../../services/recap.services";
import { ACTION_TYPE } from "../../models/action.type.models";
import VideoPopup from "../../components/VideoPopup/VideoPopup";
import arrow from "../../assets/flecha1.png";
const SelectDate = () => {
  const navigate = useNavigate();
  const swiperRef = useRef();
  const polaroidRef = useRef();
  const [selectedId, setSelectedId] = useState(null);

  const { recap, dispatch } = useAppContext();
  const handleClick = (y, m) => {
    navigate(`${routes.EXCLUSIVE_MATERIAL}/${m}-${y}`);
  };

  const polaroidImages = [
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957500869636512_3.webp",
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957639982143858_5.webp",
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957056260558727_1.webp",
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957499426176296_1.webp",
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957514320954506_1.webp",
    "https://bzrpbucket.s3.us-east-2.amazonaws.com/16957515760145321_3.webp",
  ];

  const getData = async () => {
    const result = await getAllRecap();
    dispatch({
      type: ACTION_TYPE.RECAP,
      value: result,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let intervalId;
    let classNameAnimation = "select-date__easter-egg-btn__image--shot";
    let classNameAnimationZoom = "select-date__easter-egg-btn__image--zoom";

    if (polaroidRef.current) {
      intervalId = setInterval(() => {
        polaroidRef.current.classList.remove(classNameAnimation);
        setTimeout(() => {
          polaroidRef.current.classList.add(classNameAnimation);
        }, 1000);
      }, 8000);

      polaroidRef.current.addEventListener("click", () => {
        clearInterval(intervalId);
        polaroidRef.current.classList.remove(classNameAnimation);
        polaroidRef.current.classList.add(classNameAnimationZoom);
        setSelectedId(true);
      });
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [polaroidRef.current, selectedId]);

  const isCloseVideoPopup = () => {
    polaroidRef.current.classList.add(
      "select-date__easter-egg-btn__image--zoom-out"
    );
    setSelectedId(false);
    setTimeout(() => {
      polaroidRef.current.classList.remove(
        "select-date__easter-egg-btn__image--zoom"
      );
      polaroidRef.current.classList.remove(
        "select-date__easter-egg-btn__image--zoom-out"
      );
    }, 1000);
  };

  return (
    <section className="select-date">
      <BackButton onClick={() => navigate(routes.HOME)} />

      <img
        title="Gafas Bizarrap"
        className="select-date__sunglasses"
        src={sunglasses}
        alt="Gafas Bizarrap"
      />
      {polaroidImages.map((image, i) => (
        <img
          key={image}
          src={image}
          alt="bizarrap polaroid"
          className={`select-date__polaroid-image select-date__polaroid-image--${i}`}
        />
      ))}
      <div className="select-date__easter-egg-btn">
        <img
          ref={polaroidRef}
          key={21}
          src="https://bzrpbucket.s3.us-east-2.amazonaws.com/16957509459791253_1.webp"
          alt="bizarrap polaroid"
          className="select-date__easter-egg-btn__image select-date__easter-egg-btn__image--shot"
        />
      </div>
      {Object.keys(recap).length ? (
        <Swiper
          mousewheel={{
            enabled: true,
            sensitivity: 3,
          }}
          className="select-month-tour"
          effect={"cards"}
          modules={[EffectCards, Mousewheel, Pagination, Navigation]}
          navigation={window.innerWidth > 820}
          pagination
          ref={swiperRef}
        >
          <SwiperSlide>
            <C2022
              onClick={handleClick}
              imageOnClick={() => swiperRef.current.swiper.slidePrev()}
            />
          </SwiperSlide>
          <SwiperSlide>
            <C2023
              onClick={handleClick}
              imageOnClick={() => swiperRef.current.swiper.slideNext()}
            />
          </SwiperSlide>
        </Swiper>
      ) : null}
      <button className="select-month-tour__prev-element">
        <img src={arrow} alt="prev element" />
      </button>
      <button className="select-month-tour__nex-element">
        <img src={arrow} alt="nex element" />
      </button>
      <VideoPopup isOpen={selectedId} IsClose={isCloseVideoPopup} />
    </section>
  );
};

export default SelectDate;
