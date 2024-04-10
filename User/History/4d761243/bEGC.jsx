import React from "react";
import CashHanding from "../Wedrink/CashHanding/CashHanding";
import Inventory from "../Wedrink/Inventory/Inventory";
import Statistics from "../Wedrink/Statistics/Statistics";
import "./WeDrinkHDIW.scss";
const WedrinkHDIW = () => {
  return (
    <div className="wedrink-work-container" id="como-funciona">
      <CashHanding />
      <Inventory />
      <Statistics />
    </div>
  );
};

export default WedrinkHDIW;
