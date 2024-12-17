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

const Carousel3D = () => {
  const tecnologies = [
    { name: 'React', image: reactLogo },
    { name: 'JavaScript', image: jsLogo },
    { name: 'React Native', image: reactNativeLogo },
    { name: 'HTML', image: htmlLogo },
    { name: 'CSS', image: cssLogo },
    { name: 'TypeScript', image: typeScriptLogo },
    { name: 'Git', image: gitLogo },
    { name: 'Node JS', image: nodeLogo },
    { name: 'Bootstrap', image: bootstrapLogo },
  ];

  return (
    <div className="entireContent">
      <div className="contentCarousel">
        {tecnologies.map((tech, index) => (
          <figure key={index} className="shadow">
            <label className='contentCarouselTitle'>{tech.name}</label>
            <img src={tech.image} alt={tech.name} className='techImage' />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
