import React from "react";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import {SiCodewars,SiGithub} from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <nav>
          <ul className="footer__nav">
            <li className="footer__nav__item">
              <a className="footer__link" href="#">
                Home
              </a>
            </li>
            <li className="footer__nav__item">
              <a className="footer__link" href="#about">
                About
              </a>
            </li>
            <li className="footer__nav__item">
              <a className="footer__link" href="#experience">
                Experience
              </a>
            </li>
            <li className="footer__nav__item">
              <a className="footer__link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="footer__nav__item">
              <a className="footer__link" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__socials">
          <a className="footer__link footer__logo" href="https://www.facebook.com/andrew.upolovnev/">
            <IoLogoFacebook />
          </a>
          <a className="footer__link footer__logo" href="https://twitter.com/Anderboi21">
            <IoLogoTwitter />
          </a>
          <a className="footer__link footer__logo" href="https://www.codewars.com/users/rsschool_6a0f166d799f3ed3">
            <SiCodewars />
          </a>
          <a className="footer__link footer__logo" href="https://github.com/Anderboi">
            <SiGithub />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy;2022 Anderboi. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
