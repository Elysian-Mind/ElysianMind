import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Styles/Signup.css'


function Signup() {
    const [userType, setUserType] = useState("")
    const navigate = useNavigate()

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);

    }
    const handleSubmit = () => {
        if(userType === 'Therapist'){
            navigate('/register/Therapist')
        }else if (userType === 'Patient'){
            navigate('/register/Patient')
        }
    };

  return (
    <div className='choose'>
        <div className="formcomponent">
            <h1 className='form-title'> Create Account</h1>
            <h4 className='form-text'>Select User <hr /> </h4>
            <div className={`${!userType ? '' : 'selection'}`}>
                <div className="formfields" id='fields'>
                    <label>
                    <input type="radio" value='Therapist' checked={userType === 'Therapist'} onChange={handleUserTypeChange} />
                    Therapist
                    </label>
                    <label>
                    <input type="radio" value='Patient' checked={userType === 'Patient'} onChange={handleUserTypeChange} />
                    Patient
                    </label>
                </div>
                <button className='submit' onClick={handleSubmit}> Continue</button>
            </div>
            <div className="other">

                <p>Already have an account Login below ... </p> 
                <button><Link className='link'to='/therapistlogin'>Therapist</Link></button>
                <button><Link className='link' to='/patientlogin'>Patient</Link></button>
                </div>

                
        </div>

    </div>
  )
}

export default Signup