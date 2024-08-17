import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skill-item">
        <h2>RAG ChatBot Development</h2>
        <p className="skill-description">
        I have expertise in leveraging existing language models and creating efficient Retrieval-Augmented Generation (RAG) chatbots. 
        I can process data efficiently for various input/output types, designing robust retrieval mechanisms such as implementing 
        embeddings search. I'm proficient at assigning various roles to the bots and creating an AI agent according to specific needs. 
        I'm also skilled in integrating chatbots with diverse platforms including Notion, Slack, and websites, ensuring seamless user 
        experiences across different delivery formats.
        </p>
      </div>

      <div className="skill-item">
        <h2>Machine Learning Model Training</h2>
        <p className="skill-description">
        I possess expertise in machine learning model training, specializing in PyTorch. 
        I can implement advanced techniques like PEFT and LoRA for efficient fine-tuning. 
        I'm proficient in utilizing cloud-based ML platforms such as AWS SageMaker and 
        Amazon Bedrock for model development and deployment. 
        I can optimize models for various applications, leveraging both traditional and cutting-edge 
        methodologies to meet specific project requirements.
        </p>
      </div>

      <div className="skill-item">
        <h2>Full Stack Development</h2>
        <p className="skill-description">
        I'm a versatile full stack developer with skills in both frontend and backend technologies. 
        I have expertise in .NET and C# development, with strong object-oriented programming skills in Java and C#.
        My backend capabilities include Python, Flask, RESTful API design. 
        On the frontend, I excel in React and Vue.js. I can deploy applications on cloud platforms like AWS and Google Cloud. 
        I'm also proficient at version control using Git and SVN. 
        </p>
      </div>

      <div className="skill-item">
        <h2>Algorithms and Data Structures</h2>
        <p className="skill-description">
        I have a strong foundation in algorithmic problem-solving and data structure design. 
        My expertise covers graph algorithms, dynamic programming, and advanced sorting and searching techniques. 
        I enjoy designing efficient algorithms and data structures tailored to specific problem domains, 
        and tackling software engineering tasks that focus on optimizing performance and scalability in real-world applications 
        to ensure robust and efficient solutions.
        </p>
      </div>
    </div>
  );
};

export default Skills;