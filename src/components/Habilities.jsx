import React from 'react';
import darkForest3 from '../assets/darkForest3.png';

const Habilities = ({ thumbnail }) => {
  return thumbnail ? (
    <div className="item">
      <img src={darkForest3} alt="Dark Forest" />
      <div className="content">
        <div className="title">HABILIDADES</div>
      </div>
    </div>
  ) : (
    <div className="item">
      <img src={darkForest3} alt="Dark Forest" />
      <div className="content">
        <div className="author">Conoce mis</div>
        <div className="title">HABILIDADES</div>
        <div className="des">Acá irán mis habilidades</div>
      </div>
    </div>
  );
};

export default Habilities;
