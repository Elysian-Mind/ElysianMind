import React, { useState } from 'react'
import "./Signup.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {displayName: username})
        
  )
)
// ).catch((err) => {
//   alert(err);
// })

  }

  return (
    <div className='signup'>
        <form>
          <p> <AccountCircleIcon /> Create an Account</p>
          <div className="form-container">
              <input  onChange={(e) => setUsername(e.target.value)}type="text" placeholder='Enter your username ...' value={username}/>
              <input onChange={(e) => setEmail(e.target.value)}type="email" placeholder='Enter your email...' value={email} required/>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' value={password} required />
              <p>Register as ?</p>
              {/* <ul>
                <p><input type="radio" name= "Admin" id="" /> Admin</p>
                <p><input type="radio" name= "Admin" id="" /> Patient</p>
                <p><input type="radio" name= "Admin" id="" /> Therapist</p>
              </ul>
               */}

              <button onClick={handleSignup}> Sign Up</button>
          </div>
        </form>
    </div>
  )
}

export default Signup