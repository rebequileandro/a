import React from "react";

const Comp = ({ backgroundColor }) => {
  const color = backgroundColor ? backgroundColor : null;
  return <div style={color}>Comp</div>;
};

export default Comp;
