import { Input, TextArea } from '@/components';
import React, { useState } from 'react';
import './styles/ContactForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
export interface PopupFormInterface {
  isIntersecting: boolean;
}

const ContactForm: React.FC<PopupFormInterface> = ({ isIntersecting }) => {
  const initialState = {
    user_name: '',
    user_email: '',
    message: ''
  };
  const [input, setInput] = useState(initialState);

  const handleChange = (e: any) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target?.name]: e.target?.value
    });
  };

  const notify = () => {
    console.log('entro');

    toast('Wow so easy!');
  };
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target;
    emailjs
      .sendForm(
        'leandro_rebequi1398',
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            notify();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="contact-form">
      <ToastContainer />
      <form
        className="contact-form__form"
        onSubmit={sendEmail}
        autoComplete="false"
      >
        <div
          className={`contact-form__first-input--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          <Input
            type="text"
            placeHolder="Nombre"
            name="user_name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          className={`contact-form__second-input--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          <Input
            type="email"
            placeHolder="Email"
            name="user_email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          className={`contact-form__text-area--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          <TextArea name="message" placeHolder="Mensaje" />
        </div>
        <div
          className={`contact-form__buttons contact-form__buttons--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          <button
            className="border-gradient contact-form__buttons-btn"
            type="reset"
          >
            Cancelar
          </button>
          <button className="btn contact-form__buttons-btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
