import React from "react";
import "./modal.css";
import X from "../Icons/X";

const Modal = ({ align = "center", children }) => {
  return (
    <div className={`modal-overlay-xnodui modal-overlay-xnodui--${align}`}>
      <div className="modal-container-xnodui">
        <button>
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
