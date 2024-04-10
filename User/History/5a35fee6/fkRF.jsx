import React from "react";
import "./modal.css";

const Modal = ({ align = "center" }) => {
  return (
    <div className={`modal-overlay-xnodui modal-overlay-xnodui--${align}`}>
      <div className="modal-container-xnodui">Modal</div>
    </div>
  );
};

export default Modal;
