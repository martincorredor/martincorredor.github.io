import darkForest3 from '../assets/darkForest3.png';
import ThumbnailCard from './ThumbnailCard';

const Habilities = ({ thumbnail }) => {
  if (thumbnail) {
    return <ThumbnailCard image={darkForest3} title="HABILIDADES" />;
  }

  return (
    <div className="item" id="habilities">
      <img src={darkForest3} alt="Habilities" loading="lazy" />
      <div className="content">
        <div className="author">Conoce mis</div>
        <div className="title">HABILIDADES</div>
        <div className="des">Acá irán mis habilidades.</div>
      </div>
    </div>
  );
};

export default Habilities;
