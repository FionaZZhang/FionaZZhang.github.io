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
import F1TenthCover from '../assets/images/f1tenthTrajectories.png';
import F1TenthTraining from '../assets/images/f1tenthTraining.png';
import F1TenthSacVsPP from '../assets/images/f1tenthSacVsPP.png';
import F1TenthCrossSim from '../assets/images/f1tenthCrossSim.png';
import F1TenthPerception from '../assets/images/f1tenthPerception.png';
import ALMHero from '../assets/images/almHero.png';
import ALMMismatch from '../assets/images/almMismatchTypes.png';
import ALMPipeline from '../assets/images/almPipeline.png';
import ALMQlora from '../assets/images/almQlora.png';
import ALMComparison from '../assets/images/almComparison.png';
import EmoFidVad from '../assets/images/emofidVadTrajectory.png';
import EmoFidTraining from '../assets/images/emofidTraining.png';
import EmoFidEmbedding from '../assets/images/emofidEmbedding.png';
import EmoFidCrossTurn from '../assets/images/emofidCrossTurn.png';
import EmoFidTurnTransitions from '../assets/images/emofidTurnTransitions.png';
import MoonRangerCover from '../assets/images/moonrangerCover.jpg';

const ProjectCard = ({ title, icon, videoUrl, links, award }) => {
  const Icon = icon;
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card${flipped ? ' is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="icon-circle">
            <Icon size={48} />
          </div>
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="flip-card-back">
          <h3 className="project-title">{title}</h3>
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

const EmphasisedProjectCard = ({ title, description, coverImage, coverContain, realTitle, videoUrl, links, extraContents, demoDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`emphasised-project-card${isHovered ? ' is-open' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((open) => !open)}
    >
      <div className="emphasised-project-content">
        {coverImage ? (
          <div
            className={`cover-image${coverContain ? ' cover-contain' : ''}`}
            style={{ backgroundImage: `url(${coverImage})` }}
          ></div>
        ) : (
          <div className="cover-image cover-placeholder">
            <span>Image coming soon</span>
          </div>
        )}
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
          {(videoUrl || demoDescription) && (
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
          )}
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
      videoUrl: VisCAT,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/Vis-CAT-99" },
        { text: "Demo", url: "https://deploy.d3ltskl8ryle97.amplifyapp.com/" }
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
      videoUrl: Mercedes,
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/3DMercedes" },
      ]
    },
  ];

  const roboticsProjects = [
    {
      coverImage: F1TenthCover,
      coverContain: true,
      title: "🏁 F1TENTH Autonomous Racing",
      description: "A 1/10-scale autonomous race car that drives from LiDAR alone. I built the full stack — emergency braking, wall following, gap following, pure pursuit, RRT planning, camera perception — then trained a Soft Actor-Critic policy end-to-end and raced it at the F1TENTH competition at UPenn.",
      realTitle: "From Classical Control to Deep RL on a 1/10-Scale Race Car",
      links: [
        { text: "GitHub", url: "https://github.com/FionaZZhang/f1tenth" },
        { text: "Paper", url: `${process.env.PUBLIC_URL}/assets/f1tenth-paper.pdf` }
      ],
      extraContents: [
        {
          title: "The Stack",
          content: `The car runs on ROS 2 with a 1080-beam LiDAR and a RealSense camera. I worked through the full
                    autonomy arc: instantaneous time-to-collision emergency braking with a bicycle-model side-slip
                    correction, PID wall following, a disparity-extender gap follower, adaptive-lookahead pure pursuit
                    over recorded waypoints, and RRT motion planning on a 200x200 local occupancy grid with mixed
                    forward-biased and obstacle-aware sampling.`
        },
        {
          title: "Perception",
          content: `A camera pipeline for lane detection and object distance estimation — HSV lane masking with
                    contour filtering, checkerboard intrinsic calibration to back-project bounding boxes onto the
                    ground plane, and a small custom YOLO-style detector running on 180x320 input.`,
          imageUrl: F1TenthPerception
        },
        {
          title: "Deep RL: Soft Actor-Critic",
          content: `I replaced the hand-tuned controllers with a learned policy: 108 downsampled LiDAR beams plus
                    normalised velocity (111-dim observation) mapped straight to steering and speed. Trained with
                    SB3 SAC on two simulators — a fast in-house kinematic bicycle model and the real f110_gym with
                    RK4 dynamics — and deployed as a ROS 2 inference node at 50 Hz.`,
          imageUrl: F1TenthTraining
        },
        {
          title: "Results",
          content: `SAC reaches 74% of Pure Pursuit's reward using only LiDAR — no waypoints, no pose — and is
                    remarkably consistent (return std of 0.11 over 100 episodes). Inference costs ~65us on CPU,
                    770x faster than the control loop needs.`,
          imageUrl: F1TenthSacVsPP
        },
        {
          title: "The Interesting Failure",
          content: `Sim-to-sim transfer collapses. A policy trained on the kinematic simulator crashes within ~200
                    steps every single time on the real f110_gym — it never had to learn slip or single-track lateral
                    dynamics, so its actions saturate at the steering clip. Quantifying that gap turned out to be the
                    most useful result of the project: training on the wrong dynamics buys you nothing.`,
          imageUrl: F1TenthCrossSim
        }
      ]
    },
    {
      coverImage: MoonRangerCover,
      title: "🌙 MoonRanger Lunar Rover (NASA)",
      description: "Mission control software for NASA's MoonRanger — a rover slated to fly to the lunar south pole in 2029 to search for water ice. I built the Waypoints feature for autonomous navigation, plus FTP functionality and its command interfaces.",
      realTitle: "MoonRanger Lunar Rover Mission — Mission Control Software",
      links: [
        { text: "Link", url: "https://www.cmu.edu/news/stories/archives/2025/august/carnegie-mellons-moonranger-slated-to-fly-on-2029-lunar-mission" }
      ],
      extraContents: [
        {
          title: "The Mission",
          content: `MoonRanger is a Carnegie Mellon-built autonomous rover selected to fly on a 2029 lunar mission,
                    tasked with detecting water ice at the Moon's south pole. It operates without continuous
                    communication with Earth, so the ground software has to plan and verify autonomous behaviour
                    rather than drive the rover directly.`
        },
        {
          title: "What I Built",
          content: `I contributed to the mission control software in Go and Vue, containerised with Docker. My main
                    piece was the Waypoints feature for autonomous navigation — the interface operators use to
                    specify and manage the route the rover drives on its own. I also implemented FTP functionality
                    and the associated command interfaces for moving data to and from the rover, and maintained and
                    improved the team's CI/CD pipeline.`
        },
        {
          title: "Stack",
          content: `Go, Vue, Docker, CI/CD.`
        }
      ]
    }
  ];

  const almProjects = [
    {
      coverImage: EmoFidVad,
      coverContain: true,
      title: "🎭 Emotional Fidelity in Audio Language Models",
      description: "Audio language models sound human — but can they stay emotionally in character across a whole conversation? We built an evaluation framework to find out, then fine-tuned Qwen2.5-Omni to play Chandler, Ross and Phoebe from Friends.",
      realTitle: "Emotional Fidelity in Audio Language Models (CMU 11-777, Aug 2025 – May 2026)",
      links: [
        { text: "Paper", url: `${process.env.PUBLIC_URL}/assets/emotional-fidelity-paper.pdf` }
      ],
      extraContents: [
        {
          title: "The Question",
          content: `Current ALMs generate convincingly human-like speech, but whether they preserve emotional
                    consistency and authenticity across a two-person conversation is largely unexplored. We asked:
                    if you replace one speaker in a dyadic dialogue with an ALM, does the emotional thread survive?
                    Standard TTS pipelines "flatten" affect — text alone can't carry Chandler's sarcasm or Phoebe's
                    tonal swerves, so the synthesiser has nothing to condition on.`
        },
        {
          title: "Data",
          content: `We built a character-specific dialogue dataset from Friends-MMC — roughly 3,000 samples and
                    ~6 hours of multi-turn conversational audio per character, for Chandler, Ross and Phoebe. Each
                    sample pairs the merged audio and transcript of every preceding turn in the scene with the
                    character's actual response, so the model sees how the conversation sounded, not just what it said.`,
          imageUrl: EmoFidTurnTransitions
        },
        {
          title: "Method: Selective Fine-Tuning",
          content: `We compared three paradigms — a cascaded LLM+TTS baseline, in-context prompting with
                    Qwen3-Omni-Flash (zero- and few-shot), and our proposed fine-tune. The fine-tune applies LoRA
                    (r=16, alpha=32) to the Thinker module of Qwen2.5-Omni while keeping the multimodal encoder and
                    the Talker speech synthesiser completely frozen. That's the key design choice: all the learning
                    capacity goes into persona-conditioned reasoning, and none of it can degrade the pre-trained
                    speech quality.`,
          imageUrl: EmoFidTraining
        },
        {
          title: "Evaluation Framework",
          content: `Four families of metrics, because no single one captures emotional authenticity. VAD distance
                    measures L2 error against ground truth in valence-arousal-dominance space using a CSER probe
                    (WavLM + BiLSTM), normalised to strip out timbre. Emotion similarity is cosine distance between
                    emo2vec embeddings. Three expert annotators rated 100 utterances per character on emotional
                    rationality, naturalness and response relevance. Finally, an ALM judge scored 11 dimensions of
                    realism spanning prosody, emotion, identity and narrative fit.`,
          imageUrl: EmoFidEmbedding
        },
        {
          title: "Results",
          content: `Fine-tuning converged stably — 43.37% loss reduction over 94 steps with steady gradient norms,
                    and most of the adaptation happening in the first half of training. The fine-tuned ALM
                    outperformed both the cascaded baseline and few-shot prompting on every metric family. Per
                    character, Chandler was easiest to match (his sarcastic delivery is highly consistent) and
                    Phoebe hardest — her emotional range is genuinely unpredictable. Human ratings correlated
                    strongly with the automatic metrics, which is what makes the framework usable.`,
          imageUrl: EmoFidCrossTurn
        },
        {
          title: "Limitations",
          content: `Friends audio carries a laugh track, so background acoustics contaminate the emotion probes.
                    High-context irony remains hard — sarcasm depends on knowledge the model doesn't have. And
                    emotional consistency degrades over long conversations, which is precisely the thing we set out
                    to measure.`
        }
      ]
    },
    {
      coverImage: ALMHero,
      coverContain: true,
      title: "🫂 When \"I'm Fine\" Isn't Fine",
      description: "People mask their feelings — saying positive words while their voice says otherwise. We fine-tuned an audio language model to notice that gap and respond to it, rather than taking the words at face value.",
      realTitle: "Response Strategy Selection Under Acoustic-Semantic Emotional Incongruence in Supportive Dialogue",
      links: [
        { text: "Paper", url: `${process.env.PUBLIC_URL}/assets/alm-emotion-paper.pdf` },
        { text: "Poster", url: `${process.env.PUBLIC_URL}/assets/alm-emotion-poster.pdf` }
      ],
      extraContents: [
        {
          title: "The Problem",
          content: `"I'm fine." — said with a trembling voice. Emotional support systems read text only, so they miss
                    the disconnect entirely. We ask a question nobody had studied systematically: when a system detects
                    that what you say and how you sound disagree, how should it actually respond? We split the problem
                    into two kinds of incongruence — masking (positive words, negative voice) and overstatement
                    (negative words, calmer voice) — which turn out to need different strategies.`,
          imageUrl: ALMMismatch
        },
        {
          title: "Pipeline",
          content: `We mine acoustic-semantic incongruent utterances from MELD by comparing ground-truth audio emotion
                    against a DistilRoBERTa text sentiment classifier, then evaluate four response strategies:
                    text-only, audio-only, naive fusion, and explicit mismatch acknowledgment.`,
          imageUrl: ALMPipeline
        },
        {
          title: "Fine-Tuning the ALM",
          content: `Prompting exposed a trade-off — explicitly telling the model to acknowledge the mismatch raised
                    acknowledgment to 73.7% but made responses noticeably less natural. So we QLoRA fine-tuned
                    Qwen2-Audio to learn the behaviour instead of being instructed into it: 7M of 7B parameters
                    trained, loss down 95% (18.7 to 0.86), token accuracy 35% to 93%.`,
          imageUrl: ALMQlora
        },
        {
          title: "Results",
          content: `The fine-tuned ALM more than triples mismatch acknowledgment over the audio baseline (21.1% to
                    69.0%) and scores the highest empathy of every method tested (+156% vs baseline, +44% vs the best
                    prompting strategy) — while sounding more natural than prompting did. Treating modality conflict
                    as signal rather than noise is the whole idea.`,
          imageUrl: ALMComparison
        },
        {
          title: "Where It Breaks",
          content: `Short utterances ("Okay!", "Hey!") carry too little semantic content to judge (~15% of errors),
                    compliments and narration get misread as self-expression (~10%), and sarcasm doesn't fit the
                    binary masking/overstatement taxonomy at all (~8%). Next steps: sarcasm as a third type,
                    multi-turn dialogue context, and strategy-specific fine-tuning.`
        }
      ]
    }
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
      <h1 className="portfolio-title">Projects</h1>

      <h2 className="section-title">🤖 Robotics</h2>
      <div className="emphasised-projects-grid">
        {roboticsProjects.map((project, index) => (
          <EmphasisedProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="section-title">🔊 Audio Language Models</h2>
      <div className="introduction">
      <p>Teaching models to understand what people mean, not just what they say.</p>
      </div>
      <div className="emphasised-projects-grid">
        {almProjects.map((project, index) => (
          <EmphasisedProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="section-title">📄 Research</h2>
      <div className="emphasised-projects-grid">
        {emphasisedProjects.map((project, index) => (
          <EmphasisedProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="section-title">🛠️ Web Development & 3D Modeling</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;