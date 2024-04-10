// import "./BarPopup.scss";

import { AnimatePresence, motion } from "framer-motion";

export const BarPopup = ({ setIsPopUp, setMethod, isPopUp }) => {
  const handleClick = (method) => {
    setMethod(method);
    setIsPopUp(false);
  };
  return (
    <AnimatePresence>
      {isPopUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popoup-overlay"
          onClick={() => setIsPopUp(false)}
        >
          <motion.div
            initial={{ transform: "scale(0.5)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(0)" }}
            className="popup"
          >
            <div className="content" onClick={() => handleClick("entrada")}>
              <h2>Entrada</h2>
            </div>
            <hr />
            <div className="content" onClick={() => handleClick("cinema")}>
              <h2>Cinema</h2>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
