import React from 'react';
import ExpandingCard from './ExpandingCard';
import coheteHorizontal from '../assets/coheteHorizontal.png';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';

const experiences = {
  uptc: {
    title: 'UPTC',
    year: 2014,
    place: 'Tunja, Colombia',
    details:
      'Estudié Ingeniería Civil en la Universidad Pedagógica y Tecnológica de Colombia.',
    type: 'study',
  },
  holberton: {
    title: 'Holberton School',
    year: 2020,
    place: 'Bogotá, Colombia',
    details: 'Estudié Desarrollo de Software Full Stack.',
    type: 'study',
  },
  sunsquare: {
    title: 'Sunsquare',
    year: 2021,
    place: 'Remoto',
    details: 'Trabajé como Desarrollador Full Stack.',
    type: 'work',
  },
  rappi: {
    title: 'Rappi',
    year: 2022,
    place: 'Bogotá, Colombia',
    details:
      'Participé en la implementación de los portales "Portal Partners" y "Partners Manager" para la vertical de Restaurantes, gestionando campañas publicitarias en la aplicación. Transformé diseños de Figma en implementaciones funcionales con React, JavaScript, TypeScript, HTML, CSS y Material UI. Implementé hooks para la integración de APIs backend, desarrollé diseños responsive y colaboré en Sprints bajo Metodologías Ágiles, aportando soluciones y resolviendo desafíos técnicos junto al equipo.',
    type: 'work',
  },
};

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="dotted-line">
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <div className="timeline-items">
        <div className="uptc-item">
          <SchoolIcon className="timeItem-icon uptc-icon study-icon" />
          <ExpandingCard
            title={experiences.uptc.title}
            description={experiences.uptc.details}
          />
        </div>
        <div className="holberton-item">
          <SchoolIcon className="timeItem-icon holberton-icon study-icon" />
          <ExpandingCard
            title={experiences.holberton.title}
            description={experiences.holberton.details}
          />
        </div>
        <div className="sunsquare-item">
          <ComputerIcon className="timeItem-icon sunsquare-icon work-icon" />
          <ExpandingCard
            title={experiences.sunsquare.title}
            description={experiences.sunsquare.details}
          />
        </div>
        <div className="rappi-item">
          <ComputerIcon className="timeItem-icon rappi-icon work-icon" />
          <ExpandingCard
            title={experiences.rappi.title}
            description={experiences.rappi.details}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
