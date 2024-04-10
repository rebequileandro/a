import './AdsSwiper.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import adImg from '../../../assets/ad.jpg';
import followSteps from '../../../assets/Fiestero/Images/ads.png';
const ads = [
  {
    id: 1,
    tag: 'Techno',
    heading: 'Techno Boliche Party',
    subheading: 'Viernes 26 Noviembre, 22:00',
    image: adImg,
    link: '#'
  },
  {
    id: 2,
    tag: 'Cachengue',
    heading: 'Cachengue Boliche Party',
    subheading: 'Sábado 27 Noviembre, 22:00',
    image: adImg,
    link: '#'
  },
  {
    id: 3,
    tag: 'Techno',
    heading: 'Techno Boliche Party',
    subheading: 'Viernes 26 Noviembre, 22:00',
    image: adImg,
    link: '#'
  }
];

export default function AdsSwiper() {
  return (
    <Swiper
      className="slide-container"
      pagination={{
        dynamicBullets: true
      }}
      modules={[Pagination]}
      spaceBetween={20}
    >
      <SwiperSlide>
        <div className="followSteps-banner">
          {' '}
          <img
            className="followSteps-banner__image"
            src={followSteps}
            alt="shoozea"
          />
        </div>
      </SwiperSlide>
      {/* Queda comentado hasta que tengamos banners en los boliches por el momento solo queda el de onboarding */}
      {/* {ads.map((ad) => (
        <SwiperSlide className="slide" key={ad.id}>
          <div
            className="slide__background"
            style={{ backgroundImage: `url(${ad.image})` }}
          >
            <div className="slide-content">
              <p className="slide-content__label">{ad.tag}</p>
              <p className="slide-content__subheading">{ad.subheading}</p>
              <h2 className="slide-content__heading">{ad.heading}</h2>
              <a className="slide-content__button" href={ad.link}>
                Saber más
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}
