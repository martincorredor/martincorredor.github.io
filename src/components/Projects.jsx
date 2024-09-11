import darkForest4 from '../assets/darkForest4.png';
import ThumbnailCard from './ThumbnailCard';


const Projects = ({ thumbnail }) => {
  if (thumbnail) {
    return <ThumbnailCard image={darkForest4} title="PROYECTOS" />;
  }

  return (
    <div className="item" id="projects">
      <img src={darkForest4} alt="projects" loading="lazy" />
      <div className="content">
        <div className="author">Algunos de mis</div>
        <div className="title">PROYECTOS</div>
        <div className="des">Acá mostraré algunos de mis proyectos.</div>
      </div>
    </div>
  );
};

export default Projects;
