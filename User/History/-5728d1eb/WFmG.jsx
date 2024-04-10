import React from "react";

const X = ({ color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.4em"
      height="14"
      stroke={color ?? "#fff"}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default X;
