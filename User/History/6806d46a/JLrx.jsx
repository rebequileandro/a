import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/lottie-files/icons/loading.json";

const Landing = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/(");
  //   }, 6000);
  // });
  return (
    <div className="landing">
      <Lottie animationData={loading} className="landing__icon" />
    </div>
  );
};
export default Landing;
