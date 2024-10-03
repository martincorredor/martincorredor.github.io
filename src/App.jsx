import { useState, useRef, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/Header';
import Arrows from './components/Arrows';
import About from './components/About';
import Experience from './components/Experience';
import Habilities from './components/Habilities';
import Projects from './components/Projects';

const App = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {loading && (
        <div className="loading">
          <CircularProgress />
          <span>Cargando contenido...</span>
        </div>
      )}
      <div>
        <Header />
        <div className="carousel" ref={carouselRef}>
          <div className="list" ref={sliderRef}>
            <About />
            <Experience />
            <Habilities />
            <Projects />
          </div>
          {/* list thumbnail */}
          <div className="thumbnail" ref={thumbnailBorderRef}>
            <About thumbnail />
            <Experience thumbnail />
            <Habilities thumbnail />
            <Projects thumbnail />
          </div>
          <Arrows showSlider={showSlider} />
        </div>
      </div>
    </>
  );
};

export default App;
