import React from "react";
import "./Tooltip.css";

const Tooltip = ({ text, placement = "up", children }) => {
  return (
    <div className="tooltip-xnodui" tooltip={text} flow={placement}>
      {children}
    </div>
  );
};

export default Tooltip;
