import React from "react";
import {BsGithub} from 'react-icons/bs';
import {FaReddit} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a className="link" href="https://github.com/Anderboi" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a className="link" href="https://www.reddit.com/user/Anderboi21" target="_blank" rel="noreferrer"><FaReddit/></a>
    </div>
  );
};

export default HeaderSocials;
