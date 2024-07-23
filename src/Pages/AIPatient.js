import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import '../Styles/AIPatient.css'; // Make sure to create and style this CSS file

const AIPatient = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { message: input });

      if (response.data && response.data.response) {
        setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response.data.response }]);
        setInput('');
      } else {
        console.error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="ai-patient">
      <h1>Chat With Our AI Therapist</h1>
      <div className="chat-box">
        <div className="chat-history">
          {messages.map((msg, index) => (
            <div key={index} className={msg.role}>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Talk to me, I am here for you"
          />
          <button id="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AIPatient;
