import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header className="header">
      <h1>Fiona Zhang <span className="title">/ ML Engineer</span></h1>
      <nav className="nav-link">
        <Link to="/" className={getNavLinkClass('/')}>Main</Link>
        <Link to="/experiences" className={getNavLinkClass('/experiences')}>Resume</Link>
        <Link to="/skills" className={getNavLinkClass('/skills')}>Skills</Link>
      </nav>
    </header>
  );
};

export default Header;