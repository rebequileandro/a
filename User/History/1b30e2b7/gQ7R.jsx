import './SignUpForm.scss';
import useSignUpForm from './useSignUpForm';
import Button from '../../../../../components/global/Button/Button';
import back from '../../../../../assets/buttons/arrow-circle-left.svg';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SignUpForm({
  setAnimateLogin,
  readedPrivacyPolicy,
  setReadedPrivacyPolicy
}) {
  const {
    data,
    errors,
    loading,
    step,
    setStep,
    createSetState,
    validate,
    handleNext,
    handlePrev,
    handleSubmit,
    setData,
    setErrors
  } = useSignUpForm();

  useEffect(() => {
    setAnimateLogin(true);
    readedPrivacyPolicy && setStep(3);
  }, [readedPrivacyPolicy]);

  const handleClick = () => {
    if (readedPrivacyPolicy) {
      setStep(3);
      setReadedPrivacyPolicy(false);
    } else {
      handlePrev();
    }
  };
  return (
    <>
      <button className="back-button-signup" onClick={() => handleClick()}>
        <img src={back} alt="atras" loading="lazy" />
      </button>
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ opacity: { bounce: 0 } }}
        className="sign-up-form"
        onSubmit={step === 3 ? handleSubmit : handleNext}
      >
        {/* Step one: name, email */}
        {step === 1 && (
          <StepOne
            data={data}
            errors={errors}
            createSetState={createSetState}
            validate={validate}
          />
        )}

        {/* Step two: password */}
        {step === 2 && (
          <StepTwo
            data={data}
            errors={errors}
            createSetState={createSetState}
            validate={validate}
          />
        )}

        {/* Step three: phone, birth date */}
        {step === 3 && (
          <StepThree
            data={data}
            createSetState={createSetState}
            errors={errors}
            setData={setData}
            setErrors={setErrors}
          />
        )}

        <Button
          type="submit"
          onClick={step === 3 ? handleSubmit : handleNext}
          loading={loading}
        >
          Siguiente
        </Button>
      </motion.form>
    </>
  );
}
