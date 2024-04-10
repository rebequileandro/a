import React from "react";

const Arrow = ({ isOpen, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="auto"
      stroke="#222"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export default Arrow;
