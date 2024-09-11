import React from 'react';

const ThumbnailCard = ({image, title}) => {
  return (
    <div className="item" id="aboutB">
      <img src={image} alt="Sobre mí" loading="lazy"/>
      <div className="content">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default ThumbnailCard;
