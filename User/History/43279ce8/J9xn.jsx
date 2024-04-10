import React, { useEffect, useRef, useState } from "react";
import "./bottom-sheet.scss";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const BottomSheet = ({ onTouch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("visible");
      setIsOpen(true);
    }
  }

  useEffect(() => {
    !isOpen ? controls.start("hidden") : controls.start("visible");
  }, [controls, isOpen]);
  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  console.log(isMobile);
  return (
    <div
      className={`bottom-sheet-wrapper ${
        !onTouch && "bottom-sheet-wrapper--hidden"
      } ${isOpen && "bottom-sheet-wrapper--overlay"}`}
    >
      <motion.div
        className="bottom-sheet"
        drag="y"
        onDragEnd={onDragEnd}
        initial="hidden"
        animate={controls}
        // transition={{
        //   type: "spring",
        //   damping: 40,
        //   stiffness: 400,
        // }}
        variants={{
          visible: { y: "55%" },
          hidden: { y: "115%" },
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        style={{
          width: isMobile ? "100vw" : "70vw",
        }}
      >
        <div className="bottom-sheet__container ">
          <div className="bottom-sheet__top ">
            <h2 className="bottom-sheet__text ">BZRP</h2>
            <div
              className="bottom-sheet__grap"
              onClick={() => setIsOpen(!isOpen)}
            />
            <h2 className="bottom-sheet__text ">BZRP</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BottomSheet;
