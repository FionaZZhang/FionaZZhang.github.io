import React, { useState } from 'react';
import { ScanEye, Cat, Car} from 'lucide-react';
import './Portfolio.css';
import CatBox from '../assets/videos/CatBox.mp4';
import VisCAT from '../assets/videos/VisCAT.MOV';
import Mercedes from '../assets/videos/Mercedes.mov';
import MUSE from '../assets/videos/MUSE.mp4'
import MuseCover from '../assets/images/MuseCover.png';
import NemoCover from '../assets/images/NemoCover.png';
import FindingNemo from '../assets/videos/FindingNemo.MOV';
import CNN from '../assets/images/architecture.png';
import CNNResults from '../assets/images/CNNResults.png';
import NemoResults from '../assets/images/NemoResults.png';

const ProjectCard = ({ title, description, icon, videoUrl, links, award }) => {
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
          <p className="project-description">{award}</p>
        </div>
      </div>
    </div>
  );
};

const EmphasisedProjectCard = ({ title, description, coverImage, realTitle, videoUrl, links, extraContents, demoDescription }) => {
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
            {extraContents.map((contentItem, index) => (
              <div key={index} className="extra-content">
                <h4>{contentItem.title}</h4>
                <p>{contentItem.content}</p>
                {contentItem.imageUrl && (
                  <div className="content-image">
                    <img src={contentItem.imageUrl} alt="Proposed solution interface" />
                  </div>
                )}              
              </div>
            ))}
          </div>
          <div className="project-video-container">
            <div className="extra-content">
              <h4>Demo</h4>
              <p>{demoDescription}</p>
            </div>
              {videoUrl && (
              <div className="project-video-container">
                <video controls className="project-video">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      icon: ScanEye,
      title: "🐱 Vis-CAT",
      description: "A captivating test platform to detect 👀 visual cognition deficits of young learners 👾",
      videoUrl: VisCAT,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Vis-CAT-99" },
        { text: "Demo", url: "https://deploy.d3ltskl8ryle97.amplifyapp.com/Lobby" }
      ],
      award: (
        <span>
          Award: scored 95% in the associated subject, invited to showcase the project at the 
          <a href="https://melbconnect.com.au/events/2023-tramaganza" target="_blank" rel="noopener noreferrer"> TRAMAGANZA 2023</a> conference in Melbourne.
        </span>
      )    
    },
    {
      icon: Cat,
      title: "🐈 CATBOX",
      description: "A web platform to explore the creativity 🦄 of language models!",
      videoUrl: CatBox,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Caption-Writer-Software" },
      ],
      award: (
        <span>
        Award: won 'The Diversity Award' at the 
        <a href="https://www.linkedin.com/posts/web3-ai-hackfest_web3hackfest-awards-diversity-activity-7105713747377197056-Thm0?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"> 2023 Web3 & AI Hackathon</a>.
        </span>
      )
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
      description: "This study proposes a novel approach using visual spectrograms as input, and propose a hybrid model that combines the strength of the Residual neural Network (ResNet) and the Gated Recurrent Unit (GRU). The research demonstrates significant improvements in music genre classification accuracy and provides insights into the potential of visual representations for audio analysis tasks.",
      realTitle: "Music Genre Classification with ResNet and Bi-GRU Using Visual Spectrograms",
      videoUrl: MUSE,
      links: [
        { text: "Paper", url: "https://arxiv.org/abs/2307.10773" },
        { text: "Github", url: "https://github.com/FionaZZhang/DeepLearnMuse"},
        { text: "Site [slow due to big AI model]", url: "https://deeplearnmuse-3t5mgrwzwa-km.a.run.app" }
      ],
      extraContents: [
        {
          title: "Abstract",
          content: `Music recommendation systems have emerged as a vital component to enhance user experience and satisfaction 
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
          title: "Model Architecture",
          content: `The key idea of the proposed architecture is to combine two robust deep learning architectures, 
                    Residual Network (ResNet) and Bidirectional Gated Recurrent Unit (Bi-GRU), to provide a richer 
                    set of features for classification which can recognise both spatial hierarchical dependencies and 
                    temporal dependencies of the input.`,
          imageUrl: CNN
        },
        {
          title: "Results",
          content: `The superior performance of the hybrid model (accuracy of 0.81) compared to the others highlights 
                    its ability to better capture the spatial and temporal dynamics inherent in music data, showcasing 
                    the benefits of using a hybrid architecture to tackle different aspects of data complexity. `,
          imageUrl: CNNResults
        }
      ],
      demoDescription: `This proof-of-concept web app was built from scratch and is deployed on Google Cloud. 
                        It brings my research to life by implementing a real music recommender system. 
                        A trained deep learning model is used to classify the user's audio into a specific genre, 
                        and a genre vector is employed to find and recommend the most similar music from a public 
                        database. (sound on! 🔊)`
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
      extraContents: [
        {
          title: "Abstract",
          content: `The task of finding a hidden input is ubiquitous in 3D Virtual Reality (VR) games or applications, where a 
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
        {
          title: "Results",
          content: `The combining method of haptic and visual feedback outperformed all other methods in most 
                    features and exceeded the baseline, while visual-only and haptic-only methods were less effective, 
                    supporting the hypothesis that a combination of feedback techniques yields the best results.`,
          imageUrl: NemoResults
        }
      ],
      demoDescription: `This demo video showcases the user testing process. It demonstrates the baseline (simple pointer), 
                        along with the visual, auditory, and haptic feedback provided to the user, the process of finding Nemo, 
                        and the data logging procedure for the research.`
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Selected Work</h1>

      <div className="introduction">
      <p>My interest lies at the intersection of Artificial Intelligence (AI) and Human-Computer Interaction (HCI). 
        I am deeply passionate about developing AI solutions that enhance, simplify, and transform the ways humans 
        interact with technology. My goal is to make AI technology accessible and impactful, extending beyond the 
        realm of research. If you share this vision or have related opportunities, I would love to connect!</p>
      </div>
      <div className="emphasised-projects-grid">
        {emphasisedProjects.map((project, index) => (
          <EmphasisedProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="introduction">
      <p>Web application development / 3D modeling</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="introduction">
      <p>In my free time, I love dancing and travelling =) I love exploring our planet 🌏 !</p>
      </div>
    </div>
  );
};

export default Portfolio;