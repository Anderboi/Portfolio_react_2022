import React from "react";
import "./nav.css";
import { BiHomeAlt, BiUser, BiBook, BiChat, BiBot } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__item nav__item_active" href="#">
        <BiHomeAlt />
      </a>
      <a className="nav__item" href="#about">
        <BiUser />
      </a>
      <a className="nav__item" href="#experience">
        <BiBook />
      </a>
      <a className="nav__item" href="#services">
        <BiBot />
      </a>
      <a className="nav__item" href="#contacts">
        <BiChat />
      </a>
    </nav>
  );
};

export default Nav;
