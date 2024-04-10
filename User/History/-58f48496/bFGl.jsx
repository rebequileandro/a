import "./loader.css";
import React from "react";
import { PropTypes } from "prop-types";

const Loader = ({ size, type }) => {
  return (
    <svg
      viewBox="25 25 50 50"
      className={`loader-xnodui loader-xnodui--${size} loader-xnodui--${
        type ? type : "primary"
      }`}
    >
      <circle className="loader-xnodui-circle" r="20" cy="50" cx="50" />
    </svg>
  );
};
Loader.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
};

Loader.defaultProps = {
  size: "m",
};

export default Loader;
