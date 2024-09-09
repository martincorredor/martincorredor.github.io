import React from 'react';

const Arrows = ({showSlider}) => {
  return (
    <div className="arrows">
      <button id="prev" onClick={() => showSlider('prev')}>
        {'<'}
      </button>
      <button id="next" onClick={() => showSlider('next')}>
        {'>'}
      </button>
    </div>
  );
};

export default Arrows;
