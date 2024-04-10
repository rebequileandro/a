import './support.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import Select from '../../../../components/global/Select/Select/Select';
import { getCurrentUser } from '../../../../redux/slices/global/user';
import loadingAnimation from '../.../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import axios from 'axios';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import TextArea from '../../../../components/global/TextArea/TextArea';
import getCookie from '../../../../utils/getCookie';
const { REACT_APP_API } = process.env;
const Support = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const user = useSelector(getCurrentUser);
  const options = ['Pedidos', 'Pago', 'Otra cosa'];
  const initialState = {
    asunto: '',
    mensaje: '',
    urgencyfilter: ''
  };
  const [input, setInput] = useState({
    nombre: user.name,
    idUser: user._id,
    email: user.email,
    telefono: user.phone && `${user.phone[0].prefix}${user.phone[0].number}`,
    asunto: '',
    mensaje: '',
    urgencyfilter: ''
  });
  const [inputErrors, setInputErrors] = useState(initialState);
  const handleChange = (e) => {
    if (typeof e === 'number') {
      setSelected(e);
      setInput({
        ...input,
        urgencyfilter: e
      });
    } else if (typeof e === 'string') {
      setInput({
        ...input,
        asunto: e
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputErrors(initialState);
    const newErrors = { ...initialState };
    !input.asunto && (newErrors.asunto = 'Debes seleccionar una opción');
    !input.urgencyfilter &&
      (newErrors.urgencyfilter = 'Debes seleccionar una opción');
    !input.mensaje && (newErrors.mensaje = 'Por favor ingrese un mensaje');
    input.mensaje &&
      input.mensaje.length < 100 &&
      (newErrors.mensaje = 'Mensaje demasiado corto');
    if (newErrors.asunto || newErrors.mensaje || newErrors.urgencyfilter) {
      setInputErrors(newErrors);
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          `${REACT_APP_API}/partyuser/support/add`,
          input,
          {
            headers: {
              'auth-token': getCookie('__token')
            }
          }
        );
        setLoading(false);
        setStatus(response.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setStatus(error.response.data);
      }
    }
  };
  return (
    <>
      <Header title={'Contactar soporte'} backbutton={() => navigate(-1)} />
      <div className="support layout-primary">
        <form onSubmit={handleSubmit}>
          <div className="support__input-container">
            <Select
              label={'¿Sobre qué tema es?'}
              placeholder={'Selecciona una opción'}
              onChange={handleChange}
              options={options}
              error={inputErrors.asunto}
              gradient
              icon
            />
            <TextArea
              label={'Cuéntanos en qué podemos ayudarte:'}
              onChange={handleChange}
              inputProps={{
                name: 'mensaje',
                placeholder: 'Mensaje'
              }}
              error={inputErrors.mensaje}
            />
          </div>
          <div className="support__level">
            <h3 className="support__level-label">
              Indicanos qué tan urgente es tu consulta:
            </h3>
            <div className="support__circle-container">
              <div
                className={`support__circle-wrapper ${
                  selected === 1 ? 'selected' : null
                }`}
                onClick={() => handleChange(1)}
              >
                <div className="support__circle">
                  <h2 className="heading-secondary-sub">1</h2>
                </div>
              </div>
              <div
                className={`support__circle-wrapper ${
                  selected === 2 ? 'selected' : null
                }`}
                onClick={() => handleChange(2)}
              >
                <div className="support__circle">
                  <h2 className="heading-secondary-sub">2</h2>
                </div>
              </div>
              <div
                className={`support__circle-wrapper ${
                  selected === 3 ? 'selected' : null
                }`}
                onClick={() => handleChange(3)}
              >
                <div className="support__circle">
                  <h2 className="heading-secondary-sub">3</h2>
                </div>
              </div>
              <div
                className={`support__circle-wrapper ${
                  selected === 4 ? 'selected' : null
                }`}
                onClick={() => handleChange(4)}
              >
                <div className="support__circle">
                  <h2 className="heading-secondary-sub">4</h2>
                </div>
              </div>
              <div
                className={`support__circle-wrapper ${
                  selected === 5 ? 'selected' : null
                }`}
                onClick={() => handleChange(5)}
              >
                <div className="support__circle">
                  <h2 className="heading-secondary-sub">5</h2>
                </div>
              </div>
            </div>
            <div className="support__relevance">
              <p>Poco urgente</p>
              <p>Muy urgente</p>
            </div>
            {inputErrors.urgencyfilter && (
              <p className="error">*{inputErrors.urgencyfilter}</p>
            )}
          </div>
          <button type="submit" className="btn-primary--l support__submit">
            {loading ? (
              <Lottie
                animationData={loadingAnimation}
                className="support__loading-animation"
                loop={true}
              />
            ) : (
              'Enviar'
            )}
          </button>
        </form>
      </div>
      {status ? (
        <StatusPopUp
          title={
            status.status === 'success'
              ? 'Tu consulta fue enviada'
              : 'Algo salió mal inténtalo de nuevo '
          }
          description={
            status.status === 'success'
              ? 'Nos contactaremos contigo lo antes posible para resolver tu consulta'
              : null
          }
          status={status.status === 'success' ? true : false}
          redirect={() =>
            status.status === 'success' ? navigate(-1) : setStatus(false)
          }
          button={'Aceptar'}
        />
      ) : null}
    </>
  );
};

export default Support;
