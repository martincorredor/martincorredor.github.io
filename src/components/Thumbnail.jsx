import React from 'react';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';

const Thumbnail = () => {
  return (
    <div className="thumbnail">
      <div className="item">
        <img src={image1} alt="" />
        <div className="content">
          <div className="title">Name Slider</div>
          <div className="description">Desacription</div>
        </div>
      </div>
      <div className="item">
        <img src={image2} alt="" />
        <div className="content">
          <div className="title">Name Slider</div>
          <div className="description">Desacription</div>
        </div>
      </div>
      <div className="item">
        <img src={image3} alt="" />
        <div className="content">
          <div className="title">Name Slider</div>
          <div className="description">Desacription</div>
        </div>
      </div>
      <div className="item">
        <img src={image4} alt="" />
        <div className="content">
          <div className="title">Name Slider</div>
          <div className="description">Desacription</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
