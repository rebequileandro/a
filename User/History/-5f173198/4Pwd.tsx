import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import { useObserver } from '@/hooks';
import { ContactForm } from './ContactForm';
import linkedin from '@/assets/icons/linkedin.svg';
import github from '@/assets/icons/github.svg';
import gmail from '@/assets/icons/gmail.svg';
import telegram from '@/assets/icons/telegram.svg';

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
          <h2 className="text-primary--sub contact__title">Contáctame</h2>
        </div>
        <ContactForm />
        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/leandro-rebequi-dev/"
            target="_blank"
          >
            <img
              className="contact__links__icon"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/rebequileandro1398" target="_blank">
            <img className="contact__links__icon" src={github} alt="github" />
          </a>
          <a href="mailto:rebequileandro@gmail.com" target="_blank">
            <img className="contact__links__icon" src={gmail} alt="gamil" />
          </a>
          <a href="https://telegram.me/1224624669" target="_blank">
            <img
              className="contact__links__icon"
              src={telegram}
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
