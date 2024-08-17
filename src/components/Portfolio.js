import React, { useState } from 'react';
import { Camera, Cat, Car, Music, Fish } from 'lucide-react';
import './Portfolio.css';
import CatBox from '../assets/videos/CatBox.mp4';
import VisCAT from '../assets/videos/VisCAT.MOV';
import Mercedes from '../assets/videos/Mercedes.mov';
import MUSE from '../assets/videos/MUSE.mov'
import MuseCover from '../assets/images/MuseCover.png';
import NemoCover from '../assets/images/NemoCover.png';
import FindingNemo from '../assets/videos/FindingNemo.MOV';

const ProjectCard = ({ title, description, icon, videoUrl, links }) => {
  const Icon = icon;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="icon-circle">
            <Icon size={48} />
          </div>
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="flip-card-back">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          {videoUrl && (
            <div className="project-video-container">
              <video controls className="project-video">
                <source src={videoUrl} type="video/mp4" />
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
      </div>
    </div>
  );
};

const EmphasisedProjectCard = ({ title, description, coverImage, realTitle, videoUrl, links, extraContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="emphasised-project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="emphasised-project-content">
        <div className="cover-image" style={{ backgroundImage: `url(${coverImage})` }}></div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      {isHovered && (
        <div className="emphasised-project-hover">
          <div className="extra-content">
            <h4>{realTitle}</h4>
          </div>
          <div className="project-links">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                {link.text}
              </a>
            ))}
          </div>
          <div className="extra-content">
            <h4>Abstract</h4>
            <p>{extraContent}</p>
          </div>
          <div className="project-video-container">
            <h4>Demo</h4>
            <video autoPlay loop muted className="project-video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      icon: Camera,
      title: "🐱 Vis-CAT",
      description: "A captivating test platform to detect 👀 visual cognition deficits of young learners 👾",
      videoUrl: VisCAT,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Vis-CAT-99" },
        { text: "Demo", url: "https://deploy.d3ltskl8ryle97.amplifyapp.com/Lobby" }
      ]
    },
    {
      icon: Cat,
      title: "🐈 CATBOX",
      description: "A web platform to explore the creativity 🦄 of language models!",
      videoUrl: CatBox,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Caption-Writer-Software" },
      ]
    },
    {
      icon: Car,
      title: "🏎️ Doomsday Mercedes",
      description: "This surreal animation portraits a 🪐 magical reality that carries my vision of the future...",
      videoUrl: Mercedes,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/3DMercedes" },
      ]
    },
  ];

  const emphasisedProjects = [
    {
      coverImage: MuseCover,
      title: "🎶 MUSE: AI recommender",
      description: "This study proposes a novel approach using visual spectrograms as input, and propose a hybrid model that combines the strength of the Residual neural Network (ResNet) and the Gated Recurrent Unit (GRU). Our research demonstrates significant improvements in music genre classification accuracy and provides insights into the potential of visual representations for audio analysis tasks.",
      realTitle: "Music Genre Classification with ResNet and Bi-GRU Using Visual Spectrograms",
      videoUrl: MUSE,
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/2307.10773" },
        { text: "Site [with big AI model]", url: "https://deeplearnmuse-3t5mgrwzwa-km.a.run.app" }
      ],
      extraContent: `Music recommendation systems have emerged as a vital component to enhance user experience and satisfaction 
          for the music streaming services, which dominates music consumption. The key challenge in improving these 
          recommender systems lies in comprehending the complexity of music data, specifically for the underpinning 
          music genre classification. The limitations of manual genre classification have highlighted the need for a more 
          advanced system, namely the Automatic Music Genre Classification (AMGC) system. While traditional machine 
          learning techniques have shown potential in genre classification, they heavily rely on manually engineered 
          features and feature selection, failing to capture the full complexity of music data. On the other hand, deep 
          learning classification architectures like the traditional Convolutional Neural Networks (CNN) are effective in 
          capturing the spatial hierarchies but struggle to capture the temporal dynamics inherent in music data. To address 
          these challenges, this study proposes a novel approach using visual spectrograms as input, and propose a hybrid 
          model that combines the strength of the Residual neural Network (ResNet) and the Gated Recurrent Unit 
          (GRU). This model is designed to provide a more comprehensive analysis of music data, offering the 
          potential to improve the music recommender systems through achieving a more comprehensive analysis of 
          music data and hence potentially more accurate genre classification.`
    },
    {
      coverImage: NemoCover,
      title: "🐳 Finding NEMO!",
      description: "We present a study of visual, auditory, and haptic feedback navigation techniques in guiding the user to find a hidden target in Virtual Reality (VR) environments. Our findings suggest that multimodal feedback can significantly enhance user performance and experience in VR navigation tasks, opening new possibilities for immersive VR game design and training applications.",
      realTitle: "Visual, Auditory, and Haptic Cue Navigation Techniques for Object Tracking in VR Gameplay",
      videoUrl: FindingNemo,
      links: [
        { text: "Project & Paper", url: "https://www.vr-ku.dk/education/vr-course/selected-projects/finding-nemo-in-vr" },
        { text: "Github", url: "https://github.com/FionaZZhang/VR_Object_Tracking" }
      ],
      extraContent: `The task of finding a hidden input is ubiquitous in 3D Virtual Reality (VR) games or applications, where a 
          navigation technique is needed to guide the users to the target. However, integrating sensory cues to 
          navigation is an arduous task for game developers due to the difficulties in balancing the sensory output 
          aroused to the user, as well as the unclear interactions between different types of sensory feedback when 
          applied together. In this report, we investigate the impact of different types of sensory cue navigation 
          techniques as well as their combinations to the users' in-game performance and their likability to the 
          feedback approach. We present a study of visual, auditory, and haptic feedback navigation techniques in 
          guiding the user to find a hidden target. We implement three interaction techniques and four 
          different combinations of sensory cue navigation techniques to investigate the players' in-game 
          performance and likability. Our hypothesis is that multi-sensory feedback navigation is more effective 
          than simple visual cue navigation in terms of the users' performance. The results of this study is significant to 
          VR game or application developers in providing more appropriate feedback cues when navigating the player.`
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Selected Work</h1>

      <div className="introduction">
        <p>My interest is rooted in the intersection of Artificial Intelligence (AI) and Human-Computer Interaction (HCI). I am deeply 
          passionate about creating AI solutions tailored to enhance, simplify, and innovate the ways humans 
          interact with technology. I hope to democratize AI technology to our fingertips, not only in the realm of research. My work aims not just to push the boundaries of what machines can do, but 
          also to ensure they do so in ways that are intuitive and enriching for users. If you share this vision or 
          have related opportunities, please connect with me!</p>
      </div>
      <div className="emphasised-projects-grid">
        {emphasisedProjects.map((project, index) => (
          <EmphasisedProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;