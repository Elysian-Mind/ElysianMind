import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
            <h1 className='form-title'> Who are you signing up as?</h1>
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
                <button onClick={handleSubmit}> Continue</button>
            </div>
            <p>Already have an account? <Link to='/login'>Log in</Link> </p>
        </div>

    </div>
  )
}

export default Signup