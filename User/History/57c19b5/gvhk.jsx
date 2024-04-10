import React from "react";
import "./select_month.scss";
import { formatDateMont } from "../../utils/format-date";
import data from "../../models/data";
import C2022 from "../Calendar/2022/2022";
import C2023 from "../Calendar/2023/2023";
import device from "../../utils/device";
import { Slider } from "infinite-react-carousel";

const SelectMonth = ({ month, setMonth }) => {
  const handleClick = (y, m) => {
    const monthFilter = data.bzrpTour[y].filter(
      (e) => formatDateMont(e.date) === m
    );
    if (monthFilter.length) {
      setMonth(monthFilter);
    }
  };
  const settings = {
    wheel: true,
    wheelScroll: 1,
    arrows: false,
    slidesToShow: 1,
  };
  console.log(window.innerWidth);
  return (
    <>
      {!month && (
        <div className="select-month-wrapper">
          {device() === "iPhone" || device() === "Android" ? (
            <Slider {...settings}>
              <C2022 onClick={handleClick} />
              <C2023 onClick={handleClick} />
            </Slider>
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
