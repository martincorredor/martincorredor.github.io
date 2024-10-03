import React from 'react';
import darkForest4 from '../assets/darkForest4.png';

const Projects = ({ thumbnail }) => {
  return thumbnail ? (
    <div className="item">
      <img src={darkForest4} alt="Dark Forest" />
      <div className="content">
        <div className="title">PROYECTOS</div>
      </div>
    </div>
  ) : (
    <div className="item">
      <img src={darkForest4} alt="Dark Forest" />
      <div className="content">
        <div className="author">Algunos de mis</div>
        <div className="title">PROYECTOS</div>
        <div className="des">Acá mostraré algunos de mis proyectos.</div>
      </div>
    </div>
  );
};

export default Projects;
