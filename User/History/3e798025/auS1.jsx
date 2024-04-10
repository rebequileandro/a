import React from "react";

const Recorder = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      {...props}
    >
      <title>{"ionicons-v5-g"}</title>
      <path
        d="M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
      <path
        d="M268,384H84a52.15,52.15,0,0,1-52-52V180a52.15,52.15,0,0,1,52-52H268.48A51.68,51.68,0,0,1,320,179.52V332A52.15,52.15,0,0,1,268,384Z"
        style={{
          fill: "none",
          stroke: "#000",
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  );
};

export default Recorder;
