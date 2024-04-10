import React from "react";
import "./categories.scss";
const Categories = ({ title, icon }) => {
  return (
    <div className="categories">
      <div className="categories__title-container">
        <img src={icon} alt="icon" />
        <h3 className="heading-secondary heading-secondary--sub">{title}</h3>
      </div>
    </div>
  );
};

export default Categories;
