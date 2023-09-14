import React from "react";
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiChat,
  BiGitRepoForked,
} from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {

  return (
    <nav className="nav">
      <Link 
      tabIndex={1}
        className="nav__item" 
        activeClass="active" 
        spy={true}
        to="home"
        >
        <BiHomeAlt />
      </Link>
      <Link
      tabIndex={2}
        className="nav__item"
        activeClass="active"
        spy={true}
        to="about"
      >
        <BiUser />
      </Link>
      <Link
      tabIndex={3}
        className="nav__item"
        activeClass="active"
        spy={true}
        to="experience"
      >
        <BiBook />
      </Link>
      <Link
      tabIndex={4}
        className="nav__item"
        activeClass="active"
        spy={true}
        to="portfolio"
      >
        <BiGitRepoForked />
      </Link>
      <Link
      tabIndex={5}
        className="nav__item"
        activeClass="active"
        spy={true}
        to="contacts"
      >
        <BiChat />
      </Link>
    </nav>
  );
};

export default Nav;
