import React, { useState } from 'react'
import "./Login.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login"> 
    <form>
        <p> <AccountCircleIcon /> Log In here</p>
        <div className="form-container">
            <input onChange = {(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email...' value={email} required/>
            <input onChange = {(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' value={password} required />

            <button type='submit'> Log In</button>
        </div>
    </form>
    </div>
  )
}

export default Login