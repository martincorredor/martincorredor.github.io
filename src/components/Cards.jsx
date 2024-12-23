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
import figmaLogo from '../assets/logos/figma.png';
import svelteLogo from '../assets/logos/svelte.png';
import materialUiLogo from '../assets/logos/materialUi.png';
import sqlLogo from '../assets/logos/sql.png';
import githubLogo from '../assets/logos/github.png';
import ecommerceImg from '../assets/eCommerce.png';
import gaitaCrafts from '../assets/gaitaCrafts.png';
import boldImg from '../assets/boldDashboard.png';
import spotifyImg from '../assets/spotify.png';
import boldLogo from '../assets/bold.png';

const projects = [
  {
    title: 'Gaita Crafts',
    tec: [reactLogo, htmlLogo, cssLogo, jsLogo, gitLogo, githubLogo],
    copy: 'Sitio oficial de GaitaCrafts donde se exponen en modo de galería productos, donde el usuario puede comunicarse directamente vía WhatsApp para su compra.',
    site: 'https://gaitacrafts.com/',
    code: 'https://github.com/martincorredor/my-crafts.git',
    image: gaitaCrafts,
  },
  {
    title: 'Bold Dashboard',
    tec: [
      reactLogo,
      typeScriptLogo,
      materialUiLogo,
      jsLogo,
      htmlLogo,
      githubLogo,
    ],
    copy: 'Una página donde usuarios pueden ver las transacciones de su negocio filtrando por fecha u otros ítems de la transacción.',
    site: 'https://martincorredor.github.io/bold-dashboard/',
    code: 'https://github.com/martincorredor/bold-dashboard.git',
    image: boldLogo,
  },
  {
    title: 'Clon de Spotify',
    tec: [reactLogo, htmlLogo, cssLogo, figmaLogo, jsLogo, githubLogo],
    copy: 'Un clon de la aplicación web de Spotify. Se conecta a la API de Spotify para obtener tus datos y así disfrutar de la misma experiencia que tendrías con la aplicación original.',
    site: 'https://github.com/martincorredor/spotify-clone',
    code: 'https://github.com/martincorredor/spotify-clone',
    image: spotifyImg,
  },
  {
    title: 'E-commerce',
    tec: [svelteLogo, jsLogo, bootstrapLogo, cssLogo, htmlLogo, gitLogo],
    copy: 'E-commerce donde cuenta con secciones de venta y compra de productos.',
    site: 'https://e-commerce-ac54c.web.app/',
    code: 'https://github.com/martincorredor/svelte-e-commerce',
    image: ecommerceImg,
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
                    className="projectCardTecItem"
                  />
                ))}
            </div>
            <p className="projectCardDes">{project.copy}</p>
            <div className="projectCardBtnContainer">
              <button className="projectCardBtn">
                <a href={project.site} target="_blank">
                  Visitar
                </a>
              </button>
              <button className="projectCardBtn">
                <a href={project.code} target="_blank">
                  Ver código
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
