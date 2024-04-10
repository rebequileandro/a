import React from "react";

const Categories = ({ title, icon }) => {
  return (
    <div className="categories">
      <div className="categories__title-container">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Categories;
