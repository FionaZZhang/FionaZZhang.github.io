import React, { useEffect } from 'react';
import '../App.css';
import './Portfolio.css';
import profileImage from '../assets/images/favicon.png';
import Portfolio from './Portfolio';

const MainPage = () => {
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
          <p>BSc-Computing and Software Systems</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/fiona-zhang-1153b3226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/FionaZZhang?tab=stars" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="introduction-and-contact">
          <div className="introduction-container">
            <div className="introduction">
            <p>
              Welcome! I am Fiona, a recent BSc in Computing and Software System graduate from The University of Melbourne 👩🏼‍💻. I'm currently working as a Graduate Machine Learning Engineer in the game industry 🕹️.
            </p>
            <p>
              Academically, I am fascinated by natural language processing (NLP) 🧠 and computer vision (CV) 👁️, especially their intersection and how they can push the boundaries of both fields. 
            </p>
            <p>
              Practically, I delve into how NLP and CV can collaborate to drive innovation 🚀. My interest also extends to algorithms and how they can be applied in software engineering 🔍. My goal is to democratize machine learning solutions and maximize their potential in real-world applications 🌟!
            </p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>fiona.junfei@gmail.com</span>
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
      <Portfolio />
    </>
  );
};

export default MainPage;