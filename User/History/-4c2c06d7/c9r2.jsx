import './popupSignUp.scss';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputDiv from '../InputDiv/InputDiv';
import countryCodes from '../../../utils/countries-code.json';
import validateStep from '../../../pages/global/Login/LoginWithEmail/SignUpForm/validateSignUpForm';

import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import routes from '../../../models/routes.models';
import Button from '../Button/Button';
import {
  logInUser,
  logOutUser,
  updateSettings
} from '../../../redux/slices/global/user';
import getCookie from '../../../utils/getCookie';

const { REACT_APP_API } = process.env;

const PopupSignUp = ({ setShowPopup }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.global.user);

  const initialStateInfo = {
    birthday: '',
    tel: '',
    codArea: '',
    countryFlag: '',
    tyc: false
  };

  const [userInfo, setUserInfo] = useState({
    ...initialStateInfo,
    codArea: '54',
    countryFlag: '🇦🇷',
    birthday: currentUser?.dateOfBirth ? currentUser?.dateOfBirth : '',
    tel: currentUser?.phone[0]?.number ? currentUser?.phone[0]?.number : ''
  });

  const [errors, setErrors] = useState(initialStateInfo);
  const [countryFlag, setCountryFlag] = useState('🇦🇷');
  const [loading, setLoading] = useState(false);

  const createSetState = (field) => (value) => {
    setUserInfo({ ...userInfo, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleCodAreaChange = (e) => {
    const { value } = e.target;

    let country;

    if (value === '1') {
      country = countryCodes.find(
        (country) => country.country === 'United States'
      );
    } else {
      country = countryCodes.find((country) => country.code === `+${value}`);
    }

    if (country) {
      setCountryFlag(country.flag);
    } else {
      setCountryFlag('🏳️');
    }
  };

  //Si se clickea el texto de terminos y condiciones se guarda en sessionStorage el estado actual data con la info de los inputs
  const handleClickTermsAndConditions = () => {
    sessionStorage.setItem('popupData', JSON.stringify(userInfo));
    navigate(routes.global.termsAndConditions);
  };

  const handleSubmitData = async () => {
    const validation = validateStep.three(userInfo, setErrors);

    if (validation) {
      setLoading(true);
      const postData = {
        phone: {
          flag: userInfo.countryFlag,
          prefix: `+${userInfo.codArea}`,
          number: userInfo.tel
        },
        dateOfBirth: userInfo.birthday
      };
      try {
        const { data } = await axios.put(
          `${REACT_APP_API}/partyuser/setting/${currentUser._id}`,
          postData,
          {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }
        );

        //al enviar los datos eliminamos el sessionStorage que guarda la info para evitar memory leaks
        dispatch(logInUser(data.data));
        window.sessionStorage.removeItem('popupData');

        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        setLoading(false);
        setShowPopup(false);
        navigate('/');
      } catch (error) {
        console.log('setting info error', error);
        setErrors({
          ...errors,
          tyc: error.response?.data?.message || error.message
        });
        setLoading(false);
      }
    }
  };

  const handleCancelPopup = async () => {
    try {
      await axios.post(`${REACT_APP_API}/auth/logout`);
    } catch (error) {
      console.log(error);
    }
    document.cookie = '';
    localStorage.clear();
    window.indexedDB.deleteDatabase('WeDrink');
    dispatch(
      logOutUser({
        navigate: () => navigate('/')
      })
    );
  };

  useEffect(() => {
    setUserInfo({ ...userInfo, countryFlag });
  }, [countryFlag]);

  //este useEffect lo que hace es checkear si al montarse el componente existe algo en sessionStorage, de ser así setea el estado local data con la información para que no se pierda y sino lo guarda para luego recuperarlo.
  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem('popupData'));
    if (savedData) {
      setUserInfo(savedData);
    } else {
      sessionStorage.setItem('popupData', JSON.stringify(userInfo));
    }
  }, []);

  return (
    <section className="popup-signup">
      <div className="popup-content">
        <h3 className="heading-secondary-sub">Ingresa los siguientes datos</h3>

        {/* BIRTHDAY */}
        <div className={`input-div datepicker ${errors.birthday && 'error'}`}>
          <label>Fecha de nacimiento</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              className="mui-datepicker"
              value={userInfo.birthday}
              onChange={(newDate) => {
                setUserInfo({ ...userInfo, birthday: newDate });
                setErrors({ ...errors, birthday: '' });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: 'dd/mm/aaaa'
                  }}
                />
              )}
              disableFuture
              inputFormat={'dd/MM/yyyy'}
              minDate={new Date('1900-00-00')}
            />
          </LocalizationProvider>
          {errors.birthday && <p className="error">*{errors.birthday}</p>}
        </div>

        {/* PHONE NUMBER */}
        <div className="phone">
          <InputDiv
            inputProps={{
              type: 'number',
              name: 'cod_area',
              id: 'signup_cod_area',
              value: userInfo.codArea
            }}
            label="Cód. área:"
            setState={createSetState('codArea')}
            error={errors.codArea}
            prefix={countryFlag + ' +'}
            onChange={handleCodAreaChange}
          />

          <InputDiv
            inputProps={{
              type: 'number',
              name: 'signup_tel',
              id: 'signup_tel',
              value: userInfo?.tel,
              placeholder: '1123456789'
            }}
            label="Número de teléfono:"
            setState={createSetState('tel')}
            error={errors.tel}
          />
        </div>

        {/* TÉRMINOS Y CONDICIONES */}
        <div className="check-input">
          <div className="input-wrapper">
            <div
              className={userInfo.tyc ? 'checkbox checked' : 'checkbox'}
              name="tyc"
              onClick={() => {
                setUserInfo({
                  ...userInfo,
                  tyc: !userInfo.tyc
                });
                setErrors({ ...errors, tyc: '' });
              }}
            ></div>
          </div>
          <label htmlFor="tyc" onClick={handleClickTermsAndConditions}>
            Acepto la constitución, políticas y condiciones de Shooza
          </label>
        </div>
        {errors.tyc && <p className="check-input-error">*{errors.tyc}</p>}
        <Button
          // className="btn-primary--l"
          onClick={handleSubmitData}
          type="submit"
          loading={loading}
        >
          Aceptar
        </Button>
        <button
          className="link-btn-cancel heading-tertiary-main"
          onClick={handleCancelPopup}
        >
          Cancelar
        </button>
      </div>
    </section>
  );
};

export default PopupSignUp;
