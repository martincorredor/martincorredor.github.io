import React from 'react';
import { Link } from '@mui/material';
import logo from '../assets/logo-svg.png';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#about">
          {/* <img src={logo} className="header-logo" /> */}
          Martin
        </a>
        <a href="#">Mi cv</a>
      </nav>
      <nav>
        <a href="https://github.com/martincorredor" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/martin-corredor/" target="_blank">
          Linkedin
        </a>
        <a href="#">Whatsapp</a>
      </nav>
    </header>
  );
};

export default Header;
