import React from "react";
import "./back_button.scss";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.webp";
const BackButton = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      className="back-btn"
      onClick={() => (onClick ? onClick() : navigate(-1))}
      title="Volver atrás"
    >
      {/* <svg
        width="38"
        height="34"
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0664 0.681517L7.88082 14.6264L37.1131 15.8714L36.9616 19.4273L7.72936 18.1822L21.6743 33.3679L16.6456 33.1537L0.998514 16.1144L18.0377 0.467335L23.0664 0.681517Z"
          fill="#00FDFF"
        />
      </svg>
      VOLVER */}
      <img
        className="back-btn__image"
        src={back}
        alt="volver"
        title="Volver atrás"
        loading="lazy"
      />
    </button>
  );
};

export default BackButton;
