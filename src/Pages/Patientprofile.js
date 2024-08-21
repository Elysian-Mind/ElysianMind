import React, { useEffect } from 'react'
import '../../src/Styles/Patientprofile.css'
import { scroller } from 'react-scroll';
import SearchIcon from '@mui/icons-material/Search';
import messageimg from '../Components/Assets/Faith.png'

 


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
      <div className="container">
        <div className="row">
          <div className="column">

           <h1>ElysianMind</h1>
            <button>New Threads</button>
            <br />
            <h2>RECENT THREADS</h2>
            <ul>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
              <li>#Mental health</li>
            </ul>
            <div className="search">
            <input type="text" placeholder= {<SearchIcon/>} />
            </div>
            <div className="card">
              <img src={messageimg} alt="" />
              <div className="card-text">
                Hi,are you coming for the session?
              </div>
              <div className="time">12sec</div>
            </div>
          </div>
            <div className="column2">


          </div>
          <div className="column3"></div>
        </div>
        </div>

    </div>
  )
}

export default Patientprofile