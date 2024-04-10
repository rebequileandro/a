import './edit_my_account.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import {
  getCurrentUser,
  updateSettings
} from '../../../../../redux/slices/global/user';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import Validate from '../../../../../utils/validation';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';
import countryCodes from '../../../../../utils/countries-code.json';
const MailAndNumber = () => {
  let fullWindowHeight = window.innerHeight;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState({
    phone: {
      flag: user.phone ? user.phone[0].flag : '🇦🇷',
      prefix: user.phone ? user.phone[0].prefix : '+54',
      number: user.phone ? user.phone[0].number : ''
    },
    email: user.email
  });
  const [inputErrors, setInputErrors] = useState({
    phone: {
      flag: '',
      prefix: '',
      number: ''
    },
    email: ''
  });
  const handleChange = (e) => {
    if (e.target.name === 'phoneNumber') {
      setInput({
        ...input,
        phone: {
          ...input.phone,
          number: e.target.value
        }
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInputErrors = { ...inputErrors };
    const emailValidation = Validate.email(input);
    const phoneValidation = Validate.tel({ tel: input.phone.number });
    !input.email && (newInputErrors.email = 'Ingresa tu correo electrónico');
    emailValidation && (newInputErrors.email = emailValidation);
    !input.phone.prefix &&
      (newInputErrors.phone.prefix = 'Ingresa tu codigo de pais');
    !input.phone.number &&
      (newInputErrors.phone.number = 'Ingresa tu número de telefono');
    phoneValidation && (newInputErrors.phone.number = phoneValidation);
    if (
      newInputErrors.phone.number ||
      newInputErrors.email ||
      newInputErrors.phone.prefix
    ) {
      setInputErrors(newInputErrors);
      setLoading(false);
      return;
    } else {
      let data = { ...input };
      user.email === data.email && delete data.email;
      setLoading(true);
      dispatch(updateSettings(data, user._id)).then((response) => {
        setStatus(response.data);
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight === fullWindowHeight) {
        setIsOpenKeyboard(false);
      } else if (window.innerHeight < fullWindowHeight * 0.9) {
        setIsOpenKeyboard(true);
      }
    });
  }, []);

  const handleCodAreaChange = (e) => {
    const { value } = e.target;
    let country;

    if (value === '1') {
      country = countryCodes.find(
        (country) => country.country === 'United States'
      );
    } else {
      country = countryCodes.find(
        (country) => country.code === (value[0] === '+' ? value : `+${value}`)
      );
    }
    if (country) {
      setInput({
        ...input,
        phone: {
          ...input.phone,
          prefix: input.phone.prefix[0] !== '+' ? `+${value}` : value,
          flag: country.flag
        }
      });
    } else {
      setInput({
        ...input,
        phone: {
          ...input.phone,
          prefix: value,
          flag: '🏳️'
        }
      });
    }
  };
  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Mi cuenta'} />
      <div className="account layout-primary">
        <h2 className="heading-secondary-sub--upper account__title">
          Mail Y Número de teléfono
        </h2>
        <form onSubmit={handleSubmit} className="account__form">
          <div className="account__row">
            <div className="account__select-container-account">
              <InputDiv
                label={'Cód. área:'}
                inputProps={{
                  type: 'tel',
                  value: input.phone.prefix,
                  name: 'phoneNumber',
                  maxLength: '5'
                }}
                prefix={input.phone.flag}
                onChange={handleCodAreaChange}
                error={inputErrors.phone.number}
              />
            </div>
            <InputDiv
              label={'Número de teléfono:'}
              onChange={handleChange}
              inputProps={{
                type: 'tel',
                value: input.phone.number,
                name: 'phoneNumber',
                placeholder: '112345...',
                MaxLength: '15'
              }}
              error={inputErrors.phone.number}
            />
          </div>

          <InputDiv
            label={'Correo electrónico:'}
            onChange={handleChange}
            inputProps={{
              type: 'text',
              value: input.email,
              name: 'email'
            }}
            error={inputErrors.email}
          />
          <div
            className={`account__${
              isOpenKeyboard ? 'hide-buttons' : 'buttons-container'
            }`}
          >
            <button className="btn-primary--l account__save-btn" type="submit">
              {loading ? (
                <Lottie
                  animationData={loadingAnimation}
                  className="account__loading-animation"
                  loop={true}
                />
              ) : (
                'Guardar cambios'
              )}
            </button>
            <div className="anchor-primary--bold">
              <Link to={-1}>Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
      <StatusPopUp
        isOpen={status}
        title={status.message}
        status={status.status === 'success' ? true : false}
        redirect={() => navigate(-1)}
        button={'Aceptar'}
      />
    </>
  );
};

export default MailAndNumber;
