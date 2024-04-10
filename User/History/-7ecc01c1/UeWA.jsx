// load component
import React from 'react';
import './Loader.scss';
import loading from '../../../assets/icons/loading .svg';
export const Loading = ({ classLoader }) => {
  return (
    <div className={!classLoader ? 'loader-wrapper' : 'loaderPopup'}>
      <img
        className={
          !classLoader ? 'loader-wrapper__loader' : 'loaderPopup__loader'
        }
        src={loading}
        alt="loading"
        loading="lazy"
      />
    </div>
  );
};
