import React from "react";
import Lottie from "lottie-react";
import home from "../assets/lottie-files/icons/gradient/home-gradient-icon.json";
import aboutMe from "../assets/lottie-files/icons/gradient/about-me-gradient-icon.json";
import proyect from "../assets/lottie-files/icons/gradient/portfolio-gradient-icon.json";
import contact from "../assets/lottie-files/icons/gradient/contact-gradient-icon.json";
import { useLocation, useSearchParams } from "react-router-dom";

export const Nav = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("#");
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("#home"));
  return (
    <div className="navbar">
      <a href="#home">
        <Lottie animationData={home} loop={false} />
      </a>
      <a href="#about">
        <Lottie animationData={aboutMe} loop={false} />
      </a>
      <a href="#proyects">
        <Lottie animationData={proyect} loop={false} />
      </a>
      <a href="#contact">
        <Lottie animationData={contact} loop={false} />
      </a>
    </div>
  );
};
