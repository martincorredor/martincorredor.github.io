import React from 'react';
import darkForest from '../assets/darkForest.png';

const About = ({ thumbnail }) => {
  return thumbnail ? (
    <div className="item">
      <img src={darkForest} alt="Dark Forest" />
      <div className="content">
        <div className="title">SOBRE MÍ</div>
      </div>
    </div>
  ) : (
    // <div className="section">
    //   <img src={darkForest} alt="Dark Forest" />
    //   <div className="section-content">About</div>
    // </div>
    <div className="item">
      <img src={darkForest} alt="Dark Forest" />
      <div className="content">
        <div className="author">Hola, soy</div>
        <div className="title">MARTIN CORREDOR</div>
        <div className="topic">Desarrollador Frontend</div>
        <div className="des">
          Bienvenid@, soy un apasionado por el desarrollo frontend con más de 3
          años de experiencia. Si te interesa mi trabajo, no dudes en
          contactarme.
        </div>
        <div className="buttons">
          <button>Mi CV</button>
          <button>Contáctame</button>
        </div>
      </div>
    </div>
  );
};

export default About;
