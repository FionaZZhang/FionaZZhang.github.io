import React from 'react';
import './Skills.css';
import { MessageSquareCode, Brain, Code, GitBranch, Server, Network, Shield, Bot, AudioLines, ClipboardCheck } from 'lucide-react';

const skills = [
  {
    icon: MessageSquareCode,
    title: 'RAG and Agentic Systems',
    affiliation: 'Background: Machine Learning Engineer at Sitemate and Mighty Games Group, Research Intern at CSIRO',
    stack: [
      'Python', 'TypeScript', 'OpenAI API', 'LLM agents', 'Tool calling',
      'RAG', 'Embeddings search', 'Kuzu (graph DB)', 'AWS Bedrock', 'AWS OpenSearch',
      'AWS Lambda', 'Slack API', 'Notion API'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Evals for AI Systems',
    affiliation: 'Background: Machine Learning Engineer at Sitemate',
    stack: [
      'Python', 'TypeScript', 'Eval harness design', 'LLM-as-judge scorers',
      'Reference-match scorers', 'Regression suites', 'Human annotation',
      'Trace collection', 'CI/CD gating'
    ]
  },
  {
    icon: Brain,
    title: 'Machine Learning Model Training',
    affiliation: 'Background: Using AWS at Mighty Games Group, training models from scratch at CSIRO',
    stack: [
      'PyTorch', 'Hugging Face', 'PEFT', 'LoRA', 'QLoRA', 'Mistral',
      'AWS SageMaker', 'AWS Bedrock', 'CUDA', 'HPC clusters'
    ]
  },
  {
    icon: AudioLines,
    title: 'Audio Language Model Training',
    affiliation: 'Background: Advanced NLP and Multimodal ML research at Carnegie Mellon University',
    stack: [
      'Qwen2-Audio', 'Qwen2.5-Omni', 'Qwen3-Omni', 'LoRA', 'QLoRA', 'PyTorch',
      'Hugging Face PEFT', 'emotion2vec', 'WavLM', 'DistilRoBERTa',
      'MELD', 'Friends-MMC', 'VAD trajectory metrics'
    ]
  },
  {
    icon: Bot,
    title: 'Robotics and Autonomous Systems',
    affiliation: 'Background: F1TENTH racing and the NASA MoonRanger lunar rover mission at Carnegie Mellon University',
    stack: [
      'ROS 2', 'Python', 'C++', 'Go', 'Vue', 'Docker', 'LiDAR', 'RealSense',
      'OpenCV', 'YOLO', 'Stable-Baselines3', 'Soft Actor-Critic', 'Gymnasium',
      'f110_gym', 'Pure Pursuit', 'RRT', 'PID control'
    ]
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    affiliation: 'Background: Full stack development work at Mighty Games Group and Sitemate',
    stack: [
      '.NET', 'C#', 'Java', 'Python', 'Go', 'TypeScript', 'React', 'Vue.js',
      'Flask', 'REST APIs', 'MongoDB', 'Docker', 'AWS', 'Google Cloud', 'Git', 'SVN'
    ]
  },
  {
    icon: GitBranch,
    title: 'Algorithms and Data Structures',
    affiliation: 'Background: Algorithms Academic Tutor at The University of Melbourne',
    stack: [
      'Python', 'C', 'Java', 'Graph algorithms', 'Dynamic programming',
      'Sorting and searching', 'Tree structures', 'Complexity analysis'
    ]
  },
  {
    icon: Server,
    title: 'Computer Systems',
    affiliation: 'Background: Graduate coursework at Carnegie Mellon University',
    stack: [
      'C', 'x86-64 assembly', 'Linux', 'GDB', 'Memory allocators', 'Shell programming',
      'System calls', 'Concurrency', 'Proxy servers', 'Distributed file systems'
    ]
  },
  {
    icon: Network,
    title: 'Networks',
    affiliation: 'Background: Specialized coursework at Carnegie Mellon University',
    stack: [
      'TCP/UDP', 'HTTP', 'DNS', 'CDNs', 'P2P', 'Congestion control', 'IP',
      'BGP', 'OSPF', 'RIP', 'Ethernet', 'VLANs', 'MPLS',
      'Software Defined Networks', 'Data center networking'
    ]
  },
  {
    icon: Shield,
    title: 'Information Security',
    affiliation: 'Background: Security-focused coursework at Carnegie Mellon University',
    stack: [
      'Cryptography', 'Access control', 'Buffer overflow', 'Cache attacks',
      'Vulnerability assessment', 'Security policy'
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      {skills.map(({ icon: Icon, title, affiliation, stack }, index) => (
        <div className="skill-item" key={index}>
          <span className="skill-icon-tile">
            <Icon size={22} strokeWidth={1.75} />
          </span>
          <h2>{title}</h2>
          <p className="skill-affiliation">{affiliation}</p>
          <p className="tech-stack-label">Tech Stack</p>
          <ul className="tech-stack">
            {stack.map((tool, i) => (
              <li className="tech-tag" key={i}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
