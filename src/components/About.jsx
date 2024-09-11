import darkForest from '../assets/darkForest.png';
import ThumbnailCard from './ThumbnailCard';

const About = ({ thumbnail }) => {
  if (thumbnail) {
    return <ThumbnailCard image={darkForest} title="SOBRE MÍ" />;
  }

  return (
    <div className="item" id="about">
      <img src={darkForest} alt="Sobre mí" loading="lazy"/>
      <div className="content">
        <div className="author">Conoce más</div>
        <div className="title">SOBRE MÍ</div>
        <div className="des">Aquí te contaré más sobre mí y mi carrera.</div>
      </div>
    </div>
  );
};

export default About;
