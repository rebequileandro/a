import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import { CardSecondary } from "@/components";
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
            <CardSecondary
              key={item.title}
              link={item.link}
              Icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
