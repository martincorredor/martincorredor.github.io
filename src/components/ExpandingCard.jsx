import React, { useState } from 'react';

const ExpandingCard = ({title, year, company, description}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="card-title">{title || 'card title'}</h3>
      <div className="card-content">
        <p>{description || 'card description'}</p>
      </div>
    </div>
  );
};

export default ExpandingCard;
