import React, { useState } from "react";
import "./nav.css";
import { BiHomeAlt, BiUser, BiBook, BiChat, BiGitRepoForked } from "react-icons/bi";
import classnames from "classnames";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="nav">
      <a
        className={classnames("nav__item", {
          nav__item_active: activeNav === "#",
        })}
        href="#"
        onClick={()=>setActiveNav('#')}
      >
        <BiHomeAlt />
      </a>
      <a
        className={
          classnames("nav__item", {
            nav__item_active: activeNav === "#about",
          })
        }
        href="#about"
        onClick={()=>setActiveNav('#about')}
      >
        <BiUser />
      </a>
      <a
        className={classnames("nav__item", {
          nav__item_active: activeNav === "#experience",
        })}
        href="#experience"
        onClick={()=>setActiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        className={classnames("nav__item", {
          nav__item_active: activeNav === "#portfolio",
        })}
        href="#portfolio"
        onClick={()=>setActiveNav('#portfolio')}
      >
        <BiGitRepoForked />
      </a>
      <a
        className={classnames("nav__item", {
          nav__item_active: activeNav === "#contacts",
        })}
        href="#contacts"
        onClick={()=>setActiveNav('#contacts')}
      >
        <BiChat />
      </a>
    </nav>
  );
};

export default Nav;
