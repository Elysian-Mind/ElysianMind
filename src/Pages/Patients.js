import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PatientImg from '../../src/Components/Assets/patient.jpeg'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import '../Styles/Patients.css'

const Patients = () => {

    useEffect(() => {
        scroller.scrollTo('patient-section', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }, []);

  return (
    <div className='patient'>
        <div id='patient-section'>
            <div className="row">
                <div className="column">
                    <div className="patient-text">
                        <h1>Our Patient</h1>
                        <p>At Elysian Mind Care, we are dedicated to empowering you on your path to wellness. 
                            We work collaboratively with our patients to understand their unique needs and concerns. 
                            Whether you're seeking guidance for a specific condition, managing ongoing health concerns, 
                            or simply looking to improve your overall well-being, 
                            we provide a comprehensive range of services and resources to support you every step of the way.</p>
                            <button> Learn More <SouthOutlinedIcon /> </button>

                    </div>

                </div>

            <div className="column">
            <img src={PatientImg} alt="" />
            </div>
        </div>
             <h1 className='explore'>EXPLORE MORE</h1>


                <div className="about-patients">
                    <div className="card">
                        <div className="container">
                        <h4> <ConnectWithoutContactOutlinedIcon />Connect</h4>
                        <p>Get to connect with other patients anonymously</p>
                        <button>Create Room</button>

                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h4> <HealingOutlinedIcon />Heal</h4>
                            <p>Talk to a therapist of your choice and get to heal</p>
                            <button>Contact a Therapist</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h4><SpaOutlinedIcon />Grow </h4>
                            <p>Grow mentally at your own pace with resources</p>
                            <button>Review Resources</button>
                        </div>
                    </div>

                </div>


                           
            <div/>
        </div>
    </div>
                   


   
  );
}

export default Patients;