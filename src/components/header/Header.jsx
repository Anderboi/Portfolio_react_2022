import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Image from "../../assets/Andrei.png";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1 className="header__name">Andrei Upalauneu</h1>
        <h5 className="sub-subheader">Frontend Web Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="person">
          <img src={Image} alt="Andrei" />
        </div>
        <a href="#about" className="scroll-down link">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
