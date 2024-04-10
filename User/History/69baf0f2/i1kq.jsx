import React, { Fragment } from "react";
import "./Tooltip.css";
import { PropTypes } from "prop-types";

const Tooltip = ({ text, placement = "up", children }) => {
  return (
    <Fragment className="tooltip-xnodui" tooltip={text} flow={placement}>
      {children}
    </Fragment>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string,
  placement: PropTypes.oneOf(["up", "down", "left", "right"]),
};
export default Tooltip;
