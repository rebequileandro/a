import React from "react";
import "./categories.scss";
const Categories = ({ title, icon, more, slider, data }) => {
  return (
    <div className="categories">
      <div className="categories__header-container">
        <div className="categories__title-container">
          <img src={icon} alt="icon" className="categories__icon" />
          <h3 className="heading-secondary heading-secondary--sub">{title}</h3>
        </div>
        {more && (
          <button className="categories__see-more-btn">Ver todos</button>
        )}
      </div>
      {slider ? (
        <div></div>
      ) : (
        data?.map((item) => (
          <div>
            <img src={item.icon} alt="icon" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
