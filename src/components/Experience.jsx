import darkForest2 from '../assets/darkForest2.png';
import ThumbnailCard from './ThumbnailCard';

const Experience = ({ thumbnail }) => {
  if (thumbnail) {
    return <ThumbnailCard image={darkForest2} title="TRAYECTORIA" />;
  }

  return (
    <div className="item" id="experience">
      <img src={darkForest2} alt="Experience" loading="lazy"/>
      <div className="content">
      <div className="author">Conoce mi</div>
      <div className="title">TRAYECTORIA</div>
      <div className="des">Acá irá mi trayectoria estudiando y trabajando.</div>
      </div>
    </div>
  );
};

export default Experience;
