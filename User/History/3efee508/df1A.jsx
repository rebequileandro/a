import React, { useEffect } from "react";
import "./live-tour-2024.scss";
import { useAppContext } from "../../../../context/AppProvider";
import { getNextDates } from "../../../../services/nextDates.services";
import { ACTION_TYPE } from "../../../../models/action.type.models";
import { useNavigate } from "react-router-dom";
import fakeData from "./data.json";
import polaroids from "./polaroids.json";
import Card from "./Card/Card";
import { motion, AnimatePresence } from "framer-motion";
import ClosedIcon from "../../../../components/SVG/ClosedIcon";
import BZRP from "../../../../components/SVG/BZRP";
import { useState } from "react";
import Loader from "../../../../components/Loader/Loader";

polaroids.sort(() => Math.random() - 0.5);

const LiveTour2024 = ({ isVisible, setClosed }) => {
  const [animationNeon, setAnimationNeon] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { dispatch, nextDates } = useAppContext();

  const getnextDates = async () => {
    const result = await getNextDates();
    dispatch({
      type: ACTION_TYPE.NEXT_DATES,
      value: result,
    });
  };
  useEffect(() => {
    getnextDates();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setAnimationNeon(true);
    }, 5000);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  // const getPolaroid = () => {
  //   let index = Math.floor(Math.random() * polaroids.length - 1) + 1;
  //   let selected = polaroids[index];
  //   return selected;
  // };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="live-tour"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: {
              duration: 0.2,
            },
          }}
        >
          <button className="live-tour__close" onClick={setClosed}>
            <ClosedIcon />
          </button>
          <div className="live-tour__logo-wrapper">
            {/* <img src={logo} alt="bzrp live tour 2024" title="bzrp live tour 2024" /> */}
            {/* <img
              className="live-tour__logo-img"
              src={logo}
              alt="bzrp live tour 2024"
              title="bzrp live tour 2024"
            /> */}
            <BZRP
              className={`live-tour__logo-img ${
                animationNeon
                  ? "live-tour__logo-img--animation-loop"
                  : "live-tour__logo-img--animation-initial"
              }`}
            />
            <h2 className="live-tour__logo">Live Tour 2024</h2>
          </div>
          <motion.div
            className="live-tour__dates-container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="live-tour__loader-container">
              <Loader />
            </div>
            {data?.map((date, i) => (
              <motion.li key={i} variants={item}>
                <Card
                  date={date}
                  image={polaroids[i]}
                  even={(i + 1) % 2 === 0}
                />
              </motion.li>
            ))}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LiveTour2024;
