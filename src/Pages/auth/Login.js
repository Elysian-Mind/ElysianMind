import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleLogin = () => {
        const signIn = () => {
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

    }


  return (
    <div>
        <h1>Login</h1>
        Email: <br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        Email: <br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}> Log In</button>
        
    </div>
  )
}

export default Login