import React from 'react';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';

const Carousel = () => {
  return (
    <div className="carousel next">
      <div className="list">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content">
            <div className="author">Martin</div>
            <div className="title">Frontend Developer</div>
            <div className="topic">Animal</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
              commodi tenetur quis, accusantium, nobis consequatur rerum cumque
              quidem, libero perferendis totam tempora? Molestias explicabo iure
              sunt atque nulla aut.
            </div>
            <div className="buttons">
              <button>Ver más</button>
              <button>Mi github</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="" />
          <div className="content">
            <div className="author">Martin</div>
            <div className="title">Frontend Developer</div>
            <div className="topic">Animal</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
              commodi tenetur quis, accusantium, nobis consequatur rerum cumque
              quidem, libero perferendis totam tempora? Molestias explicabo iure
              sunt atque nulla aut.
            </div>
            <div className="buttons">
              <button>Ver más</button>
              <button>Mi github</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="" />
          <div className="content">
            <div className="author">Martin</div>
            <div className="title">Frontend Developer</div>
            <div className="topic">Animal</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
              commodi tenetur quis, accusantium, nobis consequatur rerum cumque
              quidem, libero perferendis totam tempora? Molestias explicabo iure
              sunt atque nulla aut.
            </div>
            <div className="buttons">
              <button>Ver más</button>
              <button>Mi github</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="" />
          <div className="content">
            <div className="author">Martin</div>
            <div className="title">Frontend Developer</div>
            <div className="topic">Animal</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
              commodi tenetur quis, accusantium, nobis consequatur rerum cumque
              quidem, libero perferendis totam tempora? Molestias explicabo iure
              sunt atque nulla aut.
            </div>
            <div className="buttons">
              <button>Ver más</button>
              <button>Mi github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
