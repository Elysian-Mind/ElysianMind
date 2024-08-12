import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import "../../Pages/auth/Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const auth = getAuth();


    const handleLogin = () => {
        // const signIn = () => {
            signInWithEmailAndPassword(auth,email,password)
            .then((userCrendetial) => {
                const user = userCrendetial.user;
                console.log("Signed in user: ", user);
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message;
                console.log("An error occured: ", errorCode, errorMessage);
            })
        

    }


  return (
    <div className='login'>
        <h1>Login</h1>
        Email: <br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        Password: <br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <p>Forgot your password ? <Link activeClass="active" to="/reset" className="reset"> Reset Password</Link>
        </p>
        <button onClick={handleLogin}> Log In</button>

        <p>Don't  have an account? <Link activeClass="active" to="/register" className="login"> Sign up</Link></p>

        
    </div>
  )
}

export default Login