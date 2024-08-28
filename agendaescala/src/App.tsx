import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {  
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/escala" element={<Home />} />
         <Route path="/ministerio" element={<Home />} />
         <Route path="/missao" element={<Home />} />
         <Route path="/missionario" element={<Home />} />
      </Routes>        
    </div>
  );
}

export default App;
