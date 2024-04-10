import React from "react";
import "./mdcx.scss";
import { MDCxIcon } from "../SVG";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";

const Mdcx = () => {
  //   const user = useSelector(currentUser);
  const user = {
    mdcx: "00000",
  };
  return (
    <div className="mdcx-container">
      <MDCxIcon />
      <span>{user.mdcx}</span>
    </div>
  );
};

export default Mdcx;
