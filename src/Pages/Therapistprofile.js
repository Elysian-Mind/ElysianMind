import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import messageimg from '../Components/Assets/Faith.png'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Styles/Therapistprofile.css'
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


// import Chatbot from './Chatbot';
// import Patientimage from '../Components/Assets/Patient.jpeg'

 

function Therapistprofile() {
  const auth = getAuth();

  return (
    <div className='therapistprofile'>
      <div className='card'>
              <div className="personalinfo">
                  <h1>Personal Info</h1>
                  <img src={messageimg} alt="" />
                  <div className="personal">
                    <ul>
                    <p>Name: <span>Getrude Faith Nanzala</span></p>
                    <p>Email: <span>getrudefaith@gmail.com</span></p>
                    <p>Title: <span>Clinical Physchologist</span> </p>
                    <p>Speciality: <span>Teenagers</span>
                    </p>
                    <p>Qualification: <span>Masters Student</span></p>
                    <p>Rates: <span>$10+</span></p>


                    <p>Gender : <span>She\her</span></p>
                    </ul>
                  </div>
                  <div className="interests">

                      <h2>Expertise</h2>
                    <div className="buttons">
                      <button>Anxiety</button>
                      <button>Depression</button>
                      <button>ADHD</button>
                      <button>PTSD</button>
                      <button>Communities</button>
                      <button>Listening</button>
                    </div>


                  </div>
                  <div className="settings">
                    <p> <SettingsIcon />Settings</p>
    
                    <p>
                      <Link id='log'
                      to="#"
                      onClick={() => {
                          signOut(auth)
                              .then(() => {
                                  console.log("user signed out");
                              })
                              .catch((error) => {
                                  console.log("error", error);
                              });
                      }}
                  >
                      Log out
                  </Link>
                    <LogoutIcon /> </p>
                  </div>



            </div>
            </div>
    </div>
  )
}

export default Therapistprofile