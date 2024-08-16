import React from 'react';
import '../App.css';
import './Portfolio.css';
import profileImage from '../assets/images/mimi.jpg';
import Portfolio from './Portfolio';

const MainPage = () => {
  return (
    <div className="main-container">
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
          <div className="introduction">
            <p>
              Hi! I am Fiona, a recent graduate from BSc-Computing and Software System student at The University of Melbourne. I am currently working full-time as a Machine Learning Engineer.
            </p>
            <p>
              I have been developing my skills through various research and hands-on projects. I can code in advanced level using Python, C, C#, and Java; I have two years of experiences in ML and AI and am also experienced with Computer Vision, VR development, game development (Unity), 3D modelling (Blender), and web development (VUE, Flask). Still exploring!
            </p>
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
    </div>
  );
};

export default MainPage;