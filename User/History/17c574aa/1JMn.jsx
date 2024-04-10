import Validate from '../../../../../utils/validation';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../../redux/slices/global/user';
import { getCurrentClub } from '../../../../../redux/slices/partyUser/club';
import {
  getCart,
  clearCart
} from '../../../../../redux/slices/partyUser/marketplace';
import { useNavigate } from 'react-router-dom';
import { getCardCashier } from '../../../../../redux/slices/cashier/order';
import { getMethod } from '../../../../../redux/slices/partyUser/checkout';
import { useEffect, useState } from 'react';
import routes from '../../../../../models/routes.models';
import { formatNotificationBartender } from '../../../../../utils/formatNotificationBartender';

const { REACT_APP_API } = process.env;

export default function useSubmitForm({
  data,
  errors,
  setErrors,
  setLoading,
  setPopupData,
  socket
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(null);
  const [blockSubmit, setBlockSubmit] = useState(false);
  const currentUser = useSelector(getCurrentUser);
  const club = useSelector(getCurrentClub);
  const cart = useSelector(getCart);
  const method = useSelector(getMethod);
  const card = useSelector(getCardCashier);
  const handleRedirect = () => {
    setPopupData(null);
    navigate(routes.cashier.pos);
  };

  useEffect(() => {
    //get the sum of the entire cart
    const getTotal = () => {
      let sumTotal = 0;
      cart?.map(
        (e) =>
          (sumTotal =
            sumTotal + parseInt(e.finalPriceDrink) * parseInt(e.amount))
      );
      setTotal(sumTotal);
    };
    return getTotal();
  }, [getCart]);

  const handleSubmit = async () => {
    // const newErrors = { ...errors };

    // newErrors.name = Validate.name(data);
    // newErrors.number = Validate.tel({ tel: data.number });
    // newErrors.prefix = Validate.codArea({ codArea: data.prefix });

    // if (newErrors.name || newErrors.number || newErrors.prefix) {
    //   setErrors(newErrors);
    //   return;
    // }
    if (!blockSubmit) {
      try {
        setBlockSubmit(true);
        if (method.name === 'cash') {
          const postData = {
            paymentOwner: 'cashier',
            phoneClientPayment: [
              { flag: data.flag, prefix: data.prefix, number: data.number }
            ],
            idCashier: currentUser.id,
            nameClientePayment: `${data.name} (Caja)`,
            idOrganizerPayment: club.idOrganizer,
            namePartyPayment: club.nameParty,
            idParty: club._id,
            total: total,
            nameBarra: currentUser.square,
            paymentMethod: 'cash',
            totalMinOrder: cart.reduce(
              (a, b) => parseInt(a) + parseInt(b.totalMinOrder),
              0
            ),
            orderPayment: cart.map((item) => {
              return {
                imageDrink: item.imageDrink,
                typeDrink: item.typeDrink,
                title: item.nameDrink,
                unit_price: item.finalPriceDrink,
                quantity: item.amount,
                recipe: item?.recipe
              };
            }),
            imageBarra: currentUser.square
          };
          setLoading(true);
          const response = await axios.post(
            REACT_APP_API + '/partyuser/payment/cash/add',
            postData
          );
          setPopupData({
            title: response.data.title,
            description: response.data.description,
            status: response.data.status === 'success' ? true : false,
            redirect:
              response.data.status === 'success'
                ? () => navigate('/')
                : setPopupData(null),

            button: 'Aceptar'
          });
          if (response.data.status === 'success') {
            socket.emit('cliente:pagocorrecto', {
              id: response.data.data._id,
              titlePush: '¡Nuevo pedido! 🍸🍹',
              messagePush: formatNotificationBartender(cart)
            });
            dispatch(clearCart());
          }

          setLoading(false);
          setBlockSubmit(false);
          return;
        }

        if (method.name === 'card') {
          const postData = {
            paymentOwner: 'cashier',
            idUser: currentUser.id,
            token: card.token,
            paymentId: card.paymentMethodId,
            issuerId: card.issuerId,
            nameClientePayment: data.name,
            phoneClientPayment: [
              { flag: data.flag, prefix: data.prefix, number: data.number }
            ],
            idCashier: currentUser.id,
            idOrganizerPayment: club.idOrganizer,
            namePartyPayment: club.nameParty,
            idParty: club._id,
            nameBarra: currentUser.square,
            total: card.amount,
            paymentMethod: 'creditCard',
            accessTokenMercadopago:
              'TEST-5962951926255028-092606-949b6c3fb1cd848126f47b88f13a73c7-567838662', //currentClub.accessTokenMercadopago,
            totalMinOrder: cart.reduce(
              (a, b) => parseInt(a) + parseInt(b.totalMinOrder),
              0
            ),
            orderPayment: cart.map((item) => {
              return {
                imageDrink: item.imageDrink,
                typeDrink: item.typeDrink,
                title: item.nameDrink,
                unit_price: item.finalPriceDrink,
                quantity: item.amount,
                recipe: item?.recipe
              };
            })
          };
          setLoading(true);
          const response = await axios.post(
            REACT_APP_API + '/cashier/pay',
            postData
          );
          setPopupData({
            title: response.data.title,
            description: response.data.description,
            status: response.status === 200,
            redirect:
              response.status === 200
                ? () => navigate('/')
                : setPopupData(null),
            button: 'Aceptar'
          });

          if (response.data.status === 'approved') {
            socket.emit('cliente:pagocorrecto', {
              id: response.data._id,
              titlePush: '¡Nuevo pedido! 🍸🍹',
              messagePush: formatNotificationBartender(cart)
            });
            dispatch(clearCart());
          }
          setLoading(false);
          setBlockSubmit(false);

          return;
        }
      } catch (err) {
        console.log(err.response.data);
        setPopupData({
          title: err.response.data.title,
          description: err.response.data.description,
          status: false,
          missingItem: err.response.data.productosFaltantes,
          redirect: () => handleRedirect(),
          button: err.response.data.button
        });
        setLoading(false);
        setBlockSubmit(false);
      }
    }
  };

  return handleSubmit;
}
