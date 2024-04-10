import React from "react";
import "./audioplayerPopup.scss";
import { motion, AnimatePresence } from "framer-motion";
import Audioplayer from "../Audioplayer/Audioplayer";

const AudioplayerPopup = ({ isOpen, setIsOpen, audio }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ transform: "opacity: 0" }}
            animate={{ transform: "opacity: 1" }}
            exit={{ transform: "opacity: 0" }}
            className="audioplayerpopup"
          >
            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
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
          <div
            className="audioplayerpopup-overlay"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default AudioplayerPopup;
