import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import routes from '../../../../models/routes.models';
import Button from '../../../../components/global/Button/Button';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import useForgotPassword from './useForgotPassword';

import logo from '../../../../assets/shooza.svg';
import './ForgotPassword.scss';
import { motion } from 'framer-motion';

export default function PasswordReset() {
  const {
    method,
    data,
    errors,
    validate,
    popupContent,
    loading,
    createSetState,
    handleSubmit
  } = useForgotPassword();

  return (
    <>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        className="forgot-password layout-primary"
      >
        <img
          src={logo}
          className="forgot-password__logo"
          alt="Logo de WeDrink"
        />

        <h1 className="forgot-password__heading">Recupera tu contraseña</h1>

        <p className="forgot-password__content">
          Ingresa{' '}
          {method === 'email'
            ? 'la dirección de email asociada'
            : 'el número de telefono asociado'}{' '}
          a tu cuenta
        </p>

        {/* EMAIL */}
        {method === 'email' && (
          <InputDiv
            inputProps={{
              type: 'email',
              spellCheck: 'false',
              value: data.email
            }}
            label="Email"
            setState={createSetState('email')}
            error={errors.email}
            onBlur={() => validate('email')}
          />
        )}

        {/* TEL */}
        {method === 'tel' && (
          <div className="tel-inputs">
            <InputDiv
              inputProps={{
                type: 'number',
                value: data.codArea
              }}
              label="Cód. área:"
              setState={createSetState('codArea')}
              error={errors.codArea}
            />

            <InputDiv
              inputProps={{
                type: 'number',
                value: data.tel,
                placeholder: '1123456789'
              }}
              label="Número de teléfono:"
              setState={createSetState('tel')}
              error={errors.tel}
            />
          </div>
        )}

        <Button type="submit" onClick={handleSubmit} loading={loading}>
          Aceptar
        </Button>

        <Link
          to={routes.global.loginWithEmail}
          className="forgot-password__link highlight"
        >
          Volver a inicio de sesión
        </Link>
      </motion.div>
      <StatusPopUp isOpen={popupContent} {...popupContent} />
    </>
  );
}
