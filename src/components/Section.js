import React from 'react';
import Reveal from './Reveal';

/**
 * One band of the single-page site: an anchor target, a numbered eyebrow,
 * a heading, and optionally a planet drifting behind the header.
 */
const Section = ({ id, index, title, sub, planet, wide = false, children }) => (
  <section className="section" id={id}>
    {planet && <img className="section-planet" src={planet} alt="" aria-hidden="true" />}
    <div className="shell">
      <Reveal className="section-head">
        <p className="eyebrow">{index}</p>
        <h2>{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </Reveal>
    </div>
    <div className={wide ? 'section-body is-wide' : 'section-body'}>{children}</div>
  </section>
);

export default Section;
