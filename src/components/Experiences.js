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
          <li><b>Software Development (.NET C#):</b> Collaborated with specialist engineers and QA analysts in a team of five to develop AI-driven software for game testing and released v1.0 for pilot testing.</li>
          <li><b>Machine Learning:</b> Integrated computer vision and multi-modal language models into the software, enabling automatic bug detection from screen sources. Designed and deployed an internal chatbot using the RAG framework, integrated with Slack and Notion to manage and disseminate internal data, which improved team productivity.</li>
          <li><b>Research and Development:</b> Led research and development initiatives using AWS services including SageMaker, Bedrock, and OpenSearch, resulting in expanded company toolsets and documentation.</li>
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
          <li>Trained the Mistral model using PEFT and LoRA on internal HPC with domain-specific datasets, resulting in a 23.39% performance improvement over the base model in specialized use cases.</li>
          <li>Developed a RAG system for domain-specific Q&A with an easily accessible web interface, serving as a proof of concept for an internal project initiative.</li>
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
          <li><b>Tutoring:</b> Led weekly tutorials on advanced algorithms and data structures, covering sorting algorithms, tree structures, graph algorithms, and dynamic programming.</li>
          <li><b>Content Development:</b> Collaborated with faculty to develop and review assignments, ensuring smooth submission processes and identifying unmentioned assumptions in specifications. Crafted exam questions that were used in the 2024 final exam.</li>
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