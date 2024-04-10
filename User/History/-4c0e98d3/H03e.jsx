import "./ClubPopup.scss";

import { AnimatePresence, motion } from "framer-motion";

import ClubSelector from "../../../ClubSelector/ClubSelector";
import IconClose from "../../../../assets/icons/icon_close.svg";

export default function ClubPopup({ openClubPopup, setOpenClubPopup }) {
  return (
    <AnimatePresence>
      {openClubPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="club-popup"
        >
          <img
            className="icon-close"
            src={IconClose}
            alt=""
            onClick={() => setOpenClubPopup(false)}
          />
          <h1>Elige una nueva dirección:</h1>
          <ClubSelector closePopup={() => setOpenClubPopup(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
