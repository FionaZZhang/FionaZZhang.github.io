// src/components/Experiences.js
import React from 'react';
import './Experiences.css';

// Import icons
import mightyGamesIcon from '../assets/images/mightyIcon.jpg';
import csiroIcon from '../assets/images/csiroIcon.svg.png';
import unimelbIcon from '../assets/images/unimelbIcon.png';

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h2 className="experiences-title">Resume</h2>
      
      <div className="experience-item">
        <h3>
          <img src={mightyGamesIcon} alt="Mighty Games icon" className="org-icon" />
          Machine Learning Engineer - Graduate (C#)
        </h3>
        <p className="date">April 2024 - Present</p>
        <p className="company">
          <a href="https://www.mightybuildandtest.com/" target="_blank" rel="noopener noreferrer">
            Mighty Games Group
          </a>
        </p>
        <p className="location">Melbourne, Australia</p>
        <ul>
          <li>Spearheaded the development and integration of ML technologies, including computer vision and multi-modal language models, to innovate version one software solutions for game testing. Designed and deployed an advanced internal automated chatbot using the RAG framework, integrating with Slack and Notion to efficiently manage and disseminate internal data.</li>
          <li>Led research and development initiatives using AWS services, such as SageMaker and Bedrock, to train and optimize ML models, driving continuous exploration in AI tools and capabilities.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>
          <img src={csiroIcon} alt="CSIRO icon" className="org-icon" />
          Research Intern
        </h3>
        <p className="date">Nov 2023 - Feb 2024</p>
        <p className="company">
          <a href="https://www.csiro.au/en/" target="_blank" rel="noopener noreferrer">
            Commonwealth Scientific and Industrial Research Organisation (CSIRO)
          </a>
        </p>
        <p className="location">Melbourne, Australia</p>
        <ul>
          <li>Focused on deploying and evaluating Private/Local LLMs within secure infrastructures, training them on domain-specific datasets to enhance their utility as expert knowledge systems for specialized use-cases.</li>
          <li>Key contributions: trained the Mistral model with domain-specific datasets, developed a RAG system for domain-specific Q&A, serving as an MVP for a larger internal project.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>
          <img src={unimelbIcon} alt="University of Melbourne icon" className="org-icon" />
          Algorithms Academic Tutor
        </h3>
        <p className="date">Feb 2023 - Dec 2023</p>
        <p className="company">
          <a href="https://www.unimelb.edu.au/" target="_blank" rel="noopener noreferrer">
            The University of Melbourne
          </a>
        </p>
        <p className="location">Melbourne, Australia</p>
        <ul>
          <li>Work as an academic tutor for two undergraduate core algorithm subjects.</li>
          <li>Key contributions include creating exam questions, assessing assignments and providing assignment feedback, delivering tutorials, and answering queries on the discussion forum.</li>
        </ul>
      </div>
      <h2 className="experiences-title">Education</h2>
      <div className="education-item">
        <h3>
          <img src={unimelbIcon} alt="University of Melbourne icon" className="org-icon" />
          <a href="https://www.unimelb.edu.au/" target="_blank" rel="noopener noreferrer">
            The University of Melbourne
          </a>
        </h3>
        <p className="date">2021 - 2023</p>
        <p className="degree">Bachelor of Science in Computing and Software Systems</p>
        <p className="location">Melbourne, Australia</p>
        <p className="grade">Grade: 86 (First Class Honours)</p>
        <p className="activities">Activities and societies: Design of Algorithms student representative, AIESEC Committee, Chinese Debating Team Member, Chinese Culture Society Marketing Team Vice-President, one semester exchange</p>
        <p className="scholarships">Scholarships:</p>
        <ul>
          <li>2021 Melbourne International Undergraduate Scholarship</li>
          <li>2022 Melbourne International Undergraduate Scholarship</li>
          <li>2022 Melbourne Global Scholars Award</li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;