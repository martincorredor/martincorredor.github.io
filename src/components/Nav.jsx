import React from 'react';
import { BiBriefcase, BiHomeAlt, BiUser } from 'react-icons/bi';
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from 'react-icons/bs';

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="nav lg:bottom-8">
      <div className="container mx-auto">
        <div className="menu-container bg-black/20 text-2x1 text-white/50">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            className="menu-link"
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="menu-link"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="habilities"
            className="menu-link"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="menu-link"
          >
            <BiBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="menu-link"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
