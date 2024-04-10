import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import { useObserver } from '@/hooks';
import { ContactForm } from './ContactForm';
import linkedin from '@/assets/icons/linkedin.svg';
import github from '@/assets/icons/github.svg';
import gmail from '@/assets/icons/gmail.svg';
import telegram from '@/assets/icons/telegram.svg';
import cv from '@/assets/icons/cv.svg';

export interface ContactInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: React.FC<ContactInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('contact');
  }, [isIntersecting]);

  return (
    <>
      <div className="contact" ref={setReference} id="contact">
        <div>
          <h2
            className={`text-primary--sub contact__title contact__title--${
              isIntersecting ? 'in' : 'out'
            }`}
          >
            Contáctame
          </h2>
        </div>
        <ContactForm isIntersecting={isIntersecting} />
        <div className="contact__links">
          <a
            className={`contact__links__first--${
              isIntersecting ? 'in' : 'out'
            }`}
            href="https://www.linkedin.com/in/leandro-rebequi-dev/"
            target="_blank"
          >
            <img
              className="contact__links__icon"
              src={linkedin}
              alt="linkedin"
            />
            <span className="contact__links__text">LinkedIn</span>
          </a>
          <a
            className={`contact__links__second--${
              isIntersecting ? 'in' : 'out'
            }`}
            href="https://github.com/rebequileandro1398"
            target="_blank"
          >
            <img className="contact__links__icon" src={github} alt="github" />
            <span className="contact__links__text">GitHub</span>
          </a>
          <a
            className={`contact__links__third--${
              isIntersecting ? 'in' : 'out'
            }`}
            href="mailto:rebequileandro@gmail.com"
            target="_blank"
          >
            <img className="contact__links__icon" src={gmail} alt="gamil" />
            <span className="contact__links__text">Gmail</span>
          </a>
          <a
            className={`contact__links__fourth--${
              isIntersecting ? 'in' : 'out'
            }`}
            href="https://t.me/leandro_rebequi"
            target="_blank"
          >
            <img
              className="contact__links__icon"
              src={telegram}
              alt="telegram"
            />
            <span className="contact__links__text">Telegram</span>
          </a>
          <a
            className={`contact__links__fifth--${
              isIntersecting ? 'in' : 'out'
            }`}
            href="https://t.me/leandro_rebequi"
            target="_blank"
          >
            <img className="contact__links__icon" src={cv} alt="telegram" />
            <span className="contact__links__text">CV</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
