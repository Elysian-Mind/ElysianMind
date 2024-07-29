import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import '../../src/Styles/Chatbot.css';
import ChatbotImage from '../Components/Assets/Chatbot2.png';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Add the default message when the component mounts
    setMessages([
      {
        role: 'assistant',
        content: "Hello, I'm Elysian your AI doctor. How can I help you today?"
      }
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { role: 'user', content: input };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      // Send the message to the Flask backend
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          botName: 'Elysian'  // Sending the bot's name to the backend
        }),
      });
      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.response };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setInput('');
    }
  };

  return (
    <div className='main-div'>
      <div className="container">
        <div className="top-part">
          <div className="agent-details">
            <img src={ChatbotImage} alt="Chatbot" />
            <div className="agent-text">
              <h3>Elysian: AI Doctor</h3>
              <p>Doctor <span>(Online)</span></p>
            </div>
          </div>
          <CloseIcon />
        </div>
        <div className="chat-section">
          {messages.map((message, index) => (
            <div key={index} className={`message-container ${message.role}`}>
              <div className={`message ${message.role}`}>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-section">
          <CameraAltIcon />
          <textarea 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder='Send a Message'
          ></textarea>
          <SendIcon onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;