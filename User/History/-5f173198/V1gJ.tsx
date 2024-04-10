import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { useObserver } from '@/hooks';
import { Input, TextArea } from '@/components';
import { PopupForm } from './PopupForm';

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
      <div className="contact" ref={setReference} id="contact"></div>;
      <PopupForm />
    </>
  );
};

export default Contact;
