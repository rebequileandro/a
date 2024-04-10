import React from "react";
import "./categories.scss";

import { CardSecondary, CardSlider } from "@/components";

const Categories = ({ title, Icon, more, slider, data }) => {
  return (
    <div className="categories">
      <div className="categories__header-container">
        <div className="categories__title-container">
          <Icon />
          <h3 className="heading-secondary heading-secondary--sub">{title}</h3>
        </div>
        {more && (
          <button className="categories__see-more-btn">Ver todos</button>
        )}
      </div>
      {slider ? (
        <CardSlider dataSlider={data} />
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
