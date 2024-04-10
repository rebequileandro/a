import './OrderCard.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link, useNavigate } from 'react-router-dom';
import ORDER_STATUS from '../../../models/order-stages.model';
import OrderReady from './OrderReady/OrderReady';
import OrderStages from './OrderStages/OrderStages';
import PaymentPending from './PaymentPending/PaymentPending';
import {
  deleteOrder,
  getOrder,
  getOrderExists,
  orderStatus,
  orderTimeout,
  paymentExpire,
  updateIntervalID,
  updateLoading,
  updateOrderReady,
  updateTimeLeft
} from '../../../redux/slices/partyUser/order';
import routes from '../../../models/routes.models';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'swiper';
import { formatNumber } from '../../../utils/formatNumber';
import followSteps from '../../../assets/Fiestero/Images/ads.webp';
import Lottie from 'lottie-react';
import success from '../../../assets/animations/success.json';
import { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
const OrderCardSimple = ({ order, showDetails, index, type, ordersLoaded }) => {
  const { timestamp } = order;
  const { REACT_APP_API } = process.env;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderTimeout } = require('../../../redux/slices/partyUser/order.js');
  const orderTimeOutInMs = orderTimeout * 1000;
  let generatedTime = new Date(timestamp);
  let expireTime = new Date(timestamp + orderTimeOutInMs);

  let expireTimeFormat =
    (expireTime.getHours() < 10 ? '0' : '') +
    expireTime.getHours() +
    ':' +
    (expireTime.getMinutes() < 10 ? '0' : '') +
    expireTime.getMinutes();
  let showQrButton;
  if (window.location.pathname === '/marketplace') {
    showQrButton = true;
  } else {
    showQrButton = false;
  }
  const handleDeleteOrder = async (id) => {
    await axios.put(`${REACT_APP_API}/partyuser/payment/activeorder/${id}`, {
      activeOrderView: false
    });
    dispatch(deleteOrder(id));
    navigate(routes.partyUser.marketplace);
  };

  let content;
  if (order.status === ORDER_STATUS.PAYMENT_PENDING) {
    content = {
      title: 'Paga tu pedido en caja',
      description: (
        <p className="description">
          con el <span className="description__qrLink">QR</span> antes de que se{' '}
          <span className="description__cancelRed">cancele</span> a las{' '}
          <span className="description__expireTime">{expireTimeFormat} h</span>
        </p>
      ),
      body: (
        <>
          <PaymentPending showDetails={showDetails} order={order} />{' '}
          {showQrButton ? (
            <button className="btn-primary--l qr-button-text">
              Ver codigo QR
            </button>
          ) : null}
        </>
      )
    };
  } else if (order.status === ORDER_STATUS.ORDER_READY) {
    setTimeout(() => {
      dispatch(updateOrderReady(order.id));
    }, 4000);
    content = {
      title: '¡Tu pedido está listo!',
      description: !order.orderReady ? (
        <p className="description">
          Acércate a la barra para retirar tu pedido
        </p>
      ) : (
        ''
      ),
      body: !order.orderReady ? (
        <OrderStages order={order} />
      ) : (
        <OrderReady showDetails={showDetails} order={order} />
      ),
      stageText: !order.orderReady ? '¡Tu pedido está listo!' : ''
    };
  } else if (order.status === ORDER_STATUS.ORDER_CONFIRMED) {
    content = {
      title: '¡Sigue divirtiéndote!',
      description: (
        <p className="description">
          Te avisaremos cuando sea tu turno para retirar
        </p>
      ),
      stageText: 'Tu pago ha sido confirmado',
      body: <OrderStages order={order} />
    };
  } else if (order.status === ORDER_STATUS.IN_PREPARATION) {
    content = {
      title: '¡Sigue divirtiéndote!',
      description: (
        <p className="description">
          Te avisaremos cuando sea tu turno para retirar
        </p>
      ),
      stageText: 'Pedido en preparación',

      body: <OrderStages order={order} />
    };
  } else if (order.status === ORDER_STATUS.GET_READY) {
    content = {
      title: '¡Sigue divirtiéndote!',
      description: (
        <p className="description">
          Te avisaremos cuando sea tu turno para retirar
        </p>
      ),
      stageText: 'Prepárate para buscar tu pedido',
      body: <OrderStages order={order} />
    };
  } else if (order.status === ORDER_STATUS.ORDER_DELIVERED) {
    content = {
      title: `¡Pedido #${order.idOrder} entregado!`,
      description: (
        <p className="description">Recorda que si tomas no conduzcas</p>
      ),

      body: (
        <div className="order-delivered">
          <Lottie
            animationData={success}
            className="order-delivered__image"
            loop={false}
          />

          <p className="order-delivered__enjoyTxt">¡Que lo disfrutes!</p>
          {/* <button className="btn-primary--l qr-button-text">
            Repetir pedido
          </button> */}
        </div>
      )
    };
  }
  const [intervalID, setintervalID] = useState(null);
  const timer = () => {
    setintervalID(
      setInterval(() => {
        const newNow = new Date().getTime();
        const timeLeft = orderTimeout - Math.floor((newNow - timestamp) / 1000);
        if (timeLeft >= 0 && order?.status === ORDER_STATUS.PAYMENT_PENDING) {
          dispatch(updateTimeLeft({ timeLeft, id: order.id }));
        }
      }, 1000)
    );
  };
  const orders = useSelector(getOrder);
  const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  useEffect(() => {
    const newNowValidate = new Date().getTime();
    const timeLeftValidate =
      orderTimeout - Math.floor((newNowValidate - timestamp) / 1000);

    if (order.timeLeft <= 1 && order?.status === ORDER_STATUS.PAYMENT_PENDING) {
      clearInterval(intervalID);
      dispatch(paymentExpire(order.id));
      dispatch(
        orderStatus({
          idClientePayment: currentUser._id,
          idParty: currentClub?._id
        })
      );
      navigate(routes.partyUser.marketplace);
    }
    if (
      timeLeftValidate <= 0 &&
      order?.status === ORDER_STATUS.PAYMENT_PENDING
    ) {
      clearInterval(intervalID);
      dispatch(paymentExpire(order.id));
      dispatch(
        orderStatus({
          idClientePayment: currentUser._id,
          idParty: currentClub?._id
        })
      );
      navigate(routes.partyUser.marketplace);
    }
  }, [orders?.find((ord) => ord.id === order.id)]);

  useEffect(() => {
    if (order.timeLeft) {
      if (order?.status === ORDER_STATUS.PAYMENT_PENDING) {
        timer();
      }
      if (order?.status === ORDER_STATUS.ORDER_CONFIRMED) {
        clearInterval(intervalID);
      }
    }
  }, [order.status]);
  useEffect(() => {}, []);
  if (!order.timeLeft && order?.status === ORDER_STATUS.PAYMENT_PENDING) {
    dispatch(paymentExpire(order.id));
  }
  return (
    <div className="link-order-card">
      <div className="order-card">
        <Link
          className="link-order-card link-order-card--btn"
          to={`${routes.partyUser.order}/${order.id}`}
        >
          <h2 className="title">{content?.title}</h2>
          {content?.description && content.description}
          <div className="content-body">{content?.body}</div>
          <div
            className="order-card__stage-text"
            style={{ display: content?.stageText ? '' : 'none' }}
          >
            {content?.stageText}
          </div>
        </Link>
        {order.status === ORDER_STATUS.ORDER_DELIVERED ? (
          <p
            className="order-card__closeOrder"
            onClick={() => handleDeleteOrder(order.id)}
          >
            x
          </p>
        ) : null}
        {showDetails && (
          <div className="details">
            <div className="products">
              {order.products?.map((prod) => (
                <div className="row" key={prod?.id}>
                  <div className="quantity-and-image">
                    {prod.image.length > 1 ? (
                      <div className="quantity-and-image__pack-wrapper">
                        {prod.image?.map((img) => (
                          <img
                            className="pack-image"
                            key={img}
                            src={img}
                            alt="pack"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        className="quantity-and-image__image"
                        src={prod.image}
                        alt="drink"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="title">
                    {prod?.title}
                    <span className="quantity">
                      x
                      <span className="quantity__number">
                        {' '}
                        {prod?.quantity}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="order-total">
              Total: <span>{formatNumber(order?.total)}€</span>
            </p>
            <p className="order-number">N˚ de pedido #{order?.idOrder}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function OrderCard({
  order,
  showDetails,
  showImage,
  ordersLoaded
}) {
  const orderExists = useSelector(getOrderExists);

  if (!orderExists) return;

  if (!order.length) {
    return <OrderCardSimple order={order} showDetails={showDetails} />;
  }

  return (
    <Swiper
      pagination={{
        dynamicBullets: true
      }}
      modules={[Pagination]}
      spaceBetween={30}
    >
      {order.map((ord, index) => (
        <SwiperSlide key={ord.id}>
          <OrderCardSimple
            ordersLoaded={ordersLoaded}
            order={{ ...ord, index }}
            showDetails={showDetails}
            id={ord.id}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div className="followSteps-banner">
          <img className="followSteps-banner__image" src={followSteps} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
