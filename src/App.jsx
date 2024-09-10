import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Thumbnail from './components/Thumbnail';
import Arrows from './components/Arrows';

import darkForest from './assets/darkForest.png';
import darkForest2 from './assets/darkForest2.png';
import darkForest3 from './assets/darkForest3.png';
import darkForest4 from './assets/darkForest4.png';
import darkForest5 from './assets/darkForest5.png';

const App = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.children;
    const thumbnailItems = thumbnailBorderRef.current.children;

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.insertBefore(
        sliderItems[sliderItems.length - 1],
        sliderItems[0]
      );
      thumbnailBorderRef.current.insertBefore(
        thumbnailItems[thumbnailItems.length - 1],
        thumbnailItems[0]
      );
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, 500);
  };

  return (
    <div>
      <Header />
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src={darkForest} />
            <div className="content">
              <div className="author">Hola, soy</div>
              <div className="title">MARTIN CORREDOR</div>
              <div className="topic">Desarrollador Frontend</div>
              <div className="des">
                Bienvenid@, soy un apasionado por el desarrollo frontend con mas
                de 3 años de experiencia. Si te interesa mi trabajo no dudes en
                contactarme.
              </div>
              <div className="buttons">
                <button>Mi CV</button>
                {/* <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          <div className="item">
            <img src={darkForest2} />
            <div className="content">
              <div className="author">Conoce mi</div>
              <div className="title">TRAYECTORIA</div>
              {/* <div className="topic">ANIMAL</div> */}
              <div className="des">
                Acá irá mi trayectoria estudiando y trabajando
              </div>
            </div>
          </div>
          <div className="item">
            <img src={darkForest3} />
            <div className="content">
              <div className="author">Conoce mis</div>
              <div className="title">HABILIDADES</div>
              {/* <div className="topic">ANIMAL</div> */}
              <div className="des">acá irán mis habilidades</div>
            </div>
          </div>
          <div className="item">
            <img src={darkForest4} />
            <div className="content">
              <div className="author">Algunos de mis</div>
              <div className="title">PROYECTOS</div>
              {/* <div className="topic">ANIMAL</div> */}
              <div className="des">Acá mostraré algunos de mis proyectos</div>
            </div>
          </div>
        </div>
        {/* list thumnail */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src={darkForest} />
            <div className="content">
              <div className="title">SOBRE MÍ</div>
              {/* <div className="description">Description</div> */}
            </div>
          </div>
          <div className="item">
            <img src={darkForest2} />
            <div className="content">
              <div className="title">TRAYECTORIA</div>
              {/* <div className="description">Mi experiencia</div> */}
            </div>
          </div>
          <div className="item">
            <img src={darkForest3} />
            <div className="content">
              <div className="title">HABILIDADES</div>
              {/* <div className="description">Description</div> */}
            </div>
          </div>
          <div className="item">
            <img src={darkForest4} />
            <div className="content">
              <div className="title">PROYECTOS</div>
              {/* <div className="description">Description</div> */}
            </div>
          </div>
        </div>

        <Arrows showSlider={showSlider} />
        {/* time running */}
        <div className="time"></div>
      </div>
    </div>
  );
};

export default App;
