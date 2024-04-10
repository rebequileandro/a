import React, { useEffect, useRef } from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
const Landing = () => {
  const containerRef = useRef();
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("load", () => {
        console.log("cargo");
      });
    }
  }, [containerRef.current]);

  return (
    <div className="landing" ref={containerRef}>
      <div className="landing__content">
        <h1 className="heading-primary">Menú digital</h1>
        <img src={line} alt="line" loading="lazy" />
      </div>
    </div>
  );
};

export default Landing;
