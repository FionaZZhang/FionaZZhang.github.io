// src/components/Experiences.js
import React from 'react';
import './Experiences.css';

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h2>Experience</h2>
      
      <div className="experience-item">
        <h3>Machine Learning Engineer - Graduate (C#)</h3>
        <p>April 2024 - Present</p>
        <p>Mighty Games Group</p>
        <p>Melbourne, Australia</p>
        <ul>
          <li>Spearheaded the development and integration of ML technologies, including computer vision and multi-modal language models, to innovate version one software solutions for game testing. Designed and deployed an advanced internal automated chatbot using the RAG framework, integrating with Slack and Notion to efficiently manage and disseminate internal data.</li>
          <li>Led research and development initiatives using AWS services, such as SageMaker and Bedrock, to train and optimize ML models, driving continuous exploration in AI tools and capabilities.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Research Intern</h3>
        <p>Nov 2023 - Feb 2024</p>
        <p>Commonwealth Scientific and Industrial Research Organisation (CSIRO)</p>
        <p>Melbourne, Australia</p>
        <ul>
          <li>Focused on deploying and evaluating Private/Local LLMs within secure infrastructures, training them on domain-specific datasets to enhance their utility as expert knowledge systems for specialized use-cases.</li>
          <li>Key contributions: trained the Mistral model with domain-specific datasets, developed a RAG system for domain-specific Q&A, serving as an MVP for a larger internal project.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Algorithms Academic Tutor</h3>
        <p>Feb 2023 - Dec 2023</p>
        <p>The University of Melbourne</p>
        <p>Melbourne, Australia</p>
        <ul>
          <li>Work as an academic tutor for two undergraduate core algorithm subjects.</li>
          <li>Key contributions include creating exam questions, assessing assignments and providing assignment feedback, delivering tutorials, and answering queries on the discussion forum.</li>
        </ul>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <h3>The University of Melbourne</h3>
        <p>2021 - 2023</p>
        <p>Bachelor of Science in Computing and Software Systems</p>
        <p>Melbourne, Australia</p>
        <p>Grade: 86 (First Class Honours)</p>
        <p>Activities and societies: Design of Algorithms student representative, AIESEC Committee, Chinese Debating Team Member, Chinese Culture Society Marketing Team Vice-President, one semester exchange</p>
        <p>Scholarships:</p>
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