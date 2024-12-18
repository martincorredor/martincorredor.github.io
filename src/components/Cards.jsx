import React from 'react';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/javaScript.png';
import reactLogo from '../assets/logos/react.png';
import reactNativeLogo from '../assets/logos/reactNative.png';
import gitLogo from '../assets/logos/git.png';
import nodeLogo from '../assets/logos/node.png';
import typeScriptLogo from '../assets/logos/typeScript.png';
import bootstrapLogo from '../assets/logos/bootstrap.png';

const projects = [
  {
    title: 'Gaita Crafts',
    tec: [reactLogo, htmlLogo, cssLogo, jsLogo, gitLogo],
    copy: 'Sitio oficial de GaitaCrafts donde se exponen en modo de galería productos, donde el usuario puede comunicarse directamente vía WhatsApp para su compra.',
    button: 'Visitar',
    image:
      'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'Bold Dashboard',
    tec: [nodeLogo, typeScriptLogo],
    copy: 'Una página donde usuarios pueden ver las transacciones de su negocio filtrando por fecha u otros ítems de la transacción.',
    button: 'Visitar',
    image:
      'https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'Clon de Spotify',
    tec: [reactLogo, gitLogo],
    copy: 'Un clon de la aplicación web de Spotify. Se conecta a la API de Spotify para obtener tus datos y así disfrutar de la misma experiencia que tendrías con la aplicación original.',
    button: 'Visitar',
    image:
      'https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'E-commerce',
    tec: [bootstrapLogo, cssLogo],
    copy: 'E-commerce donde cuenta con secciones de venta y compra de productos.',
    button: 'Reservar',
    image:
      'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
];

const Cards = () => {
  return (
    <div className="projectCardsContainer">
      {projects.map((project, index) => (
        <div key={index} className="projectCard">
          <img
            className="projectCardImg"
            src={project.image}
            alt={`Imagen del proyecto ${project.title}`}
          />
          <div className="projectCardContent">
            <h2 className="projectCardTitle">{project.title}</h2>
            <div className="projectCardTecContainer">
              {project.tec &&
                project.tec.map((item, tecIndex) => (
                  <img
                    key={tecIndex}
                    src={item}
                    alt={`Tecnología utilizada: ${item}`}
                    className='projectCardTecItem'
                  />
                ))}
            </div>
            <p className="projectCardDes">{project.copy}</p>
            <div className="projectCardBtnContainer">
              <button className="projectCardBtn">Visitar</button>
              <button className="projectCardBtn">Ver código</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
