import React from "react";
import Input from "../Input/Input";
import "./Searchbar.scss";
const Searchbar = () => {
  const date = new Date().toDateString();
  return (
    <div className="searchbar-space">
      <div className="searchbar-container">
        <div>
          <h2 className="heading-primary">El Admin Pa</h2>
          <h3>{date}</h3>
        </div>
        <div className="search">
          <Input
            inputPops={{
              type: "text",
              placeholder: "Buscar",
            }}
          />
        </div>
        <button className="reporte btn-primary btn-primary--s">Reporte</button>
      </div>
    </div>
  );
};

export default Searchbar;
