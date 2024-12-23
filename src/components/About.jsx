import React from 'react';
import darkForest from '../assets/darkForest.png';

const About = ({ thumbnail }) => {
  const whatsappNumber = '573224682353';

  return thumbnail ? (
    <div className="item">
      <img src={darkForest} alt="Dark Forest" />
      <div className="content">
        <div className="title">SOBRE MÍ</div>
      </div>
    </div>
  ) : (
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
          <button>
            <a
              href="https://drive.google.com/file/d/1LGfo2Yn57NV1Bvz_dKvymsK03f0FYXZu/view?usp=sharing"
              target="_blank"
              className="buttonLink"
            >
              Mi CV
            </a>
          </button>
          <button className="contactButton">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${''}`}
              target="_blank"
              className="buttonLink"
            >
              Contáctame
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
