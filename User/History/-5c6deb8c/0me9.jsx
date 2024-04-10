import React from "react";
import "./mdcx.scss";
import { MDCxIcon } from "../SVG";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";

const Mdcx = () => {
  const user = useSelector(currentUser);
  return (
    <div className="mdcx-container">
      <MDCxIcon />
    </div>
  );
};

export default Mdcx;
