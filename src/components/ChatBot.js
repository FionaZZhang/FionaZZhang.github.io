// src/components/ChatBot.js - COMPACT Q&A VERSION
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState("Hi! I'm Fiona's bot. Ask me anything about her background, skills, projects, or experience!");
  const [isLoading, setIsLoading] = useState(false);

  // Knowledge base about Fiona - this will be sent as context to GPT
  const fionaContext = `
    You are an AI assistant for Fiona Zhang's portfolio website. Here's comprehensive information about Fiona:

    PERSONAL INFO:
    - Name: Fiona Zhang (张骏菲 in Chinese)
    - Current Status: Master's student at Carnegie Mellon University (Jan 2025 - May 2026)
    - Program: Master of Science - Computer Science (Information Networking)
    - Location: Currently in PA, USA (previously Melbourne, Australia)
    - Contact: fiona.junfei@gmail.com
    - LinkedIn: https://www.linkedin.com/in/fiona-zhang-1153b3226/
    - GitHub: https://github.com/FionaZZhang

    EDUCATION:
    - Carnegie Mellon University (2025-2026): MS Computer Science (Information Networking)
      Courses: Information Security, Computer Systems, Computer Networks, Business and Management
    - University of Melbourne (2021-2023): Bachelor of Science in Computing and Software Systems
      Grade: 86 (First Class Honours)
      Scholarships: 2021 & 2022 Melbourne International Undergraduate Scholarship, 2022 Melbourne Global Scholars Award
      Activities: Design of Algorithms student representative, AIESEC Committee, Chinese Debating Team, Chinese Culture Society Marketing VP

    WORK EXPERIENCE:
    1. Machine Learning Engineer - Graduate at Mighty Games Group (April 2024 - Jan 2025)
       - Software Development in .NET C#
       - Integrated computer vision and multi-modal language models
       - Designed and deployed internal chatbot using RAG framework
       - Led R&D with AWS services (SageMaker, Bedrock, OpenSearch)

    2. Research Intern at CSIRO (Nov 2023 - Feb 2024)
       - Trained Mistral model using PEFT and LoRA with 23.39% performance improvement
       - Developed RAG system for domain-specific Q&A

    3. Algorithms Academic Tutor at University of Melbourne (Feb 2023 - Dec 2024)
       - Led tutorials on advanced algorithms and data structures
       - Collaborated on assignment development and exam questions

    RESEARCH & PUBLICATIONS:
    1. "Music Genre Classification with ResNet and Bi-GRU Using Visual Spectrograms" (2023)
       - Published on arXiv: https://arxiv.org/abs/2307.10773
       - Novel hybrid model combining ResNet and GRU for music classification
       - Achieved 81% accuracy using visual spectrograms

    2. "Visual, Auditory, and Haptic Cue Navigation Techniques for Object Tracking in VR Gameplay"
       - University of Copenhagen collaboration (2022-2023)
       - VR navigation study using multimodal feedback

    3. "Diabetic Retinopathy Detection Using GNN-Transformed Routing CapsNets" (2022)
       - 85.29% test accuracy for medical image classification

    4. "Machine-Learning Prediction of Computed Band Gaps of Double Perovskite Materials" (2021)
       - Random forest regression model for materials science

    TECHNICAL SKILLS:
    - Machine Learning: PyTorch, PEFT, LoRA, RAG systems, computer vision, NLP
    - Programming: Python, C#, .NET, Java, C, JavaScript
    - Web Development: React, Vue.js, Flask, RESTful APIs
    - Cloud: AWS (SageMaker, Bedrock, OpenSearch), Google Cloud
    - Tools: Git, SVN
    - Systems: Computer networks, information security, distributed systems

    KEY PROJECTS:
    1. MUSE: AI Music Recommender
       - Hybrid ResNet-GRU model for music genre classification
       - Web app deployed on Google Cloud
       - Paper: https://arxiv.org/abs/2307.10773

    2. Finding NEMO VR Project
       - Multimodal feedback navigation in VR environments
       - Studied visual, auditory, and haptic cues

    3. Vis-CAT Visual Cognition Platform
       - Test platform for detecting visual cognition deficits
       - Scored 95% and showcased at TRAMAGANZA 2023

    4. CATBOX Creative Platform
       - Web platform for language model creativity
       - Won "Diversity Award" at 2023 Web3 & AI Hackathon

    INTERESTS & PASSIONS:
    - Intersection of AI and Human-Computer Interaction (HCI)
    - Natural Language Processing (NLP) and Computer Vision (CV)
    - Making AI technology accessible and impactful
    - Dancing and traveling in free time
    - Exploring the convergence of AI technologies

    HOBBIES:
    - Dancing: Fiona has taught hiphop when she was doing exchange at Copenhagen. She likes choreography, hiphop, kpop.
    - Movies: Fiona enjoys watching scifi, suspense, storytelling films. 
    - Piano: Fiona has a level 8 piano certificate, and enjoys playing piano.

    LOCATION:
    - Fiona is from China, currently studying in US pittsburgh (CMU uni), and also lives in Melbourne.

    DREAM:
    - She wish to become a digital nomad. Just chilling and traveling the world.

    CAREER FOCUS:
    Fiona is passionate about developing AI solutions that enhance, simplify, and transform how humans interact with technology. Her goal is to make AI accessible and impactful beyond research, particularly in practical applications that improve user experience.

    Please answer questions about Fiona in a friendly, informative way. If asked about something not covered in this information, politely say you don't have that specific information but offer to help with what you do know about Fiona.
  `;

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Set the current question and clear answer while loading
    setCurrentQuestion(inputText);
    setCurrentAnswer('');
    setIsLoading(true);

    const questionToSend = inputText;
    setInputText(''); // Clear input immediately

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: fionaContext
            },
            {
              role: 'user',
              content: questionToSend
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from OpenAI');
      }

      const data = await response.json();
      setCurrentAnswer(data.choices[0].message.content);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setCurrentAnswer("Sorry, I'm having trouble connecting right now. Please try again later or contact Fiona directly at fiona.junfei@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What is Fiona's background?",
    "Tell me about her projects",
    "What are her technical skills?", 
    "Where did she study?",
    "Why is Fiona a fit for [role]?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInputText(question);
  };

  return (
    <div className="chatbot-section">
      <div className="chatbot-header">
        <div className="chatbot-title-section">
          <img src="/favicon.png" alt="AI Assistant" className="chatbot-favicon" />
          <h2 className="chatbot-title">Ask Anything About Fiona</h2>
        </div>
        <p className="chatbot-subtitle">Get instant answers about Fiona's background, projects, and experience</p>
      </div>

      <div className="chatbot-container">
        {/* Input section */}
        <div className="chatbot-input-section">
          <div className="chatbot-input">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Fiona..."
              disabled={isLoading}
              rows={2}
              className="chatbot-textarea"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="chatbot-send-button"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Question display */}
        {currentQuestion && (
          <div className="question-section">
            <div className="question-label">Your Question:</div>
            <div className="question-content">{currentQuestion}</div>
          </div>
        )}

        {/* Answer section */}
        <div className="answer-section">
          <div className="answer-label">
            <img src="/favicon.png" alt="AI" className="answer-icon" />
            Fiona's Bot:
          </div>
          <div className="answer-content">
            {isLoading ? (
              <div className="chatbot-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <p>{currentAnswer}</p>
            )}
          </div>
        </div>

        {/* Suggested questions - only show if no question asked yet */}
        {!currentQuestion && (
          <div className="chatbot-suggestions">
            <p className="suggestions-label">Try asking:</p>
            <div className="suggestions-grid">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-button"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;