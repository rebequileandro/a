import React from "react";
import "./audioplayerPopup.scss";
import { motion, AnimatePresence } from "framer-motion";
import Audioplayer from "../Audioplayer/Audioplayer";

const AudioplayerPopup = ({ isOpen, setIsOpen, audio }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: "1" }}
          exit={{ opacity: "0" }}
          className="audioplayerpopup"
        >
          <div
            className="audioplayerpopup-overlay"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ transform: "scaleY(0)" }}
            animate={{ transform: "scaleY(1)" }}
            exit={{ transform: "opacity(0)" }}
            className="audioplayerpopup__popup"
          >
            <Audioplayer audio={audio} />
            <button
              className="audioplayerpopup__popup__cancel"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioplayerPopup;
