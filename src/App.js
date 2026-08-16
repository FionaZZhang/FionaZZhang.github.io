// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Portfolios from './components/Portfolio';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cosmos" aria-hidden="true">
          <div className="cosmos-galaxy"></div>
          <div className="cosmos-sunset"></div>
          <div className="cosmos-planet"></div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Portfolios />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;