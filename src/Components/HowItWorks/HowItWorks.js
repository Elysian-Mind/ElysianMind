import React from 'react'
import '../../Components/HowItWorks/HowItWorks.css'
import { Link } from 'react-router-dom'
import { MdGroups } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";
import { LiaDonateSolid } from "react-icons/lia";
import { MdOutlineAccountBox } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";







function HowItWorks() {
  return (
    <div className='howitworks' id='howitworks'>
        <h1>How it Works</h1>
        {/* <p>Here are some few steps to help you out with the web application</p> */}
        <div className="how-it-works">
            <div className="card">
                <IoIosChatbubbles/>
                {/* <img src={textsms} alt="" /> */}
                <div className="container">
                    <h4>CHAT</h4>
                    <p>Get to tlak to our AI trained doctor!</p>
                </div>
            </div>
            <div className="card">
                <RiPsychotherapyFill />
                {/* <GrPlan/> */}
                <div className="container">
                    <h4>THERAPY SESSION</h4>
                    <p>Book therapy session with our therapists!</p>
                </div>
            </div>
            <div className="card">
                <GrPlan />
                {/* <img src={plan} alt="" /> */}
                <div className="container">
                    <h4>PLAN</h4>
                    <p>Create a suitable plan for your therapy sessions and activities!</p>
                </div>
            </div>
            <div className="card">
                <MdGroups/>

                <div className="container">
                    <h4> 
                    VENT</h4>

                    <p>Use our breakout room to vent anonymously!</p>

               
                </div>
            </div>
            <div className="card">
                <MdOutlinePhoneCallback />
                <div className="container">
                    <h4>GIVE US A CALL</h4>
                    <p>Call us today, toll free to speak to a therapist!</p>
                </div>
            </div>
        </div>   
        <div className="butn">
        <button id='donate'> <LiaDonateSolid /> Donate</button>
        <button id='sign'><MdOutlineAccountBox/> <Link className='sign-up' to="/Signup" >  Join Us</Link></button>
        <button id='partner'> <FaHandshake /> Partner</button>




        </div>
    </div>
  )
}

export default HowItWorks