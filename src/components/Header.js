// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Fiona Zhang <span className="title">/ ML Engineer</span></h1>
      <nav className="nav-links">
        <Link to="/">Main</Link>
        <Link to="/experiences">Resume</Link>
        <Link to="/skills">Skills</Link>
      </nav>
    </header>
  );
};

export default Header;