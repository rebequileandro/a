import React from "react";
import "./Tooltip.css";
import { PropTypes } from "prop-types";

const Tooltip = ({ text, placement = "up", children }) => {
  return (
    <div className="tooltip-xnodui" tooltip={text} flow={placement}>
      {children}
    </div>
  );
};
Tooltip.propTypes = {
  placement: PropTypes.oneOf(["up", "down", "left", "right"]),
};
export default Tooltip;
