// src/components/MainPage.js
import React from 'react';
import '../App.css';
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
        <div className="introduction">
          <p>
            Hi! I am Fiona, a recent graduate from BSc-Computing and Software System student at The University of Melbourne. I am currently working full-time as a Machine Learning Engineer.
          </p>
          <p>
            I have been developing my skills through various research and hands-on projects. I can code in advanced level using Python, C, C#, and Java; I have two years of experiences in ML and AI and am also experienced with Computer Vision, VR development, game development (Unity), 3D modelling (Blender), and web development (VUE, Flask). Feel free to check out my projects! Still exploring.
          </p>
          <p>
            I am people-oriented and love working with people from different backgrounds. Feel free to reach out!
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default MainPage;