import React from "react";
import "./login.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Input, Checkbox, Button, Error } from "@/components";
import loginData from "./login-data.json";
import { useState } from "react";
import Cam from "./Cam/Cam";
import formValidate from "@/utils/formValidation";
import sliceObject from "../../utils/sliceObject";
import { useLoginMutation } from "./services/login.services";

const Login = () => {
  const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] =
    useLoginMutation();

  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);

  const loginformInitialState = {
    email: "",
    password: "",
  };
  const signupformInitialState = {
    full_name: "",
    registration: "",
    specialty: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [loginForm, setLoginForm] = useState(loginformInitialState);
  const [loginFormError, setLoginFormError] = useState(loginformInitialState);
  const [signupForm, setSignupForm] = useState(signupformInitialState);
  const [signupFormError, setSignupFormError] = useState(
    signupformInitialState
  );
  const [checkbox, setcheckbox] = useState(null);
  const [termsOfService, settermsOfService] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleChangeLogin = (e) => {
    e.preventDefault();
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSignup = (e) => {
    e.preventDefault();
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isLoadingLogin) {
      const errors = formValidate(loginForm);
      setLoginFormError(errors);
      if (!errors.email && !errors.password) {
        login(loginForm);
      }
    }
  };
  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (isVerified) {
      setLoadingSignup(true);
    }
  };
  const handleNextElement = () => {
    swiper?.slideNext();
  };
  const handlePrevElement = () => {
    swiper?.slidePrev();
  };
  const handleSlideChange = () => {
    const nextSlide = (slide, from, to) => {
      if (swiper.activeIndex > currentSlide) {
        const isError = checkFiels(signupForm, from, to);
        if (isError || (slide === 2 && !checkbox)) {
          if (swiper.activeIndex > slide) {
            swiper.slideTo(slide);
          }
        }
      }
    };
    if (currentSlide === 1) {
      nextSlide(1, 0, 3);
    }
    if (currentSlide === 2) {
      if (!checkbox) {
        settermsOfService(
          "Debes aceptar los términos y condiciones para continuar."
        );
      } else {
        settermsOfService(null);
      }
      nextSlide(2, 3, 7);
    }
    setCurrentSlide(swiper.activeIndex);
  };

  const checkFiels = (obj, from, to) => {
    const fields = sliceObject(obj, from, to);
    const errors = formValidate(fields);

    const isError = (object) => {
      for (let key in object) {
        if (
          object[key] !== undefined &&
          object[key] !== null &&
          object[key] !== ""
        ) {
          return true;
        }
      }
      return false;
    };

    setSignupFormError({ ...signupFormError, ...errors });
    return isError(errors);
  };
  return (
    <div className="login">
      {currentSlide !== 0 && (
        <button className="login__back-btn" onClick={handlePrevElement}>
          <svg
            width="100%"
            height="100%"
            aria-label="Go back"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z"
              fill="white"
            />
          </svg>
        </button>
      )}

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={30}
        className="login__slider-wrapper"
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {loginData?.map((e, i) => (
          <SwiperSlide className="login__swiper-slide" key={i}>
            <div className="login__slide">
              <img
                src="/assets/medbot.png"
                alt="medbot"
                className="login__medbot"
              />
              <form
                className="login__slide__form"
                onSubmit={i === 0 ? handleSubmitLogin : handleSubmitSignUp}
              >
                {e?.title && (
                  <h3 className="login__slide__form__title">{e?.title}</h3>
                )}
                {e.slide?.map((input, index) => (
                  <Input
                    key={input.label + index}
                    fullWidth
                    inputProps={{
                      ...input.inputProps,
                      value:
                        i === 0
                          ? loginForm[input.inputProps.name]
                          : signupForm[input.inputProps.name],
                      onChange:
                        i === 0 ? handleChangeLogin : handleChangeSignup,
                      required: true,
                    }}
                    label={input.label}
                    error={
                      i === 0
                        ? loginFormError[input.inputProps.name]
                        : signupFormError[input.inputProps.name]
                    }
                  />
                ))}
                {e?.check && (
                  <div>
                    <div className="login__slide__form__check-container">
                      <div>
                        <Checkbox id="321" onChange={setcheckbox} />
                      </div>
                      <label htmlFor="321">{e.check}</label>
                    </div>
                    {termsOfService && <Error error={termsOfService} />}
                  </div>
                )}
                {i === 0 ? (
                  <div className="login__slide__btn-container">
                    <div className="login__slide__btn">
                      <Button
                        fullWidth
                        type="secondary"
                        btnProps={{ type: "submit" }}
                        loading={isLoadingLogin}
                      >
                        Iniciar sesión
                      </Button>
                    </div>
                    <br />
                    <br />
                    <p>o</p>
                    <br />
                    <br />
                    <p>Aún no estoy registrado. Crea una cuenta</p>
                    <br />
                    <br />
                    <Button
                      btnProps={{ type: "button" }}
                      onClick={handleNextElement}
                    >
                      Crear cuenta
                    </Button>
                  </div>
                ) : (
                  <div className="login__slide__btn">
                    <Button
                      fullWidth
                      type="secondary"
                      btnProps={{ type: "button" }}
                      onClick={handleNextElement}
                    >
                      Siguiente
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="login__swiper-slide">
          <div className="login__slide">
            <img
              src="/assets/medbot.png"
              alt="medbot"
              className="login__medbot"
            />
            <div className="login__slide__form">
              <h3 className="login__slide__form__title">
                Valida tu identidad:
              </h3>
              <Cam active={currentSlide === 3} verified={setIsVerified} />
              <div className="login__slide__btn">
                <Button
                  fullWidth
                  type="secondary"
                  btnProps={{ type: "button" }}
                  disabled={!isVerified}
                  loading={loadingSignup}
                  onClick={handleSubmitSignUp}
                >
                  Crear cuenta
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Login;
