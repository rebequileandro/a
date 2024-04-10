import "./Button.scss";

import React from "react";

export default function Button({ children, href, onClick }) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    } else {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      <span className="content">{children}</span>
    </button>
  );
}
