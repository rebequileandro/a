import { useEffect, useState } from 'react';
import './PosMercadoPagoQr.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import loadingAnim from '../../../../../assets/loading.json';
import { getCurrentClub } from '../../../../../redux/slices/partyUser/club';
import { QrGenerator } from '../../../../../components/global/QrCode/QrGenerator/QrGenerator';
import Lottie from 'lottie-react';
import GradientButton from '../GradientButton/GradientButton.jsx';
import Popup_Options from '../../../../../components/global/Popup_Options/Popup_Options';
import { clearCart } from '../../../../../redux/slices/partyUser/marketplace';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../../models/routes.models';
import { getCart } from '../../../../../redux/slices/partyUser/marketplace';
import { getCurrentUser } from '../../../../../redux/slices/global/user';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

const { REACT_APP_API } = process.env;

export default function PosMercadoPagoQr({ total, socket }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [validating, setValidating] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentUser = useSelector(getCurrentUser);
  let progressInterval;

  const {
    _id: idParty,
    idOrganizer: idOrganizerPayment,
    nameParty: namePartyPayment
  } = useSelector(getCurrentClub);
  const cart = useSelector(getCart);

  console.log(cart);

  const getQr = async () => {
    try {
      setLoading(true);
      setValidating(true);
      const response = await axios.post(REACT_APP_API + '/cashier/generateqr', {
        total,
        idParty,
        idOrganizerPayment,
        paymentMethod: 'pos',
        namePartyPayment,
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
        idCashier: currentUser.id
      });

      console.log(response.data);

      setQrCode(response.data);
      setLoading(false);

      let iterations = 0;
      progressInterval = setInterval(() => {
        setProgress(2.8 * iterations);
        iterations++;
      }, 1000);

      setTimeout(() => {
        setValidating(false);
        clearInterval(progressInterval);
        setProgress(100);
      }, 1000 * 40);
    } catch (err) {
      console.log(err.response.data);
      setLoading(false);
    }
  };

  const handleNext = async () => {
    try {
      const validation = await axios.get(
        `${REACT_APP_API}/cashier/validateqr/${qrCode.externalReferenceMP}`
      );
      const { data } = validation;

      if (data.title === 'Pago realizado con éxito') {
        socket.emit('cliente:pagocorrecto', {
          id: data._id,
          titlePush: 'Nuevo pedido',
          messagePush: cart.map(
            (e) => `${e.nameDrink.toUpperCase()} x${e.amount}`
          )
        });
        setPopupContent({
          title: data.title,
          description: data.description,
          message: data.message,
          status: true,
          button: 'Aceptar',
          redirect: clearOrder
        });
      } else {
        setOpenPopup(true);
      }
    } catch (err) {
      console.log(err);
      setOpenPopup(true);
    }
  };

  const cancelOrder = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_API}/cashier/cancelOrder/${qrCode.externalReferenceMP}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    clearOrder();
  };

  const clearOrder = () => {
    dispatch(clearCart());
    navigate(routes.cashier.pos);
  };

  useEffect(() => {
    if (total) getQr();
  }, [total]);

  return (
    <>
      <div className="pos-mercado-pago-qr">
        {!loading && qrCode.data ? (
          <QrGenerator ticket={qrCode.data} />
        ) : (
          <Lottie
            animationData={loadingAnim}
            className="loading-animation"
            loop={true}
          />
        )}
        <GradientButton
          isAmount={false}
          action="validate"
          onClick={!validating ? handleNext : null}
          // loading={validating}
          progress={progress}
        />
      </div>
      <Popup_Options
        isOpen={openPopup}
        option1="Cancelar"
        option2="Reintentar"
        action1={cancelOrder}
        action2={() => setOpenPopup(false)}
        text="Pago no realizado"
      />
      <StatusPopUp isOpen={popupContent} {...popupContent} />
    </>
  );
}
