import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { BsArrowDownCircle } from "react-icons/bs";
export const Nav = () => {
  return (
    <div className="navbar">
      <a href="#home">
        <AiOutlineHome className="icon-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon-nav" />
      </a>
      <a href="#proyects">
        <IoBriefcaseOutline className="icon-nav" />
      </a>
      <a href="#contact">
        <RiMessage3Line className="icon-nav" />
      </a>
    </div>
  )
}
