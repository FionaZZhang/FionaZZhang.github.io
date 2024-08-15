import React from 'react';
import './Portfolio.css';
import CatBox from '../assets/videos/CatBox.mp4';
import VisCAT from '../assets/videos/VisCAT.MOV';
import Mercedes from '../assets/videos/Mercedes.mov';
import MUSE from '../assets/videos/MUSE.mov'
import FindingNemo from '../assets/videos/FindingNemo.MOV';

const ProjectCard = ({ title, description, imageUrl, videoUrl, links }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
    <p className="project-description">{description}</p>
    {videoUrl && (
      <div className="project-video-container">
        <video controls className="project-video">
          <source src={videoUrl} type="video/quicktime" />
          <source src={videoUrl.replace('.mov', '.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
    <div className="project-links">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "🐱 Vis-CAT",
      description: "A captivating test platform to detect 👀 visual cognition deficits of young learners 👾",
      videoUrl: VisCAT,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Vis-CAT-99" },
        { text: "Demo", url: "https://deploy.d3ltskl8ryle97.amplifyapp.com/Lobby" }
      ]
    },
    {
      title: "🐈 CATBOX",
      description: "A web platform to explore the creativity 🦄 of language models!",
      videoUrl: CatBox,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Caption-Writer-Software" },
      ]
    },
    {
      title: "🏎️ Doomsday Mercedes",
      description: "This surreal animation portraits a 🪐 magical reality that carries my vision of the future...",
      videoUrl: Mercedes,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/3DMercedes" },
      ]
    },
    {
      title: "🎶 MUSE: AI recommender",
      description: "A music recommendation system as a proof of concept for a hybrid deeplearning model.",
      videoUrl: MUSE,
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/2307.10773" },
        { text: "Site [with big AI model]", url: "https://deeplearnmuse-3t5mgrwzwa-km.a.run.app" }
      ]
    },
    {
      title: "🐳 Finding NEMO!",
      description: "Virtual Reality Gameplay developed to investigate multimodal feedback.",
      videoUrl: FindingNemo,
      links: [
        { text: "Project & Paper", url: "https://www.vr-ku.dk/education/vr-course/selected-projects/finding-nemo-in-vr" },
        { text: "Github", url: "https://github.com/FionaZZhang/VR_Object_Tracking" }
      ]
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;