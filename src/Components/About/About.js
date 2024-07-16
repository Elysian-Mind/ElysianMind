import React from 'react';
import about from '../Assets/about-us-image.jpg'
import '../../Components/About/About.css'


  

function About() {
  return (
    <div className='about-us'>
        <div className="row">
            <div className="column">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>We connect you with licensed therapists for confidential 
                        online therapy sessions via video, phone, or text.
                        Our platform uses data to recommend therapists suited to your needs and 
                        offers personalized guidance. 
                        You can also connect with others or vent anonymously in our secure online space. 
                        We work with most insurance providers 
                        to ensure affordable access to mental healthcare for everyone.</p>
                        <button> Sign up</button>

                </div>

            </div>

            <div className="column">
                <img src={about} alt="" />
            </div>
        </div>

        
    </div>
  )
}

export default About