import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import './Portfolio.css';
import profileImage from '../assets/images/headpic2.png';
import ChatBot from './ChatBot';
import WorldMap from './WorldMap';

const MainPage = () => {
  // macOS hides scrollbars until you scroll, so the bio needs its own cue
  // that there is more text below.
  const bioRef = useRef(null);
  const [bioAtEnd, setBioAtEnd] = useState(false);
  const [bioScrolls, setBioScrolls] = useState(false);

  useEffect(() => {
    const el = bioRef.current;
    if (!el) return undefined;

    const update = () => {
      const scrollable = el.scrollHeight - el.clientHeight;
      setBioScrolls(scrollable > 8);
      setBioAtEnd(scrollable <= 8 || el.scrollTop >= scrollable - 8);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const createStars = () => {
      const stars = document.querySelector('.stars');
      const numStars = 200;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        stars.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <>
      <div className="stars"></div>
      <div className="content">
        <div className="profile-card">
          <img src={profileImage} alt="Fiona Zhang" className="profile-image" />
          <h2>Fiona Zhang<br /><span className="chinese-name">张骏菲</span></h2>
          <p>Machine Learning Engineer</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/fiona-zhang-1153b3226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/FionaZZhang?tab=stars" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="introduction-and-contact">
          <div
            className={
              'introduction-container' +
              (bioScrolls && !bioAtEnd ? ' has-more' : '')
            }
          >
            <div className="introduction" ref={bioRef}>
            <p>
            Hellooooo! I'm Fiona 👩🏼‍💻, a <strong>Machine Learning Engineer</strong> based in <strong>Melbourne</strong> 🇦🇺. I build AI systems that actually ship, including agents, retrieval systems, evals, and everything in between 🤖.
            </p>
            <p>
            Academically, I've always had a bit of serial curiosity 🧐: I get excited about something, dive deep into it, and somehow end up somewhere completely different.
            </p>
            <p>
            I did my bachelor's at the <strong>University of Melbourne</strong> 🎓, where I started out studying physics 🪐 before eventually specialising in <strong>Computer Software Systems</strong> 💻. Somewhere along the way, I also studied Virtual Reality 🥽 at the University of Copenhagen 🇩🇰. I did my master's at <strong>Carnegie Mellon University</strong> 🎓, where I continued trying a little bit of everything: computer networks 🌐, information security 🔐, autonomous racing cars 🏎️, and training LLMs 🧠.
            </p>
            <p>
            If you ask me what my dream job is, I'd probably still say astrophysicist 🔭. More realistically, I'd love to eventually work somewhere in the space or rocket industry 🚀. I'm not quite there yet 😬...
            </p>
            <p>
            This website isn't only about work, tho 👀.
            </p>
            <p>
            Outside of work, you'll usually find me plotting my next trip ✈️. My partner and I are trying to make the most of Australia's generous workplace benefits and become part-time digital nomads 🌏, working from different corners of the world whenever we can.
            </p>
            <p className="bio-footnote">
            <em>This website is 99% vibed ✨, thanks to my colleagues Claude Code and ChatGPT 🤖. If something breaks, it was probably the 1% I wrote....</em>
            </p>
            </div>
            <div className="scroll-cue" aria-hidden="true">
              scroll <span>↓</span>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>fiona.junfei.work@gmail.com</span>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Melbourne, Australia</span>
            </div>
          </div>
        </div>
      </div>
      <WorldMap />
      <ChatBot />
    </>
  );
};

export default MainPage;