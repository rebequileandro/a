import React from "react";
import "./loading.scss";
import logo from "../../assets/logo.png";
const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="loading" loading="lazy" className="loading__spin" />
    </div>
  );
};

export default Loading;
