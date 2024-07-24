// import { duration } from '@mui/material'
import React, { useEffect } from 'react'
import { scroller } from 'react-scroll'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../src/Styles/Chatbot.css'
import ChatbotImage from '../Components/Assets/Chatbot2.png'
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  useEffect(() => {
    scroller.scrollTo('chatbot-section', {
      duration:500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);



return (
    <div className='main-div'>
      <div className="container">
        <div className="top-part">
          <div className="agent-details">

            <img src={ChatbotImage} alt="" />
            <div className="agent-text">
              <h3>AI Doctor</h3>
              <p>Doctor <span>(Online)</span></p>
            </div>

          </div>
            <CloseIcon />
        </div>
          <div className="chart-section">
            <div className="left-part">
              <div className="agent-chart">
                <img src={ChatbotImage} alt="" />

                <p>Hey!<br/>I am your AI Doctor, you can talk to me ...</p>
              </div>
            
            </div>
            
            <div className="bottom-section">
              <CameraAltIcon />
              <textarea name="" id="" placeholder='Send a Message'></textarea>
              <SendIcon />

              
            </div>          


          </div>

      </div>
      <p>Unsatisfied see a Therapist instead here</p>

    </div>
  )
}

export default Chatbot