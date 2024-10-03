import React from 'react';
import darkForest2 from '../assets/darkForest2.png';

const Experience = ({ thumbnail }) => {
  return thumbnail ? (
    <div className="item">
      <img src={darkForest2} alt="Dark Forest" />
      <div className="content">
        <div className="title">TRAYECTORIA</div>
      </div>
    </div>
  ) : (
    <div className="item">
      <img src={darkForest2} alt="Dark Forest" />
      <div className="content">
        <div className="author">Conoce mi</div>
        <div className="title">TRAYECTORIA</div>
        <div className="des">
          Acá irá mi trayectoria estudiando y trabajando.
        </div>
      </div>
    </div>
  );
};

export default Experience;
