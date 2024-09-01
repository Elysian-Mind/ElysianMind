import React, { useEffect } from 'react'
import '../../src/Styles/Patientprofile.css'
import { scroller } from 'react-scroll';
// import SearchIcon from '@mui/icons-material/Search';
// import messageimg from '../Components/Assets/Faith.png'
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Chatbot from './Chatbot';
import Patientimage from '../Components/Assets/patient.jpeg'
// import { collection, query, where, getDocs} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
// import { auth } from '../configs/firebaseConfig';
import { ImHappy2 } from "react-icons/im";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { GiPyromaniac } from "react-icons/gi";
import { GiWorriedEyes } from "react-icons/gi";
// import { FaFaceSadTear } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { IoLibrary } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { DateInput } from 'rsuite';







// import { db } from '../../../configs/firebaseConfig'
// import { db } from '../configs/firebaseConfig';


 


const  Patientprofile = () => {
  const auth = getAuth();
    // const [searchTerm, setSearchTerm] = useState('');
    // const [therapists, setTherapists] = useState([]);
    // const [loading, setLoading] = useState(false);

  useEffect(() => {
    scroller.scrollTo('patientprofile', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);



// const setData = (Date, patient_name,appointment_Date  ) => {

  

//  const  booknow = (setData) => {
//   fetch('http://127.0.0.1:6000/book')
//     .then(response => response.json())
//     .then(data => setBookings(data))
//      console.log(data)
//     .catch(error => console.log(error));

   
//  }
  
  return (
    <div className='patientprofile' id='patientprofile'>
      <div className='card-element'>
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
                        <p> Settings</p>
        
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
                      </p>
                      </div>


            </div>
            </div>
            <div className='card-feeling'>
                    <h4>How are you feeling today?</h4>
                    <div className="feelings">
                      <ul>
                        <li>
                          <ImHappy2 />
                          <span>Happy</span>
                        </li>
                        <li>
                          <RiEmotionUnhappyFill />
                          <span>Calm</span>
                        </li>
                        <li>
                          <GiPyromaniac />
                          <span>Manic</span>
                        </li>
                        <li>
                          <GiWorriedEyes />
                          <span>Angry</span>
                        </li>
                      </ul>
                    </div>
                    <div className="session">
                      <p><span>Get 1 on 1 sessions </span>
                      <br /> <br/>
                        Let's open up to the things that matter the most

                      </p>
                

                      {/* <p id='book'>Book Now <AiFillSchedule /> <DateInput /> </p> */}
                      

                    </div>
                      <div className="data">
                        <button><IoLibrary /> Library</button>
                        <button><FaRobot/><Link activeClass="active" to="/chatbot">Chatbot</Link></button>

                      </div>
                </div>
    </div>
   )
}




  


export default Patientprofile