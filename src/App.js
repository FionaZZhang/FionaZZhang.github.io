// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cosmos" aria-hidden="true" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* The site used to be multi-page; keep those links working. */}
          <Route path="/projects" element={<Navigate to="/#work" replace />} />
          <Route path="/experiences" element={<Navigate to="/#resume" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
