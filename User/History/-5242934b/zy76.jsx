import './OrderCard.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import OrderCardSimple from './OrderCardSimple';
import followSteps from '../../../assets/Fiestero/Images/ads.webp';

export default function OrderCard({
  order,
  showDetails,
  showImage,
  ordersLoaded
}) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true
      }}
      modules={[Pagination]}
      spaceBetween={30}
    >
      {order?.map((ord, index) => (
        <>
          <SwiperSlide key={ord.id}>
            <OrderCardSimple
              ordersLoaded={ordersLoaded}
              order={{ ...ord, index }}
              showDetails={showDetails}
              id={ord.id}
            />
          </SwiperSlide>
        </>
      ))}
      <SwiperSlide>
        <div className="followSteps-banner">
          <img className="followSteps-banner__image" src={followSteps} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
