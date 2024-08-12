import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const Register = () =>  {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth();

    const [userType, setUserType] = useState("")
    const navigate = useNavigate();
    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    }
    

     const handleRegister = () => {
            if (userType === 'Patient') {
                navigate(``);
            } else if (userType === 'Therapist') {
                navigate(`/`);
            }
        

         createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registered user: ", user)
            setEmail("")
            setPassword("")
        })

        .catch((error) => {
            const errorCode = error.code;
            const  errorMessage = error.message;
            console.log("Error occured:", errorCode, errorMessage)
        })
        

    }
  return (
    <div>
        <h1>Register</h1>
        Email:
        <br />
        <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required
        />
        <br />
        Password:
        <br />
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <br />
        
        <div className={`${!userType ? '' : 'selection'}`}>
        
        <div className='formfields' id='fields'>
            <label>
                    <input
                        type='radio'
                        value='Patient'
                        checked={userType === 'Patient'}
                        onChange={handleUserTypeChange}
                        // style={{fontSize : '35px'}}
                    />
                    Patient
                </label>
                <label>
                    <input
                        type='radio'
                        value='Therapist'
                        checked={userType === 'Therapist'}
                        onChange={handleUserTypeChange}
                    />
                    Therapist
                </label>
        </div>

        <button onClick={handleRegister}>Register</button>
        <p>Already have an account? <Link activeClass="active" to="/login" className="login"> Log in</Link>
        </p>
  </div>
  </div>
  )
}



export default Register;