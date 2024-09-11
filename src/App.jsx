import { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Arrows from './components/Arrows';
import About from './components/About';
import Experience from './components/Experience';
import Habilities from './components/Habilities';
import Projects from './components/Projects';

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
      carouselRef.current.classList.remove('next', 'prev');
    }, 500);
  };

  return (
    <div>
      <Header />
      <Carousel 
        carouselRef={carouselRef} 
        sliderRef={sliderRef} 
        thumbnailBorderRef={thumbnailBorderRef}
        showSlider={showSlider}
      />
      <Arrows showSlider={showSlider} />
    </div>
  );
};

export default App;
