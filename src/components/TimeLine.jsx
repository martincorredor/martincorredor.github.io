import React from 'react';
import ExpandingCard from './ExpandingCard';
import coheteHorizontal from '../assets/coheteHorizontal.png';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';

const experiences = {
  uptc: {
    title: 'UPTC',
    year: 'Ene 2014 - Dic 2019',
    place: 'Tunja, Colombia',
    details:
      'Estudié Ingeniería Civil en la Universidad Pedagógica y Tecnológica de Colombia, desarrollé habilidades analíticas, resolución de problemas y trabajo en equipo.',
    type: 'study',
  },
  holberton: {
    title: 'Holberton School',
    year: 'Ene 2020 - Abr 2022',
    place: 'Bogotá, Colombia',
    details: 'Estudié Desarrollo de Software Full Stack. Adquirí experiencia práctica en tecnologías como React, JavaScript, Python, HTML, CSS y metodologías ágiles, así como conocimientos en SQL, NoSQL, CI/CD, C. ',
    type: 'study',
  },
  sunsquare: {
    title: 'Sunsquare',
    year: 'Mar 2021 - Abr 2022',
    place: 'Remoto',
    details: 'Desarrollé la interfaz de una aplicación web de publicación de anuncios de alquiler, utilizando tecnologías como React, JavaScript, HTML y CSS. Fortalecí habilidades de trabajo en equipo, liderazgo y control de versiones, asegurando entregables de calidad y contribuyendo al éxito del proyecto en un entorno remoto.',
    type: 'work',
  },
  rappi: {
    title: 'Rappi',
    year: 'May 2022 - Abr 2024',
    place: 'Bogotá, Colombia',
    details:
      'Participé en la creación de portales como "Portal Partners" y "Partners Manager", transformando diseños en Figma en interfaces funcionales con React, TypeScript, y Material UI. Implementé hooks para integrar servicios backend mediante APIs, desarrollé diseños responsivos para diferentes dispositivos y colaboré en un entorno ágil (SCRUM), aportando soluciones técnicas y optimizando la experiencia del usuario.',
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
            year={experiences.uptc.year}
          />
        </div>
        <div className="holberton-item">
          <SchoolIcon className="timeItem-icon holberton-icon study-icon" />
          <ExpandingCard
            title={experiences.holberton.title}
            description={experiences.holberton.details}
            year={experiences.holberton.year}
          />
        </div>
        <div className="sunsquare-item">
          <ComputerIcon className="timeItem-icon sunsquare-icon work-icon" />
          <ExpandingCard
            title={experiences.sunsquare.title}
            description={experiences.sunsquare.details}
            year={experiences.sunsquare.year}
          />
        </div>
        <div className="rappi-item">
          <ComputerIcon className="timeItem-icon rappi-icon work-icon" />
          <ExpandingCard
            title={experiences.rappi.title}
            description={experiences.rappi.details}
            year={experiences.rappi.year}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
