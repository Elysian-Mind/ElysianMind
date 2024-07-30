import React from 'react'
import '../Hero/Hero.css'
import heroImage from '../../Components/Assets/Hero.jpg'

function Hero() {
  return (
    <div className='container-home' id='home'>
        <img src={heroImage} alt="" className='heroimage'/>
        <div className="herotext">
            <h1> Elysian <br/><span>Mind</span></h1>
             <p className="tagline" id='tagline'> Connect,Heal,<span>Grow</span></p>
        </div>
       
    </div>
  )
}

export default Hero