import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/lottie-files/icons/loading.json";
export const Landing = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate("/app");
  //     }, 4000);
  //   });
  return (
    <div className="landing">
      <Lottie animationData={loading} className="navbar__icon" />
    </div>
  );
};
