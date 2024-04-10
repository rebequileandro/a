import React from "react";
import "./categories.scss";
import { Button } from "@/components";
const Categories = ({ title, icon, more }) => {
  return (
    <div className="categories">
      <div className="categories__title-container">
        <img src={icon} alt="icon" className="categories__icon" />
        <h3 className="heading-secondary heading-secondary--sub">{title}</h3>
        {more && <Button size="s">Ver todos</Button>}
      </div>
    </div>
  );
};

export default Categories;
