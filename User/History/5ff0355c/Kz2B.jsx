import InputDiv from '../../../../../../components/global/InputDiv/InputDiv';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import countryCodes from '../../../../../../utils/countries-code.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import routes from '../../../../../../models/routes.models';
import { Link } from 'react-router-dom';

export default function StepThree({
  data,
  createSetState,
  errors,
  setData,
  setErrors
}) {
  const [countryFlag, setCountryFlag] = useState('🇦🇷');

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

  useEffect(() => {
    setData({ ...data, countryFlag });
  }, [countryFlag]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ opacity: { bounce: 0 } }}
      className="step three"
    >
      <div>
        <div className="phone">
          <InputDiv
            inputProps={{
              type: 'number',
              name: 'cod_area',
              id: 'signup_cod_area',
              value: data.codArea
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
              value: data.tel,
              placeholder: '1123456789'
            }}
            label="Número de teléfono:"
            setState={createSetState('tel')}
            error={errors.tel}
          />
        </div>

        {/* BIRTHDAY */}
        <div className={`input-div datepicker ${errors.birthday && 'error'}`}>
          <label>Fecha de nacimiento</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              className="mui-datepicker"
              value={data.birthday}
              onChange={(newDate) => {
                setData({ ...data, birthday: newDate });
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

        {/* TÉRMINOS Y CONDICIONES */}
        <div className="check-input">
          <div className="input-wrapper">
            <div
              className={data.tyc ? 'checkbox checked' : 'checkbox'}
              name="tyc"
              onClick={() => {
                setData({
                  ...data,
                  tyc: !data.tyc
                });
                setErrors({ ...errors, tyc: '' });
              }}
            ></div>
          </div>
          <label htmlFor="tyc">
            Acepto la{' '}
            <Link to={routes.global.termsAndConditions}>
              constitución, políticas y condiciones de Shooza
            </Link>
          </label>
        </div>
        {errors.tyc && <p className="check-input-error">*{errors.tyc}</p>}
      </div>
    </motion.div>
  );
}
