import '../account.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import Validate from '../../../../utils/validation';
import { updateSettings } from '../../../../redux/slices/global/user';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../../assets/loading.json';
const PersonalInformation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.global.user);
  const [loading, setLoading] = useState(false);
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
    const dateOfBirthValidation = Validate.birthday({
      birthday: input.dateOfBirth
    });
    !input.name && (newInputErrors.name = 'Ingresa tu nombre');
    nameValidation && (newInputErrors.name = nameValidation);
    !input.dateOfBirth &&
      (newInputErrors.dateOfBirth = 'Ingresa tu fecha de nacimiento');
    dateOfBirthValidation &&
      (newInputErrors.dateOfBirth = dateOfBirthValidation);
    if (newInputErrors.email || newInputErrors.dateOfBirth) {
      setLoading(true);
      setInputErrors(newInputErrors).then(() => setLoading(false));
      return;
    } else {
      dispatch(updateSettings(input));
    }
  };
  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Mi cuenta'} />
      <div className="account layout-primary">
        <h2 className="heading-secondary-sub account__title">
          Mis datos personales
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
                      placeholder: 'dd/mm/aaaa'
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
          <div className="account__buttons-container">
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
    </>
  );
};

export default PersonalInformation;
