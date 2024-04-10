import React from "react";
import "./loading.scss";
import loading from "../../assets/loader.png";
const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" loading="lazy" />
    </div>
  );
};

export default Loading;
