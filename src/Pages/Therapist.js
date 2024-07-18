import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import FemaleTherapist from '../Components/Assets/femaletherapist.png'
import MaleTherapist from '../Components/Assets/maletherapist.png'
import '../Styles/Therapist.css'

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

           <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={FemaleTherapist} alt="" />
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Therapists;