import React from 'react'
import '../../Components/HowItWorks/HowItWorks.css'
import textsms from '../Assets/text.png'
import therapy from '../Assets/therapy.png'
import plan from '../Assets/Plan.png'
import breakout from '../Assets/breakoutroom.png'

function HowItWorks() {
  return (
    <div className='howitworks'>
        <h1>How it Works</h1>
        {/* <p>Here are some few steps to help you out with the web application</p> */}
        <div className="how-it-works">
            <div className="card">
                <img src={textsms} alt="" />
                <div className="container">
                    <h4>CHAT</h4>
                    <p>Get to tlak to our AI trained doctor!</p>
                </div>
            </div>
            <div className="card">
                <img src={therapy} alt="" />
                <div className="container">
                    <h4>THERAPY SESSION</h4>
                    <p>Book therapy session with our therapists!</p>
                </div>
            </div>
            <div className="card">
                <img src={plan} alt="" />
                <div className="container">
                    <h4>PLAN</h4>
                    <p>Create a suitable plan for your therapy sessions and activities!</p>
                </div>
            </div>
            <div className="card">
                <img src={breakout} alt="" />
                <div className="container">
                    <h4>VENT</h4>
                    <p>Use our breakout room to vent anonymously!</p>
                </div>
            </div>
        </div>    
        <button>Join Us</button>

    </div>
  )
}

export default HowItWorks