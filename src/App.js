// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Portfolios from './components/Portfolio';
import Research from './components/Research';
import Experiences from './components/Experiences';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/research" element={<Research />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;