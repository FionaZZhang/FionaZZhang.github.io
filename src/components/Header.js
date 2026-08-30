import React, { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about',  label: 'About' },
  { id: 'work',   label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'map',    label: 'Travel' },
  { id: 'ask',    label: 'Bot' }
];

const Header = () => {
  const [active, setActive] = useState('');

  // Scrollspy: highlight whichever section currently owns the upper viewport.
  useEffect(() => {
    // Include the hero so nothing is highlighted while it owns the screen.
    const sections = ['top', ...LINKS.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id === 'top' ? '' : visible[0].target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="header-brand">
          <span className="brand-dot" aria-hidden="true" />
          <h1>Fiona Zhang <span className="title">/ ML Engineer</span></h1>
        </a>
        <nav className="nav">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
