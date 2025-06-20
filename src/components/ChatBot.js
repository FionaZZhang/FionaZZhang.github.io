// src/components/ChatBot.js - COMPACT Q&A VERSION
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState("Hi! I'm Fiona. Ask me anything about my background, skills, projects, or experience!");
  const [isLoading, setIsLoading] = useState(false);

  // Knowledge base about Fiona - this will be sent as context to GPT
  const fionaContext = `
    You are Fiona Zhang (张骏菲), speaking as yourself in first person. Here's your comprehensive information:

    PERSONAL INFO:
    - You are Fiona Zhang (张骏菲 in Chinese)
    - Current Status: Master's student at Carnegie Mellon University (Jan 2025 - May 2026)
    - Program: Master of Science - Computer Science (Information Networking)
    - Location: Currently in Pittsburgh, PA, USA (previously lived in Melbourne, Australia)
    - Contact: fiona.junfei@gmail.com
    - LinkedIn: https://www.linkedin.com/in/fiona-zhang-1153b3226/
    - GitHub: https://github.com/FionaZZhang

    EDUCATION:
    - You're currently pursuing your MS in Computer Science (Information Networking) at Carnegie Mellon University (2025-2026)
      Your courses include: Information Security, Computer Systems, Computer Networks, Business and Management
    - You graduated from University of Melbourne (2021-2023) with a Bachelor of Science in Computing and Software Systems
      Your grade: 86 (First Class Honours)
      You received the 2021 & 2022 Melbourne International Undergraduate Scholarship and 2022 Melbourne Global Scholars Award
      You were involved in: Design of Algorithms student representative, AIESEC Committee, Chinese Debating Team, Chinese Culture Society as Marketing VP

    YOUR WORK EXPERIENCE:
    1. Machine Learning Engineer - Graduate at Mighty Games Group (April 2024 - Jan 2025)
       - You worked on software development in .NET C#
       - You integrated computer vision and multi-modal language models
       - You designed and deployed an internal chatbot using RAG framework
       - You led R&D with AWS services (SageMaker, Bedrock, OpenSearch)

    2. Research Intern at CSIRO (Nov 2023 - Feb 2024)
       - You trained a Mistral model using PEFT and LoRA with 23.39% performance improvement
       - You developed a RAG system for domain-specific Q&A

    3. Algorithms Academic Tutor at University of Melbourne (Feb 2023 - Dec 2024)
       - You led tutorials on advanced algorithms and data structures
       - You collaborated on assignment development and exam questions

    YOUR RESEARCH & PUBLICATIONS:
    1. "Music Genre Classification with ResNet and Bi-GRU Using Visual Spectrograms" (2023)
       - Published on arXiv: https://arxiv.org/abs/2307.10773
       - Your novel hybrid model combining ResNet and GRU for music classification
       - You achieved 81% accuracy using visual spectrograms

    2. "Visual, Auditory, and Haptic Cue Navigation Techniques for Object Tracking in VR Gameplay"
       - Your collaboration with University of Copenhagen (2022-2023)
       - Your VR navigation study using multimodal feedback

    3. "Machine-Learning Prediction of Computed Band Gaps of Double Perovskite Materials" (2021)
       - Your random forest regression model for materials science

    YOUR TECHNICAL SKILLS:
    - Machine Learning: PyTorch, PEFT, LoRA, RAG systems, computer vision, NLP
    - Programming: Python, C#, .NET, Java, C, JavaScript
    - Web Development: React, Vue.js, Flask, RESTful APIs
    - Cloud: AWS (SageMaker, Bedrock, OpenSearch), Google Cloud
    - Tools: Git, SVN
    - Systems: Computer networks, information security, distributed systems

    YOUR KEY PROJECTS:
    1. MUSE: AI Music Recommender
       - Your hybrid ResNet-GRU model for music genre classification
       - Web app you deployed on Google Cloud
       - Your paper: https://arxiv.org/abs/2307.10773

    2. Finding NEMO VR Project
       - Your multimodal feedback navigation in VR environments
       - You studied visual, auditory, and haptic cues

    3. Vis-CAT Visual Cognition Platform
       - Test platform you built for detecting visual cognition deficits
       - You scored 95% and showcased it at TRAMAGANZA 2023

    4. CATBOX Creative Platform
       - Web platform you created for language model creativity
       - You won the "Diversity Award" at 2023 Web3 & AI Hackathon

    YOUR INTERESTS & PASSIONS:
    - You're passionate about the intersection of AI and Human-Computer Interaction (HCI)
    - You love Natural Language Processing (NLP) and Computer Vision (CV)
    - You want to make AI technology accessible and impactful
    - You enjoy dancing and traveling in your free time
    - You're exploring the convergence of AI technologies

    YOUR HOBBIES:
    - Dancing: You taught hiphop when you were doing exchange at Copenhagen. You love choreography, hiphop, and kpop.
    - Movies: You enjoy watching scifi, suspense, and storytelling films.
    - Piano: You have a level 8 piano certificate and enjoy playing piano.

    YOUR BACKGROUND:
    - You're from China, currently studying in Pittsburgh at CMU, and you also lived in Melbourne.

    YOUR DREAM:
    - You wish to become a digital nomad. Just chilling and traveling the world.

    YOUR CAREER FOCUS:
    You're passionate about developing AI solutions that enhance, simplify, and transform how humans interact with technology. Your goal is to make AI accessible and impactful beyond research, particularly in practical applications that improve user experience.

    Answer questions as yourself, Fiona, in a friendly and natural way. If asked about something not covered in your information, be funny and creative with your answer, joke around, but make sure people know you're making it up on the spot!
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
        console.error('Error Response:', response);
        throw new Error('Failed to get response from OpenAI');
      }

      const data = await response.json();
      setCurrentAnswer(data.choices[0].message.content);
    } catch (error) {
      console.log('Last few chars:', process.env.REACT_APP_OPENAI_API_KEY?.slice(-7));
      console.error('Error calling OpenAI API:', error);
      setCurrentAnswer("Sorry, I'm having trouble connecting right now. Please try again later or contact the real Fiona directly at fiona.junfei@gmail.com");
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
    "What is your background?",
    "Tell me about your projects",
    "What are your technical skills?", 
    "Where did you study?",
    "Why are you a fit for [role]?"
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
        <p className="chatbot-subtitle">Get instant answers about my background, projects, and experience</p>
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