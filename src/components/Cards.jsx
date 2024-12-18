import React from 'react';

const projects = [
  {
    title: 'Gaita Crafts',
    copy: 'Sitio oficial de GaitaCrafts donde se exponen en modo de galería productos hechos en gaita donde el usuario puede comunicarse directamente con el dueño via whatsapp para su compra.',
    button: 'Visitar',
    image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'Bold Dashboard',
    copy: 'Una página donde usuarios pueden ver las transacciones de su negocio filtrando por fecha u otros items de la transacción.',
    button: 'Visitar',
    image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'Clon de Spotify',
    copy: "Un clon de la aplicación web de spotify. Se conecta a la API de spotify para obtener tus datos y así disfrutar de la misma experiencia que tendrías con la aplicación original.",
    button: 'Visitar',
    image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    title: 'E-commerce',
    copy: 'E-commerce donde cuenta con secciones de venta y compra de productos',
    button: 'Book Now',
    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
];

const Cards = () => {
  return (
    <div className="projectCardsContainer">
      {projects.map((project, index) => (
        <div key={index} className="projectCard">
          <img className='projectCardImg' src={project.image} ></img>
          <div className="projectCardContent">
            <h2 className="projectCardTitle">{project.title}</h2>
            <p className="projectCardDes">{project.copy}</p>
            <button className="projectCardBtn">{project.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
