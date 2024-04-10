import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
import Loading from "../Loading/Loading";
const Landing = () => {
  const containerRef = useRef();
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6500);
  // }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("load", () => {
        console.log("cargo");
      });
    }
  }, [containerRef.current]);

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="landing" ref={containerRef}>
        <div className="landing__content">
          <h1 className="heading-primary">Menú digital</h1>
          <img src={line} alt="line" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Landing;
