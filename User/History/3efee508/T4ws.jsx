import React, { useEffect } from "react";
import "./live-tour-2024.scss";
import { useAppContext } from "../../../../context/AppProvider";
import { getNextDates } from "../../../../services/nextDates.services";
import { ACTION_TYPE } from "../../../../models/action.type.models";
import { useNavigate } from "react-router-dom";
import polaroids from "./polaroids.json";
import Card from "./Card/Card";
import { motion, AnimatePresence } from "framer-motion";
import ClosedIcon from "../../../../components/SVG/ClosedIcon";
import BZRP from "../../../../components/SVG/BZRP";
import { useState } from "react";
import Loader from "../../../../components/Loader/Loader";
import fakeData from "./data.json";

polaroids.sort(() => Math.random() - 0.5);

const LiveTour2024 = ({ isVisible, setClosed }) => {
  const [animationNeon, setAnimationNeon] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { dispatch, nextDates } = useAppContext();

  const getnextDates = async () => {
    const result = await getNextDates();
    setLoading(false);
    if (result.status === 200) {
      dispatch({
        type: ACTION_TYPE.NEXT_DATES,
        value: result.data.data,
      });
    }
  };
  useEffect(() => {
    getnextDates();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimationNeon(true);
    }, 5000);
  }, []);

  useEffect(() => {
    // if (nextDates && !loading) {
    // let dataAvailability = nextDates.filter((e) => e.availability === true);
    let dataAvailability = fakeData.filter((e) => e.availability === true);
    setData(dataAvailability);
    // if (!dataAvailability.length) {
    // setClosed(true);
    // }
    // }
  }, [nextDates]);

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
            <svg
              className="live-tour__live-tour-2024"
              width="100%"
              height="100%"
              viewBox="0 0 2481 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160.97 104.471V141.141H44.3406C19.8943 141.141 0.0317383 121.279 0.0317383 96.8319V0.573242H36.7011V104.471H160.97ZM209.783 0.573242V141.141H173.113V0.573242H209.783ZM414.522 0.573242H461.123L367.412 126.117C360.028 136.048 348.823 144.197 335.581 144.197C322.085 144.197 311.39 136.048 303.496 126.117L209.783 0.573242H256.385L335.581 109.055L414.522 0.573242ZM650.983 104.471V141.141H497.684C473.238 141.141 453.376 121.279 453.376 96.8319V44.8828C453.376 20.4362 473.238 0.573242 497.684 0.573242H650.983V37.2432H490.045V52.5223H650.983V89.1923H490.045V104.471H650.983ZM930.108 0.573242V37.2432H850.658V141.141H813.989V37.2432H734.538V0.573242H930.108ZM1134.92 44.8828V96.8319C1134.92 121.279 1115.05 141.141 1090.61 141.141H981.617C957.171 141.141 937.308 121.279 937.308 96.8319V44.8828C937.308 20.4362 957.171 0.573242 981.617 0.573242H1090.61C1115.05 0.573242 1134.92 20.4362 1134.92 44.8828ZM973.977 104.471H1098.25V37.2432H973.977V104.471ZM1348.78 0.573242V96.8319C1348.78 121.279 1328.92 141.141 1304.47 141.141H1195.48C1171.04 141.141 1151.17 121.279 1151.17 96.8319V0.573242H1187.84V104.471H1312.11V0.573242H1348.78ZM1562.64 112.111V141.141H1525.97V104.471H1401.71V141.141H1365.04V0.573242H1518.33C1542.78 0.573242 1562.64 20.4362 1562.64 44.8828V60.1619C1562.64 71.112 1557.81 80.0248 1549.91 86.1365C1557.81 92.2481 1562.64 101.161 1562.64 112.111ZM1401.71 67.8015H1525.97V37.2432H1401.71V67.8015ZM1847.88 44.8828C1847.88 69.3294 1828.02 89.1923 1803.57 89.1923H1686.94V104.471H1841.26V141.141H1650.27V96.8319C1650.27 72.3853 1670.14 52.5223 1694.58 52.5223H1811.21V37.2432H1650.27V0.573242H1803.57C1828.02 0.573242 1847.88 20.4362 1847.88 44.8828ZM2055.28 44.8828V96.8319C2055.28 121.279 2035.42 141.141 2010.97 141.141H1901.98C1877.54 141.141 1857.67 121.279 1857.67 96.8319V44.8828C1857.67 20.4362 1877.54 0.573242 1901.98 0.573242H2010.97C2035.42 0.573242 2055.28 20.4362 2055.28 44.8828ZM1894.34 104.471H2018.61V37.2432H1894.34V104.471ZM2269.15 44.8828C2269.15 69.3294 2249.28 89.1923 2224.84 89.1923H2108.21V104.471H2262.53V141.141H2071.54V96.8319C2071.54 72.3853 2091.4 52.5223 2115.85 52.5223H2232.48V37.2432H2071.54V0.573242H2224.84C2249.28 0.573242 2269.15 20.4362 2269.15 44.8828ZM2480.11 67.8015V104.471H2455.66V141.141H2418.99V104.471H2310C2288.87 104.471 2272.31 87.919 2272.31 66.7829C2272.31 53.541 2279.19 42.0816 2289.63 35.206L2343.11 0.573242H2407.79L2305.67 67.8015H2418.99V0.573242H2455.66V67.8015H2480.11Z"
                fill="white"
              />
            </svg>
          </div>
          <motion.div
            className="live-tour__dates-container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {loading && (
              <div className="live-tour__loader-container">
                <Loader />
              </div>
            )}
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
