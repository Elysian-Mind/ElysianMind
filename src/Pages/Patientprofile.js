import React, { useEffect } from 'react'
import '../../src/Styles/Patientprofile.css'
import { scroller } from 'react-scroll';
import SearchIcon from '@mui/icons-material/Search';
import messageimg from '../Components/Assets/Faith.png'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Chatbot from './Chatbot';
import Patientimage from '../Components/Assets/Patient.jpeg'

 


const  Patientprofile = () => {

  useEffect(() => {
    scroller.scrollTo('patientprofile', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  return (
    <div className='patientprofile' id='patientprofile'>
      <div className='card'>
              <div className="personalinfo">
                  <h1>Personal Info</h1>
                  <img src={Patientimage} alt="" />
                  <div className="personal">
                    <ul>
                    <p>Name: <span>Fridah Joy Namudu</span></p>
                    <p>Email: <span>joyf6166@gmail.com</span></p>
                    <p>Age: <span>22</span>
                    </p>
                    <p>Gender : <span>She\her</span></p>
                    </ul>
                  </div>
                  <div className="interests">

                    <h2>Interests</h2>

                    <div className="buttons">
                      <button>Yoga</button>
                      <button>AI Doctor</button>
                      <button>Mental health</button>
                      <button>Therapists</button>
                      <button>Communities</button>
                      <button>Vent</button>
                    </div>


                  </div>
                  <div className="settings">
                    <p> <SettingsIcon />Settings</p>
                    <p> <LogoutIcon /> Log out</p>
                  </div>



            </div>
            </div>
          <div className="card">
            <div className="threads">
                  
                <h1>ElysianMind</h1>
                <button>New Threads</button>
                <br />
                <h2>RECENT THREADS</h2>
                <ul>
                  <li>#Mental health</li>
                  <li>#Well being</li>
                  <li>#heal your mind</li>
                  <li>#Connect with your soul</li>
                  <li>#Peaceful mind</li>

                  
                </ul>
                </div>

                <div className="search">
                  <SearchIcon/> 
                  <input type="text" />
                  </div>

                <div className="card-profile" id='card'>
                  <img src={messageimg} alt="" />
                  <div className="card-text">
                    <h4>Getrude Faith</h4>
                    <p>Hi,are you coming for the session?</p>
                  </div>
                  <div className="time">12sec</div>
                </div>
                
                {/* <div className="card-profile" id='card'>
                  <img src={messageimg} alt="" />
                  <div className="card-text">
                    <h4>Getrude Faith</h4>
                    <p>Hi,are you coming for the session?</p>
                  </div>
                  <div className="time">12sec</div>
                </div> */}
                
                <div className="card-profile" id='card'>
                    <img src={messageimg} alt="" />
                    <div className="card-text">
                      <h4>Getrude Faith</h4>
                      <p>Hi,are you coming for the session?</p>
                    </div>
                    <div className="time">12sec</div>
                </div>
            </div>
            <div className="card">
              <Chatbot />

            </div>

            
    </div>

              
              
        
        
       
       
  )
}

export default Patientprofile