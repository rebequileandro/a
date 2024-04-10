import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { BsArrowDownCircle } from "react-icons/bs";
export const Nav = () => {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <IoBriefcaseOutline className="icon" />
      </a>
      <a href="#contact">
        <RiMessage3Line className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  )
}
