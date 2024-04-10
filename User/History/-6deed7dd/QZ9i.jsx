import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import imageOne from "../../assets/image-1.webp";
import imageTwo from "../../assets/image-2.webp";
import Loading from "../Loading/Loading";
import arrow from "../../assets/arrow.svg";
const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="landing">
        <div className="landing__content-top">
          <div className="landing__image-top">
            <img src={imageOne} alt="parrilla" />
          </div>
          <button className="landing__btn">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="landing__content">
          <div>
            <h1 className="heading-secondary">Parrilla</h1>
            <h1 className="heading-secondary">Del Tano</h1>
          </div>
        </div>
        <h2 className="heading-primary landing__title">Menú</h2>
        <div className="landing__image-bottom">
          <img src={imageTwo} alt="parrilla" />
        </div>
      </div>
    </>
  );
};

export default Landing;
