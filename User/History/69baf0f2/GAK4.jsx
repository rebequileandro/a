import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    placement: "bottom",
  });
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handlePosition = () => {
      if (tooltipRef.current && childrenRef.current) {
        const childRect = childrenRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        const newPosition = { top: 0, left: 0, placement: "" };

        // Detecta la posición ideal para el tooltip
        if (childRect.bottom + tooltipRect.height > window.innerHeight) {
          newPosition.top = childRect.top - tooltipRect.height;
          newPosition.placement = "top";
        } else {
          newPosition.top = childRect.bottom;
          newPosition.placement = "bottom";
        }

        if (childRect.right + tooltipRect.width > window.innerWidth) {
          newPosition.left = childRect.left - tooltipRect.width;
          newPosition.placement = "left";
        } else {
          newPosition.left = childRect.right;
          newPosition.placement = "right";
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

  // Maneja eventos de scroll para ajustar la posición del tooltip
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Oculta el tooltip durante el scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const childrenRef = useRef(null);

  return (
    <div
      className="tooltip-container"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {/* Children ref */}
      {React.cloneElement(children, { ref: childrenRef })}

      {/* Tooltip */}
      {isVisible && (
        <div
          className={`tooltip tooltip-${position.placement}`}
          ref={tooltipRef}
          style={{ top: position.top, left: position.left }}
        >
          {text}
          {/* Flecha del tooltip */}
          <div
            className={`tooltip-arrow tooltip-arrow-${position.placement}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
