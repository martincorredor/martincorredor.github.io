import { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Thumbnail from './components/Thumbnail';
import Arrows from './components/Arrows';

import image1 from './assets/img1.jpg';
import image2 from './assets/img2.jpg';
import image3 from './assets/img3.jpg';
import image4 from './assets/img4.jpg';

const App = () => {
  let carouselDom = document.querySelector('.carousel');
  // let SliderDom = carouselDom.querySelector('.carousel .list');
  // let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  // let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
  // let timeDom = document.querySelector('.carousel .time');

  // thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  // let timeRunning = 3000;
  // let timeAutoNext = 7000;

  // let runTimeOut;
  // let runNextAuto = setTimeout(() => {
  //   next.click();
  // }, timeAutoNext);
  // function showSlider(type) {
  //   let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  //   let thumbnailItemsDom = document.querySelectorAll(
  //     '.carousel .thumbnail .item'
  //   );

  //   if (type === 'next') {
  //     SliderDom.appendChild(SliderItemsDom[0]);
  //     thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  //     carouselDom.classList.add('next');
  //   } else {
  //     SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
  //     thumbnailBorderDom.prepend(
  //       thumbnailItemsDom[thumbnailItemsDom.length - 1]
  //     );
  //     carouselDom.classList.add('prev');
  //   }
  //   clearTimeout(runTimeOut);
  //   runTimeOut = setTimeout(() => {
  //     carouselDom.classList.remove('next');
  //     carouselDom.classList.remove('prev');
  //   }, timeRunning);

  //   clearTimeout(runNextAuto);
  //   runNextAuto = setTimeout(() => {
  //     next.click();
  //   }, timeAutoNext);
  // }

  const showSlider = (type) => {
    console.log('botón de: ', type);
  };

  return (
    <div>
      <Header />
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src={image1} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image2} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image3} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image4} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        {/* list thumnail */}
        <div className="thumbnail">
          <div className="item">
            <img src={image1} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image2} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image3} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image4} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        </div>

        <Arrows showSlider={showSlider} />
        {/* time running */}
        <div className="time"></div>
      </div>
    </div>
  );
};

export default App;
