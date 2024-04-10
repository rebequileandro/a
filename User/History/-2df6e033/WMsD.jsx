import React from "react";

const Comp = ({ backgroundColor }) => {
  return <div style={backgroundColor && { backgroundColor }}>Comp</div>;
};

export default Comp;
