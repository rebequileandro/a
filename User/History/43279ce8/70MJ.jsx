import React, { useEffect, useRef, useState } from "react";
import "./bottom-sheet.scss";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const BottomSheet = ({ onTouch }) => {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    // <AnimatePresence>
    onTouch && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`bottom-sheet-wrapper ${
          isOpen && "bottom-sheet-wrapper--overlay"
        }`}
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
            visible: { y: "25%" },
            hidden: { y: "115%" },
          }}
          dragConstraints={{ top: 0 }}
          dragElastic={0.2}
          style={{
            display: "inline-block",
            background: "linear-gradient(to right, #00fdff, #00d0ff, #00d0ff)",
            width: "70vw",
            height: "100%",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <div className="bottom-sheet__container ">
            <div className="bottom-sheet__grap" />
          </div>
        </motion.div>
      </motion.div>
    )
    // </AnimatePresence>
  );
};

export default BottomSheet;
