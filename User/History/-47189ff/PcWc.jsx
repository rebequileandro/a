import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import line from "../../assets/line.svg";
import Loading from "../Loading/Loading";
const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      <div className="landing">
        <div className="landing__content">
          <h1 className="heading-primary">Menú digital</h1>
          <img src={line} alt="line" loading="lazy" />
        </div>
        {loading ? <Loading /> : null}
      </div>
    </>
  );
};

export default Landing;
