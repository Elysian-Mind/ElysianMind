import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import '../../src/Styles/Chatbot.css';
import ChatbotImage from '../Components/Assets/Chatbot2.png';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { role: 'user', content: input };
      setMessages([...messages, newMessage]);

      // Send the message to the Flask backend
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.response };
      setMessages([...messages, newMessage, botMessage]);
      setInput('');
    }
  };

  return (
    <div className='main-div'>
      <div className="container">
        <div className="top-part">
          <div className="agent-details">
            <img src={ChatbotImage} alt="" />
            <div className="agent-text">
              <h3>Elysian: AI Doctor</h3>
              <p>Doctor <span>(Online)</span></p>
            </div>
          </div>
          <CloseIcon />
        </div>
        <div className="chart-section">
          <div className="left-part">
            {messages.map((message, index) => (
              <div key={index} className={`agent-chart ${message.role}`}>
                <img src={ChatbotImage} alt="" />
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className="right-part">
            <p>Hello</p>
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
    </div>
  );
};

export default Chatbot;


