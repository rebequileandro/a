import React from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { MenuButton, Menu } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { setModaData } from "../../store/slice/mc.slice";
const Header = ({ isVisible }) => {
  const modaData = useSelector((state) => state.mc);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const handleBackBtn = () => {
    dispatch(setModaData(false));
    setTimeout(() => {
      dispatch(setModaData("initial"));
    }, 700);
  };

  return (
    <header
      className={`header-container ${
        isVisible ? "" : "header-container--hide"
      }`}
    >
      <div
        className={`header ${
          modaData && modaData !== "initial" ? "header--mc" : ""
        }`}
      >
        {modaData && modaData !== "initial" ? (
          <button className="header__back-btn" onClick={handleBackBtn}>
            <svg
              width="100%"
              height="100%"
              aria-label="Go back"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z"
                fill="#6400ff"
              />
            </svg>
          </button>
        ) : null}
        {pathname !== "/" ? (
          <Link
            className="header__back-btn"
            to={"/"}
            onClick={() => dispatch(setModaData("initial"))}
          >
            <svg
              width="100%"
              height="100%"
              aria-label="Go back"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z"
                fill="#6400ff"
              />
            </svg>
          </Link>
        ) : null}

        <img
          src="/assets/medbot.webp"
          alt="medbot+"
          width={160}
          height={21.75}
          className="header__logo"
        />
        <button className="header__menu-btn">
          <MenuButton
            onChange={() => setIsOpenMenu(!isOpenMenu)}
            isOpen={isOpenMenu}
          />
        </button>

        <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </div>
    </header>
  );
};

export default Header;
