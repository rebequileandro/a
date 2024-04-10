import { useEffect, useState } from 'react';
import useScript from '../../../../../hooks/useScript';
import { formConfig } from './formConfig';
import { setCard } from '../../../../../redux/slices/cashier/order';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../../models/routes.models';

const { REACT_APP_MP_PUBLIC_KEY } = process.env;
// const {REACT_APP_MP_PUBLIC_KEY} = 'TEST-0928c79f-a3ce-4926-aa4b-61051b599a10';

const FIELDS = {
  cardNumber: '',
  expirationDate: '',
  cvc: '',
  cardholderName: '',
  identificationNumber: ''
};

export default function useCreditCardForm(total) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState(FIELDS);
  const [errors, setErrors] = useState(FIELDS);

  let cardForm;

  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.dataset.name || e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.dataset.name || e.target.name]: ''
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      errors.cardNumber ||
      errors.expirationDate ||
      errors.cardExpirationDate ||
      errors.cvc
    ) {
      setErrors({
        ...errors,
        identificationNumber: 'Hay algún error con tus datos'
      });
      return;
    }

    const cardFormData = await cardForm.getCardFormData();

    dispatch(setCard(cardFormData));
    navigate(routes.cashier.checkoutFinalForm);
  };

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(REACT_APP_MP_PUBLIC_KEY);
      cardForm = mp.cardForm({
        amount: `${total.total}`,
        autoMount: true,
        form: formConfig,
        callbacks: {
          onFormMounted: (error) => {
            if (error)
              return console.warn('Form Mounted handling error: ', error);
          },
          onError: (error) => {
            if (error[0].message === 'invalid parameter amount') {
              console.log(error);
              return;
            }
            setErrors({
              ...errors,
              identificationNumber: 'Hay algun error con los datos'
            });
          },
          onSubmit,
          onValidityChange: (error, field) => {
            if (error) {
              return error.forEach((e) => {
                setErrors({ ...errors, [field]: 'Dato inválido' });
              });
            }
          }
        }
      });
    }
  }, [MercadoPago]);

  return { data, handleChange, errors };
}
