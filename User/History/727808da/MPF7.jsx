import './edit_my_account.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import Validate from '../../../../../utils/validation';
import {
  getCurrentUser,
  updateSettings
} from '../../../../../redux/slices/global/user';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../../../assets/loading.json';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

const PersonalInformation = () => {
  let fullWindowHeight = window.innerHeight;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState({
    name: user.name,
    dateOfBirth: user?.dateOfBirth ? user?.dateOfBirth : ''
  });
  const [inputErrors, setInputErrors] = useState({
    name: '',
    dateOfBirth: ''
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInputErrors = { ...inputErrors };
    const nameValidation = Validate.name(input);
    let dateOfBirthValidation;
    if (user?.dateOfBirth !== input.dateOfBirth) {
      Validate.birthday({
        birthday: input.dateOfBirth
      });
    }
    !input.name && (newInputErrors.name = 'Ingresa tu nombre');
    nameValidation && (newInputErrors.name = nameValidation);
    !input.dateOfBirth &&
      (newInputErrors.dateOfBirth = 'Ingresa tu fecha de nacimiento');
    dateOfBirthValidation &&
      (newInputErrors.dateOfBirth = dateOfBirthValidation);
    if (newInputErrors.email || newInputErrors.dateOfBirth) {
      setInputErrors(newInputErrors);
      return;
    } else {
      setLoading(true);
      dispatch(updateSettings(input, user._id || user.id)).then((response) => {
        console.log(response);
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

  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Mi cuenta'} />
      <div className="account layout-primary">
        <h2 className="heading-secondary-sub--upper account__title">
          mis datos personales
        </h2>
        <form onSubmit={handleSubmit} className="account__form">
          <InputDiv
            label={'Nombre y apellido:'}
            onChange={handleChange}
            inputProps={{
              type: 'text',
              value: input.name,
              name: 'name'
            }}
            error={inputErrors.name}
          />
          <div
            className={`input-div datepicker ${
              inputErrors.dateOfBirth && 'error'
            }`}
          >
            <label>Fecha de nacimiento:</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                className="mui-datepicker"
                value={input.dateOfBirth}
                onChange={(value) => {
                  setInput({ ...input, dateOfBirth: value });
                  setInputErrors({ ...inputErrors, dateOfBirth: '' });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      placeholder: 'dd/mm/aaaa',
                      disabled: true,
                      className: 'input-disabled'
                    }}
                  />
                )}
                disableFuture
                inputFormat={'dd/MM/yyyy'}
                minDate={new Date('1900-00-00')}
              />
            </LocalizationProvider>
            {inputErrors.dateOfBirth && (
              <p className="error">*{inputErrors.dateOfBirth}</p>
            )}
          </div>
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
        <button className="btn-primary--l">reload</button>
      </div>
      <StatusPopUp
        isOpen={status}
        title={status?.message}
        status={status?.status === 'success' ? true : false}
        redirect={() => navigate(-1)}
        button={'Aceptar'}
      />
    </>
  );
};

export default PersonalInformation;
