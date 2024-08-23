import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
// import FemaleTherapist from '../Components/Assets/femaletherapist.png'
import Faith from '../Components/Assets/Faith.png'
// import MaleTherapist from '../Components/Assets/maletherapist.png'
import '../Styles/Therapist.css'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Jacinta from '../Components/Assets/Jacinta.png'
import Beryl from '../Components/Assets/beryl.png'

const Therapists = () => {


  useEffect(() => {
    scroller.scrollTo('therapist-section', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  return (
    <div className="therapist">
      <div id="therapist-section">
          <h1>Our Therapists</h1>
          <p>Our therapists are a team of compassionate and dedicated professionals passionate about helping individuals reach their full potential. 
            They possess a wealth of experience and expertise in various therapeutic approaches,
            allowing them to tailor treatment plans to your unique needs.  
            Each therapist fosters a safe and supportive environment where you can openly discuss your 
            challenges and work collaboratively towards your goals.</p>

            

      </div>
      <div className="therapist-card">
        <div class="card">
          <img src={Faith} alt="" />
          <h1>Getrude Faith</h1>
          <p class="title">Clinical psychologist</p>
          {/* <p>University of Nairobi</p> */}
          <div className="icons">
            <i><XIcon /></i>
           <i><LinkedInIcon /></i>
            <i><FacebookIcon /></i>
          </div>
            <p><button>CONTACT</button></p>
        </div>
        <div class="card">
          <img src={Jacinta} alt="" />
          <h1>Jacinta Muriuki</h1>
          <p class="title">Clinical Psychologist</p>
          {/* <p>Shofco</p> */}
          <div className="icons">
            <i><XIcon /></i>
            <i><LinkedInIcon /></i>
            <i><FacebookIcon /></i>
          </div>
            <p><button>CONTACT</button></p>
        </div>
        <div class="card">
          <img src={Beryl} alt="" />
          <h1>Beryl Odhiambo</h1>
          <p class="title">Clinical Psychologist</p>
          {/* <p>University of Nairobi</p> */}
            <div className="icons">
            <i><XIcon /></i>
            <i><LinkedInIcon /></i>
            <i><FacebookIcon /></i>
          </div>
            <p><button>CONTACT</button></p>
        </div>
      </div>
    </div>
  );
};

export default Therapists;