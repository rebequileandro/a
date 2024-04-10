import React from "react";
import "./audioplayerPopup.scss";
import { motion, AnimatePresence } from "framer-motion";

const AudioplayerPopup = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
          className="audioplayerpopup"
        >
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(0)" }}
            className="audioplayerpopup__popup"
            onClick={() => setIsOpen(false)}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioplayerPopup;
