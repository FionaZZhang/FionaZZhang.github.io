import React from 'react';
import './Skills.css';
import { MessageSquareCode, Brain, Code, GitBranch, Server, Network, Shield } from 'lucide-react';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skill-item">
        <MessageSquareCode className="skill-icon" size={24} color="#00ffff" />
        <h2>RAG ChatBot Development</h2>
        <p className="skill-affiliation">Background: Machine Learning Engineer at Mighty Games Group and Research Intern at CSIRO</p>
        <p className="skill-description">
          I have expertise in leveraging existing language models and creating efficient Retrieval-Augmented Generation (RAG) chatbots. 
          I can process data efficiently for various input/output types, designing robust retrieval mechanisms such as implementing 
          embeddings search. I'm proficient at assigning various roles to the bots and creating an AI agent according to specific needs. 
          I'm also skilled in integrating chatbots with diverse platforms including Notion, Slack, and websites, ensuring seamless user 
          experiences across different delivery formats.
        </p>
      </div>

      <div className="skill-item">
        <Brain className="skill-icon" size={24} color="#00ffff" />
        <h2>Machine Learning Model Training</h2>
        <p className="skill-affiliation">Background: Using AWS at Mighty Games Group, training models from scratch at CSIRO</p>
        <p className="skill-description">
          I am proficient in machine learning model training using in PyTorch. 
          I can implement advanced techniques like PEFT and LoRA for efficient fine-tuning. 
          I am also proficient in using cloud-based ML platforms such as AWS SageMaker, OpenSearch, and 
          Bedrock for model development and deployment. 
          I can optimize models for various applications, leveraging both classic and cutting-edge algorithms to meet specific project requirements.
        </p>
      </div>

      <div className="skill-item">
        <Code className="skill-icon" size={24} color="#00ffff" />
        <h2>Full Stack Development</h2>
        <p className="skill-affiliation">Background: Full stack development work at Mighty Games Group</p>
        <p className="skill-description">
          I am a full stack developer with skills in both frontend and backend technologies. 
          I have expertise in .NET and C# development, with strong object-oriented programming skills in Java and C#.
          My backend capabilities include Python, Flask, RESTful API design. 
          On the frontend, I excel in React and Vue.js. I can deploy applications on cloud platforms like AWS and Google Cloud. 
          I am also proficient at version control using Git and SVN. 
        </p>
      </div>

      <div className="skill-item">
        <GitBranch className="skill-icon" size={24} color="#00ffff" />
        <h2>Algorithms and Data Structures</h2>
        <p className="skill-affiliation">Background: Algorithms Academic Tutor at The University of Melbourne</p>
        <p className="skill-description">
          I have a strong foundation in algorithmic problem-solving and data structure design. 
          My expertise covers graph algorithms, dynamic programming, and advanced sorting and searching techniques. 
          I enjoy designing efficient algorithms and data structures tailored to specific problem domains, 
          and tackling software engineering tasks that focus on optimizing performance and scalability in real-world applications 
          to ensure robust and efficient solutions.
        </p>
      </div>

      <div className="skill-item">
      <Server className="skill-icon" size={24} color="#00ffff" />
      <h2>Computer Systems</h2>
      <p className="skill-affiliation">Background: Graduate coursework at Carnegie Mellon University</p>
      <p className="skill-description">
        Proficient in C Programming, with hands-on experience in systems-level development including 
        data manipulation, security concepts (Buffer Overflow, Bomb, Cache Attacks), memory management (Malloc), 
        shell programming and system interfaces, and distributed systems implementation (Proxy servers, SFS). 
        My coursework and projects have equipped me with a strong foundation in low-level systems programming 
        and performance optimization.
      </p>
    </div>

    <div className="skill-item">
      <Network className="skill-icon" size={24} color="#00ffff" />
      <h2>Networks</h2>
      <p className="skill-affiliation">Background: Specialized coursework at Carnegie Mellon University</p>
      <p className="skill-description">
        Comprehensive understanding of networking principles across all layers of the OSI model including 
        application layer protocols (HTTP, DNS, CDNs, P2P), transport layer mechanisms (TCP/UDP, congestion control), 
        network layer routing (IP, RIP, OSPF, BGP), and data link technologies (Ethernet, VLANs, MPLS). 
        Additionally experienced with modern networking paradigms including Software Defined Networks, 
        data center architectures, and wireless systems.
      </p>
    </div>

    <div className="skill-item">
      <Shield className="skill-icon" size={24} color="#00ffff" />
      <h2>Information Security</h2>
      <p className="skill-affiliation">Background: Security-focused coursework at Carnegie Mellon University</p>
      <p className="skill-description">
        Well-versed in cybersecurity fundamentals including cryptographic principles, access control mechanisms, 
        vulnerability assessment techniques, and security policy development. My academic training has provided 
        me with a security engineering perspective that enables me to analyze systems for potential weaknesses 
        and implement appropriate safeguards, with particular emphasis on software security and network defense 
        strategies.
      </p>
    </div>
    </div>
  );
};

export default Skills;