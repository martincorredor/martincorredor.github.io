import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/habilities" element={<div>Habilidades</div>} />
      </Routes>
      <Menu/>
    </div>
  );
};

export default App;
