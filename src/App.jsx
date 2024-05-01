import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Habilities from './components/Habilities';
import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About';
import NavMenu from './components/NavMenu';

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Habilities /> */}
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
