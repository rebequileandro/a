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
import { AnimatePresence, motion } from 'framer-motion';
export const StatusPopUp = ({
  title,
  description,
  missingItem,
  button,
  redirect,
  status,
  isOpen,
  selfClose,
  selfCloseTimer,
  mp
}) => {
  useEffect(() => {
    if (!button && redirect) {
      console.log('entre');
      setTimeout(() => {
        redirect();
      }, 4000);
    }
  }, [button]);
  // useEffect(() => {
  //   if (selfClose) {

  //     redirect();
  //   }
  // }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-overlay"
        >
          <motion.div
            initial={{ transform: 'scale(0.5)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scaleY(0)' }}
            className="popup layout-primary"
          >
            {status === 300 ? (
              <Lottie
                animationData={loading}
                className="popup__loading-animation"
                loop={true}
              />
            ) : (
              <Lottie
                animationData={status ? success : error}
                className="popup__loading-animation"
                loop={false}
              />
            )}
            <h2 className="popup__title">{title}</h2>
            <div className="popup__description">
              <p>
                {description}
                {missingItem
                  ? missingItem?.map((item) => (
                      <>
                        <br />
                        <span className="popup__missingItem">
                          {item.nameDrink}
                        </span>
                      </>
                    ))
                  : null}
              </p>
            </div>
            {
              button && (
                <button className={'btn-primary--l'} onClick={() => redirect()}>
                  {button}
                </button>
              )
              // : (
              //   <Loading classLoader />
              // )
            }
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
