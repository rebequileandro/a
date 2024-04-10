import React from 'react';
import './styles/Tabbar.scss';
import Lottie from 'react-lottie';
import { Link, NavLink } from 'react-router-dom';
import homeAnimation from '@/assets/lottie-files/tabbar/home-gradient-icon.json';
import aboutMeAnimation from '@/assets/lottie-files/tabbar/about-me-gradient-icon.json';
import projectsAnimation from '@/assets/lottie-files/tabbar/portfolio-gradient-icon.json';
import contactAnimation from '@/assets/lottie-files/tabbar/contact-gradient-icon.json';
import home from '@/assets/icons/tabbar/home-static-icon.svg';
import aboutMe from '@/assets/icons/tabbar/about-me-static-icon.svg';
import projects from '@/assets/icons/tabbar/porfolio-static-icon.svg';
import contact from '@/assets/icons/tabbar/contact-static-icon.svg';

export interface TabbarInterface {
  inView: string;
}

const Tabbar: React.FC<TabbarInterface> = ({ inView }) => {
  const lottieOptions = (data: {}) => {
    return {
      loop: false,
      autoplay: true,
      animationData: data
    };
  };
  return (
    <nav className="tabbar">
      <NavLink to="#home)">
        <div className="tabbar__icon-container">
          {inView === 'home' ? (
            <Lottie options={lottieOptions(homeAnimation)} />
          ) : (
            <img className="tabbar__icon" src={home} alt="home" />
          )}
        </div>
      </NavLink>
      <NavLink to="#about-me)">
        <div className="tabbar__icon-container">
          {inView === 'about-me' ? (
            <Lottie options={lottieOptions(aboutMeAnimation)} />
          ) : (
            <img className="tabbar__icon" src={aboutMe} alt="about me" />
          )}
        </div>
      </NavLink>
      <Link to="#projects)">
        <div className="tabbar__icon-container">
          {inView === 'projects' ? (
            <Lottie options={lottieOptions(projectsAnimation)} />
          ) : (
            <img className="tabbar__icon" src={projects} alt="project" />
          )}
        </div>
      </Link>
      <Link to="#contact)">
        <div className="tabbar__icon-container">
          {inView === 'contact' ? (
            <Lottie options={lottieOptions(contactAnimation)} />
          ) : (
            <img className="tabbar__icon" src={contact} alt="contact" />
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Tabbar;
