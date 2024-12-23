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
    { name: 'Figma', image: figmaLogo },
    { name: 'Svelte', image: svelteLogo },
    { name: 'Material UI', image: materialUiLogo },
    { name: 'Github', image: githubLogo },
    // { name: 'SQL & NoSQL', image: sqlLogo },
  ];

  return (
    <div className="entireContent">
      <div className="contentCarousel">
        {tecnologies.map((tech, index) => (
          <figure key={index} className="shadow">
            <label className="contentCarouselTitle">{tech.name}</label>
            <img src={tech.image} alt={tech.name} className="techImage" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
