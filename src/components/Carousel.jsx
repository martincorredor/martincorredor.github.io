import About from './About';
import Experience from './Experience';
import Habilities from './Habilities';
import Projects from './Projects';

const Carousel = ({ carouselRef, sliderRef, thumbnailBorderRef }) => {
  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        <About />
        <Experience />
        <Habilities />
        <Projects />
      </div>
      <div className="thumbnail" ref={thumbnailBorderRef}>
        <About thumbnail />
        <Experience thumbnail />
        <Habilities thumbnail />
        <Projects thumbnail />
      </div>
    </div>
  );
};

export default Carousel;
