import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkle } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header className="header">
      <div className="header-brand">
        <Sparkle className="brand-spark" size={18} strokeWidth={1.75} />
        <h1>Fiona Zhang <span className="title">/ ML Engineer</span></h1>
      </div>
      <nav className="nav-link">
        <Link to="/" className={getNavLinkClass('/')}>Main</Link>
        <Link to="/projects" className={getNavLinkClass('/projects')}>Projects</Link>
        <Link to="/experiences" className={getNavLinkClass('/experiences')}>Resume</Link>
        <Link to="/skills" className={getNavLinkClass('/skills')}>Skills</Link>
      </nav>
    </header>
  );
};

export default Header;
