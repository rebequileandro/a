import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
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
        <div className="categories__items-container">
          {data?.map((item) => (
            <Link className="categories__item" to={item.link}>
              <img src={item.icon} alt="icon" />
              <div>
                <h4 className="heading-tertiary heading-tertiary--main">
                  {item.title}
                </h4>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
