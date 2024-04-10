import React from "react";
import "./2023.scss";
import Calendar from "../Calendar";
const C2023 = ({ onClick }) => {
  return (
    <div>
      <Calendar year="2023" onClick={onClick} />
    </div>
  );
};

export default C2023;
