import React from "react";
import "./card-primary.scss";
import "./card-primary.scss";
import { Play, MDCx } from "../../SVG";
import { useDispatch } from "react-redux";
import { setModaData } from "@/store/slice/mc.slice";
const CardPrimary = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="card-primary" onClick={() => dispatch(setModaData(true))}>
      <MDCx className="card-primary__mdcx" />
      <div className="card-primary__content-container">
        <span className="text-primary card-primary__title">{props.title}</span>
        <button className="card-primary__button">
          <Play />
        </button>
      </div>
    </div>
  );
};

export default CardPrimary;
