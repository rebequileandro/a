import React from "react";
import Lottie from "lottie-react";
import home from "../assets/icons/nav/home-static-icon.svg";
import aboutMe from "../assets/icons/nav/about-me-static-icon.svg";
import homeAnimation from "../assets/lottie-files/icons/nav/home-gradient-icon.json";
import aboutMeAnimation from "../assets/lottie-files/icons/nav/about-me-gradient-icon.json";
import proyect from "../assets/lottie-files/icons/nav/portfolio-gradient-icon.json";
import contact from "../assets/lottie-files/icons/nav/contact-gradient-icon.json";
import { useInView } from "react-intersection-observer";

export const Nav = ({ inView }) => {
  console.log(inView);
  return (
    <nav className="navbar">
      <a href="#home">
        {inView === "home" ? (
          <Lottie animationData={homeAnimation} loop={false} />
        ) : (
          <img className="navbar__static-icon" src={home} alt="home" />
        )}
      </a>
      <a href="#about-me">
        {inView === "about-me" ? (
          <Lottie animationData={aboutMeAnimation} loop={false} />
        ) : (
          <img className="navbar__static-icon" src={aboutMe} alt="about me" />
        )}
      </a>
      <a href="#proyects">
        <Lottie animationData={proyect} loop={false} />
      </a>
      <a href="#contact">
        <Lottie animationData={contact} loop={false} />
      </a>
    </nav>
  );
};
