import './ContactUs.scss';

import Lottie from 'lottie-react';

import loadingAnimation from '../../../../assets/loading.json';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Header } from '../../../../components/global/Header/Header';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import { getCurrentUser } from '../../../../redux/slices/global/user';

export default function ContactUs() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const currentUser = useSelector(getCurrentUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject) {
      setSubjectError('Por favor ingrese un asunto');
      return;
    }

    if (!message) {
      setError('Por favor ingrese un mensaje');
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const rawResponse = await fetch(
          process.env.REACT_APP_API + '/partyuser/support/add',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nombre: currentUser.name,
              idUser: currentUser.id,
              email: currentUser.email,
              mensaje: message,
              asunto: subject
            })
          }
        );

        const response = await rawResponse.json();
        console.log(response);
        if (response.success === false) {
          setError(response.message);
          setLoading(false);
        } else {
          setLoading(false);
          setSuccess('Tu mensaje se ha enviado con éxito!');
          setMessage('');
          setSubject('');
        }
      } catch (err) {
        alert('Hubo un error de servidor');
      }
    })();
  };

  const navigate = useNavigate();
  return (
    <div className="contact-us-page">
      <Header backbutton={() => navigate('/help')} />
      <div className="body">
        <h1>Contactar soporte</h1>
        <form onSubmit={handleSubmit}>
          <InputDiv
            inputProps={{ name: 'subject', value: subject }}
            label="Asunto"
            error={subjectError}
            setState={setSubject}
            onChange={() => {
              setSubjectError('');
              setSuccess('');
            }}
          />
          <InputDiv
            textarea
            inputProps={{
              name: 'message',
              cols: '30',
              rows: '10',
              value: message
            }}
            label="Cuéntanos en qué podemos ayudarte:"
            setState={setMessage}
            error={error}
            onChange={() => {
              setError('');
              setSuccess('');
            }}
          />

          <div className="submit-wrapper">
            <input
              className={loading ? 'btn-primary--l loading' : 'btn-primary--l'}
              type="submit"
              value="Enviar"
              id="signup_submit"
            />
            {loading && (
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation"
                loop={true}
              />
            )}
          </div>
        </form>
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}
