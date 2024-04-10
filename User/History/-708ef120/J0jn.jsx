import React from "react";

const Heart = (props) => {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16.5} cy={16.5} r={16.5} fill="url(#paint0_linear_89_2217)" />
      <path
        d="M13.125 11C10.8469 11 9 12.7217 9 14.8455C9 18.691 13.875 22.1869 16.5 23C19.125 22.1869 24 18.691 24 14.8455C24 12.7217 22.1531 11 19.875 11C18.48 11 17.2463 11.6457 16.5 12.634C16.1196 12.1289 15.6143 11.7167 15.0268 11.4323C14.4393 11.1478 13.787 10.9996 13.125 11Z"
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_2217"
          x1={33.7302}
          y1={16.3812}
          x2={0.741084}
          y2={16.3812}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB36A3" />
          <stop offset={1} stopColor="#1F0546" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Heart;
