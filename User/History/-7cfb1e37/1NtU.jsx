import "./AdsSwiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import adImg from "../../../assets/ad.jpg";

const ads = [
  {
    id: 1,
    tag: "Techno",
    heading: "Techno Boliche Party",
    subheading: "Viernes 26 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
  {
    id: 2,
    tag: "Cachengue",
    heading: "Cachengue Boliche Party",
    subheading: "Sábado 27 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
  {
    id: 3,
    tag: "Techno",
    heading: "Techno Boliche Party",
    subheading: "Viernes 26 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
];

export default function AdsSwiper() {
  return (
    <Swiper className="ads-swiper" pagination modules={[Pagination]}>
      {ads.map((ad) => (
        <SwiperSlide className="slide" key={ad.id}>
          <div
            className="background"
            style={{ backgroundImage: `url(${ad.image})` }}
          >
            <div className="content">
              <p className="label">{ad.tag}</p>
              <p className="subheading">{ad.subheading}</p>
              <h2 className="heading">{ad.heading}</h2>
              <a className="button" href={ad.link}>
                Saber más
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
