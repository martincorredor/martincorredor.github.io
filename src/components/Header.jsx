import React from 'react';
import logo from '../assets/logo-svg.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[120px]" src={logo} alt=""></img>
          </a>
          <Link
            className="content-center btn-link btn btn-sm pointer"
            to="contact"
            smooth={true}
          >
            Trabaja conmigo
          </Link>
          {/* <button className="btn btn-sm">
            <a href="#contact" className='bg-red-100 w-[200px]'>Trabaja conmigo</a>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
