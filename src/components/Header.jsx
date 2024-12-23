import React from 'react';
import { Link } from '@mui/material';
import logo from '../assets/logo-svg.png';

const Header = () => {
  const whatsappNumber = '573224682353';
  return (
    <header>
      <nav>
        <a>Martin</a>
        <a
          href="https://drive.google.com/file/d/1LGfo2Yn57NV1Bvz_dKvymsK03f0FYXZu/view?usp=sharing"
          target="_blank"
        >
          Mi cv
        </a>
      </nav>
      <nav>
        <a href="https://github.com/martincorredor" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/martin-corredor/" target="_blank">
          Linkedin
        </a>
        <a href={`https://wa.me/${whatsappNumber}?text=${''}`} target="_blank">
          Whatsapp
        </a>
      </nav>
    </header>
  );
};

export default Header;
