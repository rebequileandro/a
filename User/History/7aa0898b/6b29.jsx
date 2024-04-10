import './personal_information.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
const PersonalInformation = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
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
  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Mi cuenta'} />
      <div className="personal-information layout-primary">
        <h2 className="heading-secondary-sub personal-information__title">
          Mis datos personales
        </h2>
        <form className="personal-information__form">
          <InputDiv
            label={'Nombre y apellido:'}
            onChange={handleChange}
            inputProps={{
              type: 'text',
              value: input.name,
              name: 'name'
            }}
          />
          <div
            className={`input-div datepicker ${
              inputErrors.birthday && 'error'
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
          </div>
          <div className="personal-information__buttons">
            <button className="btn-primary--l" type="submit">
              Guardar cambios
            </button>
            <div className="anchor-primary">
              <Link to={-1}>Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInformation;
