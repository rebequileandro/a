import React from 'react';
import './styles/Tabbar.scss';
import Lottie from 'react-lottie';
import { HashLink } from 'react-router-hash-link';
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
      <HashLink smooth to="#home)">
        <div className="tabbar__icon-container">
          {inView === 'home' ? (
            <Lottie options={lottieOptions(homeAnimation)} />
          ) : (
            <img className="tabbar__icon" src={home} alt="home" />
          )}
        </div>
      </HashLink>
      <HashLink smooth to="#about-me)">
        <div className="tabbar__icon-container">
          {inView === 'about-me' ? (
            <Lottie options={lottieOptions(aboutMeAnimation)} />
          ) : (
            <img className="tabbar__icon" src={aboutMe} alt="about me" />
          )}
        </div>
      </HashLink>
      <HashLink to="#projects)">
        <div className="tabbar__icon-container">
          {inView === 'projects' ? (
            <Lottie options={lottieOptions(projectsAnimation)} />
          ) : (
            <img className="tabbar__icon" src={projects} alt="project" />
          )}
        </div>
      </HashLink>
      <HashLink to="#contact)">
        <div className="tabbar__icon-container">
          {inView === 'contact' ? (
            <Lottie options={lottieOptions(contactAnimation)} />
          ) : (
            <img className="tabbar__icon" src={contact} alt="contact" />
          )}
        </div>
      </HashLink>
    </nav>
  );
};

export default Tabbar;
