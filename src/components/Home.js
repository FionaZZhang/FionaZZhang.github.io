import React from 'react';
import '../App.css';
import profileImage from '../assets/images/headpic2.png';
import earth from '../assets/images/planets/earth.jpg';
import neptune from '../assets/images/planets/neptune.jpg';
import jupiter from '../assets/images/planets/jupiter.jpg';
import moon from '../assets/images/planets/moon.jpg';

import Reveal from './Reveal';
import PrinceScene from './PrinceScene';
import Section from './Section';
import BioTabs from './BioTabs';
import Portfolio from './Portfolio';
import Experiences from './Experiences';
import Skills from './Skills';
import WorldMap from './WorldMap';
import ChatBot from './ChatBot';

const Home = () => (
  <>
    {/* ---------- Hero ---------- */}
    <section className="hero" id="top">
      <div className="hero-scene" aria-hidden="true">
        <img className="hero-planet" src={jupiter} alt="" />
        <PrinceScene />
      </div>
      <div className="hero-inner">
        <Reveal>
          <p className="eyebrow">Melbourne, Australia</p>
          <h1 className="hero-name">
            Fiona Zhang
            <span className="zh">张骏菲</span>
          </h1>
          <p className="hero-role">Machine Learning Engineer</p>
          <p className="hero-line">I build cool stuff :)</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See my work</a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/fiona-zhang-1153b3226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href="https://github.com/FionaZZhang?tab=stars"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
      <a className="scroll-hint" href="#about" aria-label="Scroll to about">Scroll</a>
    </section>

    {/* ---------- About ---------- */}
    <Section id="about" index="01" title="About">
      <div className="shell">
        <div className="about-grid">
          <Reveal>
            <img src={profileImage} alt="Fiona Zhang" className="about-photo" />
            <div className="about-meta">
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                fiona.junfei.work@gmail.com
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Melbourne, Australia
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <BioTabs />
          </Reveal>
        </div>
      </div>
    </Section>

    {/* ---------- Work ---------- */}
    <Section
      id="work"
      index="02"
      title="Projects"
      sub="Robotics, audio language models, research, and a few things built for fun."
      planet={neptune}
      wide
    >
      <Portfolio />
    </Section>

    {/* ---------- Resume ---------- */}
    <Section
      id="resume"
      index="03"
      title="Resume"
      sub="Where I have worked and studied."
      planet={earth}
    >
      <Experiences />
    </Section>

    {/* ---------- Skills ---------- */}
    <Section
      id="skills"
      index="04"
      title="Skills"
      planet={moon}
      wide
    >
      <Skills />
    </Section>

    {/* ---------- Travel ---------- */}
    <Section
      id="map"
      index="05"
      title="Footprints"
      sub="Enjoying the digital nomad lifestyle"
      wide
    >
      <WorldMap />
    </Section>

    {/* ---------- Ask ---------- */}
    <Section id="ask" index="06" title="Ask anything about Fiona">
      <ChatBot />
    </Section>

    <footer className="footer">
      <div className="shell">
        <span>© {new Date().getFullYear()} Fiona Zhang</span>
        <span>Planet imagery: NASA / JPL, public domain</span>
      </div>
    </footer>
  </>
);

export default Home;
