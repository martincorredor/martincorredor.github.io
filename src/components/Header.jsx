import React from 'react';
import logo from '../assets/logo-svg.png';

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[120px]" src={logo} alt=""></img>
          </a>
          <button className="btn btn-sm">Trabaja conmigo</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
