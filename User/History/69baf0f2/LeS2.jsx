import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css"; // Estilos CSS para el Tooltip

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);
  const tooltipContainerRef = useRef(null);

  useEffect(() => {
    const handlePosition = () => {
      if (tooltipRef.current && childrenRef.current) {
        const childRect = childrenRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        const newPosition = { top: 0, left: 0 };

        // Detecta la posición ideal para el tooltip
        if (childRect.bottom + tooltipRect.height > window.innerHeight) {
          newPosition.top = childRect.top - tooltipRect.height;
        } else {
          newPosition.top = childRect.bottom;
        }

        if (childRect.right + tooltipRect.width > window.innerWidth) {
          newPosition.left = childRect.left - tooltipRect.width;
        } else {
          newPosition.left = childRect.right;
        }

        setPosition(newPosition);
        setIsVisible(true);
      }
    };

    handlePosition();

    // Event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", handlePosition);

    return () => {
      window.removeEventListener("resize", handlePosition);
    };
  }, [isVisible]);

  const childrenRef = useRef(null);

  useEffect(() => {
    tooltipContainerRef.current.addEventListener("mouseover", (event) => {
      setIsVisible(true);
    });

    return () => {
      tooltipContainerRef.current.removeEventListener("mouseover", (event) => {
        setIsVisible(true);
      });
    };
  }, [tooltipContainerRef.current]);

  return (
    <div className="tooltip-container" ref={tooltipContainerRef}>
      {/* Children ref */}
      {React.cloneElement(children, { ref: childrenRef })}

      {/* Tooltip */}
      {isVisible && (
        <div
          className="tooltip"
          ref={tooltipRef}
          style={{ top: position.top, left: position.left }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
