import React from "react";
import "./modal.css";

const Modal = ({ align = "center", children }) => {
  return (
    <div className={`modal-overlay-xnodui modal-overlay-xnodui--${align}`}>
      <div className="modal-container-xnodui">{children}</div>
    </div>
  );
};

export default Modal;
