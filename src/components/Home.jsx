import React from 'react';

const Home = () => {
  return (
    <div className="homeSection">
      <div className="homeImage">Acá va la imagen</div>
      <div className="homeTitleContainer">
        <span className='homeTitle'>Martin Corredor</span>
        <span className='homeSubtitle'>Desarrollador Frontend</span>
      </div>
      <div className="homeDescription">Descripción</div>
      <div className="homeContactContainer">
        <div className="cvContainer">Acá el cv</div>
        <div className="socialNetworksContainer">acá los iconos de redes</div>
      </div>
    </div>
  );
};

export default Home;

// <div className="homeSection">
//   <div className="homeImage">Acá va la imagen</div>
//   <div className="homeContent">
//     <div className="homeTitleContainer">Acá va el título</div>
//     <div className='homeDescription'>Descripción</div>
//     <div className='homeContactContainer'>
//         <div className='cvContainer'>Acá el cv</div>
//         <div className='socialNetworksContainer'>
//             acá los iconos de redes
//         </div>
//     </div>
//   </div>
// </div>
