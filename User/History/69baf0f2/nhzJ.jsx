import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-xnodui" tooltip={text} flow="up">
      {children}
    </div>
  );
};

export default Tooltip;
