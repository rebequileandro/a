import React, { useEffect } from "react";
import "./select_month.scss";
import "swiper/css";
import "swiper/css/pagination";
import { formatDateMont } from "../../utils/format-date";
import data from "../../models/data";
import C2022 from "../Calendar/2022/2022";
import C2023 from "../Calendar/2023/2023";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const SelectMonth = ({ month, setMonth }) => {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const handleClick = (y, m) => {
    const monthFilter = data.bzrpTour[y].filter(
      (e) => formatDateMont(e.date) === m
    );
    if (monthFilter.length) {
      setMonth(monthFilter);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setscreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {!month && (
        <div className="select-month-wrapper">
          {screenWidth < 600 ? (
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <C2022 onClick={handleClick} />
              </SwiperSlide>
              <SwiperSlide>
                <C2023 onClick={handleClick} />
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="select-month-tour">
              <C2022 onClick={handleClick} />
              <C2023 onClick={handleClick} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SelectMonth;
