import darkForest from '../assets/darkForest.png';
import darkForest2 from '../assets/darkForest2.png';
import darkForest3 from '../assets/darkForest3.png';
import darkForest4 from '../assets/darkForest4.png';

const Thumbnail = () => {
  return (
    <>
      <div className="item">
        <img src={darkForest} alt="Sobre mí" loading="lazy" />
        <div className="content">
          <div className="title">SOBRE MÍ</div>
        </div>
      </div>
      <div className="item">
        <img src={darkForest2} alt="Trayectoria" loading="lazy" />
        <div className="content">
          <div className="title">TRAYECTORIA</div>
        </div>
      </div>
      <div className="item">
        <img src={darkForest3} alt="Habilidades" loading="lazy" />
        <div className="content">
          <div className="title">HABILIDADES</div>
        </div>
      </div>
      <div className="item">
        <img src={darkForest4} alt="Proyectos" loading="lazy" />
        <div className="content">
          <div className="title">PROYECTOS</div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
