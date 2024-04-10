import './OrderDetails.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/effect-flip';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../../components/global/Header/Header';
import OrderCard from '../../../components/partyUser/OrderCard/OrderCard';

import {
  getOrder,
  orderStatus,
  paymentExpire
} from '../../../redux/slices/partyUser/order';

import routes from '../../../models/routes.models';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { Loading } from '../../../components/global/Loader/Loader';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const swiperBtn = useSwiper();
  const orders = useSelector(getOrder);
  const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);

  const PICK_UP_LABEL = '¿Dónde retiro?';
  const SEE_ORDER_LABEL = 'Ver mi pedido';

  const [anchorText, setAnchorText] = useState(PICK_UP_LABEL);
  const [currentSlide, setCurrentSlide] = useState(true);
  const [order, setOrder] = useState(null);
  const handleSlideChange = () => {
    setCurrentSlide(!currentSlide);
    currentSlide == true
      ? setAnchorText(PICK_UP_LABEL)
      : setAnchorText(SEE_ORDER_LABEL);
  };
  const getStatus = () => {
    dispatch(
      orderStatus({
        idClientePayment: currentUser._id,
        idParty: currentClub?._id
      })
    );
  };
  useEffect(() => {
    getStatus();
  }, []);

  useEffect(() => {
    setOrder(orders?.find((ord) => ord.id === id));
  }, [orders]);

  useEffect(() => {
    window.addEventListener('focus', () => {
      getStatus();
    });

    return () => {
      window.removeEventListener('focus', () => {
        getStatus();
      });
    };
  }, []);

  return (
    <>
      <Header
        title={'Tu pedido'}
        backbutton={() => navigate(routes.partyUser.marketplace)}
      />
      {!order ? (
        <Loading />
      ) : (
        <div className="order-details-container">
          <>
            {order ? (
              <Swiper
                className="slider-order-container"
                modules={[Navigation, EffectFlip]}
                navigation={{
                  nextEl: '.anchor-primary--nextEl',
                  prevEl: '.anchor-primary--prevEl'
                }}
                loop={true}
                slidesPerView={1}
                effect={'flip'}
                onSlideChange={handleSlideChange}
              >
                <SwiperSlide
                  key={order.id}
                  className="slider-order-container__slide"
                >
                  <OrderCard order={order} showDetails={true} />
                </SwiperSlide>
                <SwiperSlide
                  key={order.idOrder}
                  className="slider-order-container__slide"
                >
                  <div className="order-card order-card--margin" id="prevEl">
                    <h2 className="order-card__title">¡Sigue divirtiéndote!</h2>
                    <h3 className="heading-tertiary-sub ">
                      Retiras por{' '}
                      <label className="order-card__label-image">
                        {order.nameBar}
                      </label>
                      ,
                    </h3>
                    <h3 className="heading-tertiary-sub heading-tertiary-sub--margin">
                      en el Piso{' '}
                      <label className="order-card__label-image">
                        {order.nameFloor}
                      </label>
                      .
                    </h3>
                    <div className="order-image-container">
                      <img
                        src={order.imageBar}
                        alt="bar-image"
                        className="order-image-container__image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ) : (
              navigate(routes.partyUser.marketplace)
            )}
          </>
          {anchorText == PICK_UP_LABEL ? (
            <div className="layout-primary">
              <button
                className="anchor-primary--nextEl"
                onClick={() => swiperBtn?.slideNext()}
              >
                {anchorText}
              </button>
            </div>
          ) : (
            <div className="layout-primary">
              <button
                className="anchor-primary--prevEl"
                onClick={() => swiperBtn?.slidePrev()}
              >
                {anchorText}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default OrderDetails;

{
  /* <div className="slider-order-container">
                <OrderCard order={order} showDetails={true} />

                <div className="order-card order-card--margin" id="image-id">
                  <h2 className="order-card__title">¡Sigue divirtiéndote!</h2>
                  <h3 className="heading-tertiary-sub ">
                    Retiras por{' '}
                    <label className="order-card__label-image">
                      {order.nameBar}
                    </label>
                    ,
                  </h3>
                  <h3 className="heading-tertiary-sub heading-tertiary-sub--margin">
                    en el Piso{' '}
                    <label className="order-card__label-image">
                      {order.nameFloor}
                    </label>
                    .
                  </h3>
                  <div className="order-image-container">
                    <img
                      src={order.imageBar}
                      alt="bar-image"
                      className="order-image-container__image"
                    />
                  </div>
                </div>
              </div> */
}
