import React from "react";
import "./card-modal.scss";
import { useSelector } from "react-redux";
import { Heart, Play } from "../SVG";
const CardModal = () => {
  const modaData = useSelector((state) => state.mc);
  const datamodal = {
    author: "Laboratorio FARMA",
    authorImage: "/assets/creator.png",
  };
  return (
    <div
      className={`card-modal-overlay ${
        modaData === "initial"
          ? ""
          : modaData
          ? "card-modal-overlay--show"
          : "card-modal-overlay--hide"
      }`}
    >
      <div
        className={`card-modal ${
          modaData === "initial"
            ? ""
            : modaData
            ? "card-modal--show"
            : "card-modal--hide"
        }`}
      >
        <svg
          width={218}
          height={126}
          viewBox="0 0 218 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g clipPath="url(#clip0_566_109)">
            <path
              d="M15.7155 116.191C25.2953 111.962 31.6924 106.846 36.8385 100.396C40.3968 95.9411 43.445 90.7661 46.5564 84.7771L49.4022 86.6141L49.4118 86.5981C51.24 87.8321 53.1592 89.0161 55.0171 90.2141L55.1902 90.3221C51.9506 96.4951 48.7028 101.924 44.822 106.785C38.6516 114.513 31.0752 120.606 19.8207 125.574L15.7155 116.191ZM23.8333 65.8401L19.2534 64.3661L17.2144 64.0331L15.1309 63.7601C10.8328 63.1111 6.35611 63.0041 1.63581 63.6061L0.314209 53.4711C23.9939 50.4471 41.1912 61.5581 58.4185 72.6871C60.3628 73.9431 62.3071 75.2001 63.8764 76.1961C70.7336 80.5411 77.678 84.6111 85.014 87.3501L93.843 89.8901C99.472 91.0161 105.469 91.2461 112.012 90.1801L97.879 37.7251C88.108 40.8111 81.188 46.3651 75.652 53.3161C71.8 58.1491 68.5517 63.7341 65.4706 69.6771L62.1606 67.5421C61.9785 67.4111 61.7905 67.2891 61.5902 67.1741C60.0084 66.1531 58.43 65.1341 56.8425 64.1221C60.0485 57.9931 63.4921 52.1691 67.668 46.9271C74.553 38.2801 83.276 31.4011 95.814 27.6781C109.196 23.7022 120.757 24.2426 131.314 27.2558C139.703 29.6491 147.297 33.5551 154.624 37.9561C153.72 39.7671 152.806 41.6341 151.869 43.5631C151.282 44.7771 150.695 45.9831 150.107 47.1831C144.55 43.8091 138.898 40.7441 132.989 38.5541L124.167 36.0321C118.403 34.8951 104.944 35.4941 97.879 37.7251L112.012 90.1801C122.083 87.1281 136.822 79.7121 142.464 72.6321C148.408 65.1731 152.923 55.9191 157.582 46.3201C162.842 35.4841 167.317 26.647 173.295 19.1594C179.464 11.4343 187.042 5.33842 198.297 0.370117L202.397 9.75511C192.82 13.9855 186.423 19.1021 181.276 25.5468C175.942 32.2311 171.745 40.5391 166.779 50.7621C161.853 60.9091 157.078 70.6941 150.448 79.0211C143.559 87.6661 134.842 94.5431 122.302 98.2701C108.92 102.245 97.359 101.705 86.802 98.6921C76.459 95.7391 67.3241 90.4931 58.4114 84.8461C56.3011 83.5081 54.5763 82.3951 52.8567 81.2821C43.4812 75.2261 34.1158 69.1761 23.8333 65.8401ZM193.417 59.8191L202.162 62.0571C206.707 62.8171 211.459 62.9801 216.482 62.3381L217.801 72.4771C198.62 74.9221 183.696 68.1021 169.564 59.5051C170.543 57.5251 171.513 55.5301 172.492 53.5191C173.028 52.4091 173.558 51.3261 174.081 50.2611C180.314 54.0781 186.671 57.5221 193.417 59.8191Z"
              fill="url(#paint0_linear_566_109)"
            />
            <path d="M128 44H88V79H128V44Z" fill="url(#pattern0)" />
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#image0_566_109"
                transform="matrix(0.00497159 0 0 0.00568182 0.0153409 0)"
              />
            </pattern>
            <linearGradient
              id="paint0_linear_566_109"
              x1={10.7097}
              y1={89.0501}
              x2={211.5}
              y2={39.5001}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21E701" />
              <stop offset={1} />
            </linearGradient>
            <clipPath id="clip0_566_109">
              <rect width={218} height={126} fill="white" />
            </clipPath>
            <image
              id="image0_566_109"
              width={200}
              height={176}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACwCAYAAABKKSEyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTIyQzQ4RkQ4RkI4MTFFREFEOTdGMkJFOTc0RjNGNUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTIyQzQ4RkU4RkI4MTFFREFEOTdGMkJFOTc0RjNGNUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjJDNDhGQjhGQjgxMUVEQUQ5N0YyQkU5NzRGM0Y1RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjJDNDhGQzhGQjgxMUVEQUQ5N0YyQkU5NzRGM0Y1RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plr7vKgAABlhSURBVHja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"
            />
          </defs>
        </svg>
        <img
          className="intro-slider__medbot"
          src="/assets/intro-slider/medbot.svg"
          alt="medbot+"
          width={178}
          height={35}
        />
        <p className="heading-tertiary heading-tertiary--sub">
          Completa la prueba con la IA de medbot para ganar MDCx y desbloquear
          la totalidad del caso.
        </p>
        <div className="card-modal__author">
          <div className="card-modal__author-img-container">
            <img
              className="card-modal__author-img"
              src={datamodal.authorImage}
              alt="author"
            />
          </div>
          <div className="card-modal__author-info">
            <p className="highlighted text-primary">Caso creado por:</p>
            <h5 className="heading-tertiary heading-tertiary--main highlighted">
              {datamodal.author}
            </h5>
          </div>
          <Heart />
        </div>
        <button className="card-modal__button">
          Comenzar
          <Play />
        </button>
      </div>
    </div>
  );
};

export default CardModal;
