//receives the text of the button, the route to where it is redirected, title,
//description, status, if it does not receive status by default it will be an error
//and if it does not receive the text of the button by default it will be a loading

import './StatusPopUp.scss';
import React, { useEffect, useState } from 'react';
import { Loading } from '../Loader/Loader';
import error from '../../../assets/animations/error.json';
import success from '../../../assets/animations/success.json';
import loading from '../../../assets/loading.json';
import Lottie from 'lottie-react';

export const StatusPopUp = ({
  title,
  description,
  button,
  redirect,
  status
}) => {
  useEffect(() => {
    if (!button && redirect)
      setTimeout(() => {
        redirect();
      }, 4000);
  }, [button]);

  return (
    <div className="popup-overlay">
      <div className="popup">
        {status === 300 ? (
          <Lottie
            animationData={loading}
            className="popup__loading-animation"
            loop={true}
          />
        ) : (
          <Lottie
            animationData={status === true ? success : error}
            className="popup__loading-animation"
            loop={false}
          />
        )}
        <h2 className="popup__title">{title}</h2>
        <div className="popup__description">
          <p>{description}</p>
        </div>
        {button ? (
          <button className={'btn-primary--l'} onClick={() => redirect()}>
            {button}
          </button>
        ) : (
          <Loading classLoader />
        )}
      </div>
    </div>
  );
};
