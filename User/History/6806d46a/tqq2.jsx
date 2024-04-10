import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

export const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/app");
    }, 3500);
  });
  return (
    <div className="landing">
      <Lottie
        animationData={homeAnimation}
        loop={false}
        className="navbar__icon"
      />
    </div>
  );
};
